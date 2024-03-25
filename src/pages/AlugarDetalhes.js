import React, { useState } from 'react';
import Header from '../components/Header/Header';
import iconMoradaSelect from '../assets/icons/selectedAdress.svg';
import styled from 'styled-components';
import PreviewCard from '../components/PreviewCard';
import iconFolha from '../assets/icons/fa-solid_leaf.svg';
import iconInfo from '../assets/icons/infoIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgressRent } from '../redux/rentSlice';
import Modal from '../components/Modal';

const MainContainer = styled.div`
  padding: 25px;
  width: 100%;
  height: 80vh;
`;

const ConfirmButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 60px;
`;

const LavagemSelecionada = styled.button`
  background-color: ${props => (props.selecionada ? '#343541' : '#ffffff')};
  border-radius: 5px;
  width: 90%;
  height: 40px;
  margin: 7px 0px;
  color: ${props => (props.selecionada ? '#ffffff' : '#000000')};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  border: none;
`;

const MainSelection = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
`;

const ButtonInfo = styled.div`
  width: 10%;
`;

const ConteudoLavagem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden !important;
  font-size: 13px;
  font-weight: 500;
`;

const IconLavagemSelect = styled.img`
  width: 10px;
  visibility: ${props => (props.selecionada ? 'visible' : 'hidden')};
  margin: 0px 10px 0px 0px;
`;

const ValorLavagem = styled.div`
  margin-left: auto;
  font-weight: bold;
  border-left: 1px solid;
  width: 15%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${props => (props.selecionada ? 'ffffff' : '#e4e4e4')};
`;

const IconFolha = styled.img`
  width: 12px;
  visibility: ${props => (props.valorCincoEuros ? 'visible' : 'hidden')};
  margin: 0px 10px 0px 5px;
`;

const ParagraphMessageModal = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;
`;

const AlugarDetalhes = () => {
    const [lavagemSelecionada, setLavagemSelecionada] = useState(null);
    const [transporteSelecionado, setTransporteSelecionado] = useState(null);
    const [fecharModal, setFecharModal] = useState(true);
    const [fecharModal2, setFecharModal2] = useState(true);
    const [fecharModal3, setFecharModal3] = useState(true);
    const [fecharModal4, setFecharModal4] = useState(true);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const list = useSelector((state) => state.Rent.progressRentList);

    const modalMessages = [
        (
            <ParagraphMessageModal>
                <strong>Vale de 1 lavagem</strong> numa lavandaria parceira com consumo energético reduzido.
                Com esta opção tens direito a um <strong>cupão de 7%</strong> no teu próximo aluguer.
            </ParagraphMessageModal>
        ),
        (
            <ParagraphMessageModal>
                Lavagem a cargo do utilizador, o mesmo deve lavar a peça antes da devolução.
            </ParagraphMessageModal>
        ),
        (
            <ParagraphMessageModal>
                Transportadora parceira com consumo energético reduzido. Inclui <strong><i>tracking</i></strong> da encomenda.
                Com esta opção tens direito a um <strong>cupão de 7%</strong> no teu próximo aluguer
            </ParagraphMessageModal>
        ),
        (
            <ParagraphMessageModal>
                Transporte a cargo do utilizador, o mesmo deve deslocar-se para efetuar a devolução da peça.
            </ParagraphMessageModal>
        ),
    ];

    const handleIconClick = (index) => {
        switch(index) {
            case 0:
                setFecharModal(false);
                break;
            case 1:
                setFecharModal2(false);
                break;
            case 2:
                setFecharModal3(false);
                break;
            case 3:
                setFecharModal4(false);
                break;
        }
    };

    const lavagens = [
        { nome: 'Lavandaria Sustentável', valor: 5, modalIndex: 0 },
        { nome: 'Lavagem feita pelo utilizador', valor: 0, modalIndex: 1 },
    ];

    const transportes = [
        { nome: 'Transportadora Eco-Friendly', valor: 5, modalIndex: 2 },
        { nome: 'Transporte a cargo do utilizador', valor: 0, modalIndex: 3 },
    ];

    const handleLavagemClick = index => {
        setLavagemSelecionada(index);
    };

    const handleTransporteClick = index => {
        setTransporteSelecionado(index);
    };

    const isContinuarDisabled = lavagemSelecionada === null || transporteSelecionado === null;

    const handleNextStep = () => {
        const detalhes = { detalhes: [lavagemSelecionada, transporteSelecionado] };
        dispatch(updateProgressRent({ index: 0, updatedData: detalhes }));
        navigate("/valor-total");
    };

    return (
        <div>
            <Header name="Detalhes de Aluguer" />
            <MainContainer>
                <Modal
                    fecharModal={fecharModal}
                    setFecharModal={setFecharModal}
                    message={modalMessages[0]}
                />
                <Modal
                    fecharModal={fecharModal2}
                    setFecharModal={setFecharModal2}
                    message={modalMessages[1]}
                />
                <Modal
                    fecharModal={fecharModal3}
                    setFecharModal={setFecharModal3}
                    message={modalMessages[2]}
                />
                <Modal
                    fecharModal={fecharModal4}
                    setFecharModal={setFecharModal4}
                    message={modalMessages[3]}
                />
                <PreviewCard id={list.article_id} valor={list.total} />
                <div style={{ paddingTop: "25px" }}>
                    {lavagens.map((lavagem, index) => (
                        <MainSelection key={index}>
                            <LavagemSelecionada
                                selecionada={lavagemSelecionada === index}
                                onClick={() => handleLavagemClick(index)}
                                name={lavagens.nome}
                            >
                                <ConteudoLavagem>
                                    <IconLavagemSelect src={iconMoradaSelect} alt="icone opção selecionada" selecionada={lavagemSelecionada === index} />
                                    {lavagem.nome}
                                    <IconFolha src={iconFolha} alt="icone de sustentabilidade" valorCincoEuros={lavagem.valor === 5} />
                                    {lavagem.valor !== 0 && <ValorLavagem selecionada={lavagemSelecionada === index}>{lavagem.valor} €</ValorLavagem>}
                                </ConteudoLavagem>
                            </LavagemSelecionada>
                            <ButtonInfo>
                                <button
                                    style={{ backgroundColor: "transparent", border: "none" }}
                                    onClick={() => handleIconClick(lavagem.modalIndex)}
                                >
                                    <img
                                        style={{ width: "17px" }}
                                        src={iconInfo}
                                        alt="ícone de informação"
                                    ></img>
                                </button>
                            </ButtonInfo>
                        </MainSelection>
                    ))}
                </div>
                <hr style={{ width: "90%" }} />
                <div style={{ paddingTop: "0px" }}>
                    {transportes.map((transporte, index) => (
                        <MainSelection key={index}>
                            <LavagemSelecionada
                                selecionada={transporteSelecionado === index}
                                onClick={() => handleTransporteClick(index)}
                                name={transporte.nome}
                            >
                                <ConteudoLavagem>
                                    <IconLavagemSelect src={iconMoradaSelect} alt="icone opção selecionada" selecionada={transporteSelecionado === index} />
                                    {transporte.nome}
                                    <IconFolha src={iconFolha} alt="icone de sustentabilidade" valorCincoEuros={transporte.valor === 5} />
                                    {transporte.valor !== 0 && <ValorLavagem selecionada={transporteSelecionado === index}>{transporte.valor} €</ValorLavagem>}
                                </ConteudoLavagem>
                            </LavagemSelecionada>
                            <ButtonInfo>
                                <button
                                    style={{ backgroundColor: "transparent", border: "none" }}
                                    onClick={() => handleIconClick(transporte.modalIndex)}
                                >
                                    <img
                                        style={{ width: "17px" }}
                                        src={iconInfo}
                                        alt="ícone de informação"
                                    ></img>
                                </button>
                            </ButtonInfo>
                        </MainSelection>
                    ))}
                </div>
                <ConfirmButton>
                    <button
                        disabled={isContinuarDisabled}
                        onClick={handleNextStep}
                        style={{
                            backgroundColor: isContinuarDisabled ? '#999999' : '#343541',
                            color: 'white',
                            border: 'none',
                            width: '144px',
                            height: '36px',
                            borderRadius: '5px',
                            outline: "none",
                            fontSize: '15px',
                            fontWeight: 'bold',
                            fontFamily: "Montserrat",
                        }}
                    >
                        Continuar
                    </button>
                </ConfirmButton>
            </MainContainer>
        </div>
    );
};

export default AlugarDetalhes;
