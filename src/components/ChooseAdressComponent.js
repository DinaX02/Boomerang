import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import addMoradaIcon from '../assets/icons/icon_AddMorada.png';
import iconPontoRecolho from '../assets/icons/icon_PontoRecolha.png';
import dropPontoRecolha from '../assets/icons/drop_PontoRecolha.png';
import iconMoradaSelect from '../assets/icons/selectedAdress.svg';
import styled from "styled-components";
import { useFetchLocationQuery, useDeleteLocationMutation } from '../redux/locationAPI';
import { CircularProgress } from "@mui/material";
import colors from './../assets/colors';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgressRent } from "../redux/rentSlice";

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 25px 30px;
`;

const MoradaSelecionada = styled.div`
  background-color: ${props => (props.selecionada ? `${colors.cinzaEscuro}` : '#ffffff')};
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-bottom: 30px;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
`;

const ConteudoMorada = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden !important;
`;

const BotaoRemover = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  cursor: pointer;
`;

const IconMoradaSelect = styled.img`
  width: 12px;
  visibility: ${props => (props.selecionada ? 'block' : 'hidden')};
  margin: 0px 10px 0px 5px;
`;

const SelecionarMorada = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 30px;
`;

const PontoRecolha = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  width: 100%;
  height: 45px;
  padding: 10px 10px 10px 30px;
  margin-top: 30px;
`;

const ConfirmButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
`;

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
`;

const ChooseAdressComponent = ({ onAddressSelect }, props) => {
    const [moradas, setMoradas] = useState([]);
    const [moradaSelecionada, setMoradaSelecionada] = useState('');
    const { data: locations, isLoading, refetch } = useFetchLocationQuery();
    const [deleteLocationMutation] = useDeleteLocationMutation();
    const [remove, setRemove] = useState(false);
    const list = useSelector((state) => state.Rent.progressRentList);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedMoradas = JSON.parse(localStorage.getItem('moradas')) || [];
        setMoradas(storedMoradas);
    }, []);

    // Atualiza moradas sempre que locations mudar
    useEffect(() => {
        refetch();
        if (locations) {
            setMoradas(locations);
            localStorage.setItem('moradas', JSON.stringify(locations));
        }
    }, [locations, refetch]);

    const handleRemoverMorada = async (id) => {
        setRemove(true);
        try {
            // Chamar a função de mutação para deletar a localização
            await deleteLocationMutation(id);

            // Atualizar a lista de moradas após a remoção
            const novasMoradas = moradas.filter(morada => morada.id !== id);
            setMoradas(novasMoradas);
            localStorage.setItem('moradas', JSON.stringify(novasMoradas));

            // Limpar a morada selecionada se ela for removida
            if (moradaSelecionada && moradaSelecionada.id === id) {
                setMoradaSelecionada('');
            }

            // Invocar a função callback para atualizar o estado do endereço selecionado
            onAddressSelect();
        } catch (error) {
            console.error('Erro ao remover localização:', error);
            // Tratar o erro conforme necessário (ex: exibir mensagem para o usuário)
        }
    };

    const handleToggleMorada = (morada) => {
        if (morada.id === moradaSelecionada.id) {
            setMoradaSelecionada('');
        } else {
            dispatch(updateProgressRent({ index: 0, updatedData: { morada: morada } }));
            setMoradaSelecionada(morada);
        }
        onAddressSelect();
    };

    return (
        <div>
            {isLoading && <Loader className={'loader'} color="success" />}

            {!isLoading && <MainContainer>
                {!isLoading && moradas.map((morada, index) => (
                    <MoradaSelecionada
                        key={index}
                        selecionada={morada.id === moradaSelecionada.id && !remove}
                        onClick={() => handleToggleMorada(morada)}
                    >
                        <ConteudoMorada>
                            <IconMoradaSelect
                                src={iconMoradaSelect}
                                alt="icon"
                                selecionada={morada.id === moradaSelecionada.id && !remove}
                            />
                            {morada.address}
                        </ConteudoMorada>
                        <BotaoRemover
                            onClick={() => handleRemoverMorada(morada.id)}
                          selecionada={morada.id === moradaSelecionada.id && !remove}
                        >
                            X
                        </BotaoRemover>
                    </MoradaSelecionada>
                ))}

                <Link to={"/adress-publish"}>
                    <SelecionarMorada>
                        <button style={{
                            backgroundColor: "transparent",
                            border: "none",
                            width: "90%",
                            textAlign: "left",
                            fontSize: "16px",
                            fontWeight: "500",
                        }}>Adicionar Morada</button>
                        <img style={{
                            width: "20px",
                        }} src={addMoradaIcon} alt="Adicionar Morada" />
                    </SelecionarMorada>
                </Link>
                <hr></hr>
                <PontoRecolha>
                    <button style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#cbcbcb",
                        textAlign: "left",
                        fontSize: "16px",
                        fontWeight: "500",
                    }}>Ponto de Recolha</button>
                    <img style={{
                        width: "18px",
                        marginBottom: "1px",
                    }} src={iconPontoRecolho} alt="icon" />
                    <img style={{
                        width: "25px",
                        float: "right",
                        marginTop: "9px",
                    }} src={dropPontoRecolha} alt="Adicioanr Morada" />
                </PontoRecolha>
                <ConfirmButton>
                </ConfirmButton>
            </MainContainer>}
        </div>
    )
}

export default ChooseAdressComponent;
