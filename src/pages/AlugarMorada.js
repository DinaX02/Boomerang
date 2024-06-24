import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import NavbarWeb from '../components/NavbarWeb';
// import { Link } from 'react-router-dom';
// import addMoradaIcon from '../assets/icons/icon_AddMorada.svg';
// import iconPontoRecolho from '../assets/icons/icon_PontoRecolha.png';
// import dropPontoRecolha from '../assets/icons/drop_PontoRecolha.png';
// import iconMoradaSelect from '../assets/icons/selectedAdress.svg';
import styled from "styled-components";
import PreviewCard from '../components/PreviewCard';
import Button from '../components/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { updateProgressRent } from '../redux/rentSlice';
import ChooseAdressComponent from '../components/ChooseAdressComponent';
import { useCreateCheckOutSessionMutation, useApprovedTransactionMutation } from '../redux/transactionAPI';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51PJCQdFBiJETLeRnD0PIPUcMRSjBIXRDpvghcG7ADbVchELMUjIZ2XJ5dBnTBLeTVoRFMtn14xCdqBpOeq8nu1dS005Mv6Qbyy');

const MainContainer = styled.div`
  padding: 25px;
  width: 100%;
  height: 80vh;
`;



const MoradaSelecionada = styled.div`
  background-color: ${props => (props.selecionada ? '#343541' : '#ffffff')};
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
  font-size: 13px ;
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
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;
  width: 100%;
  height: 45px;
  padding: 10px 0px 10px 30px;
  margin-bottom: 30px;
`;
const PontoRecolha = styled.div`
background-color: white;
border-radius: 5px;
box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);;
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

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;
const ParagraphIntroAdress = styled.p`
  color: rgb(84, 84, 84);

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const AlugarMorada = () => {
    const [moradas, setMoradas] = useState([]);
    const [moradaSelecionada, setMoradaSelecionada] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.RentSecond.progressRentList);
    // const [buttonDisable, setButtonDisable] = useState(false);
    const [BtnPublicarEnabled, setBtnPublicarEnabled] = useState(false);
    const [createCheckOutSession] = useCreateCheckOutSessionMutation();
    const [approvedTransaction] = useApprovedTransactionMutation();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const transactionId = query.get('transactionId');
    const state = query.get('state');

    useEffect(() => {
        const storedMoradas = JSON.parse(localStorage.getItem('moradas')) || [];
        setMoradas(storedMoradas);
    }, []);


    // const handleRemoverMorada = (index) => {
    //     const novasMoradas = [...moradas];
    //     novasMoradas.splice(index, 1);
    //     setMoradas(novasMoradas);
    //     localStorage.setItem('moradas', JSON.stringify(novasMoradas));
    // };

    const navigate = useNavigate();

    const handleNextStep = async () => {
        if (state === "pending") {
            console.log("pedido ENDPOINT Approved");
            try {
                const response = await approvedTransaction({ transactionId: transactionId, ownerUserAddress: list.morada });
                navigate("/notifications-page");
                // Check if the response has a data property

                console.log("Approved successfully");
            }
            catch (error) {
                console.error("Error Approved:", error);
            }

        }
        else {
            try {
                // Dispatch the update if necessary
                // dispatch(updateProgressRent({ index: 0, updatedData: { morada: moradaSelecionada } }));

                console.log("extras", list.extras);
                console.log("morada", list.morada);

                // Make the API call
                const response = await createCheckOutSession({ transactionId: 1, selectedExtras: list.extras, renterUserAddress: list.morada });

                // Check if the response has a data property
                const session = response.data || response;

                console.log("CheckOut Session created successfully:", session);

                const stripe = await stripePromise;

                // Redirect to the Stripe Checkout page
                await stripe.redirectToCheckout({ sessionId: session.id });

            } catch (error) {
                console.error("Error creating CheckOut Session:", error);
            }
        }
    };


    const handleAddressSelect = () => {
        setBtnPublicarEnabled(true);
    };


    return (
        <div>
            <NavbarWeb />
            <Header name="Morada" />
            <MainContainer>
                {!transactionId
                    ? <PreviewCard id={list.article_id} valor={list.total} />
                    : <Container>
                        <ParagraphIntroAdress>
                            Escolhe a Morada de Retorno para garantir uma recuperação simples
                            e eficiente da tua peça após o período de aluguer.
                        </ParagraphIntroAdress>
                    </Container>}
                <ChooseAdressComponent onAddressSelect={handleAddressSelect} />

                {/* <div style={{ paddingTop: '25px' }}>


                    {moradas.map((morada, index) => (
                        <MoradaSelecionada
                            key={index}
                            selecionada={morada === moradaSelecionada}
                            onClick={() => { setMoradaSelecionada(morada); setButtonDisable(true) }}
                        >
                            <ConteudoMorada>
                                <IconMoradaSelect
                                    src={iconMoradaSelect}
                                    alt="icon"
                                    selecionada={morada === moradaSelecionada}
                                />
                                {morada}
                            </ConteudoMorada>
                            <BotaoRemover
                                onClick={() => handleRemoverMorada(index)}
                                selecionada={morada === moradaSelecionada}
                            >
                                X
                            </BotaoRemover>
                        </MoradaSelecionada>
                    ))}
                </div>

                <Link to={"/adicionar-morada"}>
                    <SelecionarMorada>

                        <button style={{
                            backgroundColor: "transparent",
                            border: "none",
                            width: "90%",
                            textAlign: "left",
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "#000000"

                        }}>Adicionar Morada</button>
                        <img style={{
                            width: "20px",


                        }} src={addMoradaIcon} alt="Ícone de adicionar Morada"></img>
                    </SelecionarMorada>
                </Link>
                <hr></hr>
                <PontoRecolha>

                    <button style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#cbcbcb",
                        textAlign: "left",
                        fontSize: "13px",
                        fontWeight: "500",

                    }}>Ponto de Recolha</button>

                    <img style={{
                        width: "18px",
                        marginBottom: "1px",

                    }} src={iconPontoRecolho} alt="icon"></img>
                    <img style={{
                        width: "25px",
                        float: "right",
                        marginTop: "9px",

                    }} src={dropPontoRecolha} alt="Adicionar Morada"></img>
                </PontoRecolha> */}
                <ConfirmButton>
                    <Button onClick={handleNextStep} disable={!BtnPublicarEnabled} text="Confirmar" />
                </ConfirmButton>

            </MainContainer>
        </div>
    )
}

export default AlugarMorada