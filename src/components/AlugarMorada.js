import React from 'react'
import Header from '../components/Header/Header';
import NavbarWeb from '../components/NavbarWeb';
import { Link } from 'react-router-dom'
import addMoradaIcon from '../assets/icon_AddMorada.png';
import iconPontoRecolho from '../assets/icon_PontoRecolha.png';
import dropPontoRecolha from '../assets/drop_PontoRecolha.png';

import styled from "styled-components";


const AlugarMorada = () => {

    const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px 30px;
`;

    const ArtigoContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  width: 100%;
  height: 120px;
  margin-bottom: 70px;
  
`;
    const MoradaSelecionada = styled.div`
  background-color: #343541;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  margin-bottom: 30px;
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

    return (
        <div>
            <NavbarWeb />
            <Header name="Morada" />
            <MainContainer>
                <ArtigoContainer></ArtigoContainer>
                <MoradaSelecionada></MoradaSelecionada>

                <Link to={"/adicionar-morada"}>
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


                        }} src={addMoradaIcon} alt="Adicioanr Morada"></img>
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

                    }} src={iconPontoRecolho} alt="icon"></img>
                    <img style={{
                        width: "25px",
                        float: "right",
                        marginTop: "9px",

                    }} src={dropPontoRecolha} alt="Adicioanr Morada"></img>
                </PontoRecolha>
                <ConfirmButton>
                    <button style={{
                        backgroundColor: "#343541",
                        color: "white",
                        border: "none",
                        width: "180px",
                        height: "40px",
                        borderRadius: "5px",
                        fontSize: "17px",
                        fontWeight: "700",

                    }}>Confirmar</button>
                </ConfirmButton>

            </MainContainer>
        </div>
    )
}

export default AlugarMorada