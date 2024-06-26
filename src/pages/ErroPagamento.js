import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from "../components/Button";
import iconOverlay from "../assets/icons/tick_iconOverlayFInal.svg";

const AluguerComSucesso = () => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate("/notifications-page");
    };

    return (
        <WaitAcceptRentStyle>
            <h1 className='erroTitle'>Erro :(</h1>
            <h1>Erro ao efetuar pagamento</h1>
            <ConfButton>
                <Button onClick={handleNextStep} text="Concluir" />
            </ConfButton>
        </WaitAcceptRentStyle>
    )
}

const WaitAcceptRentStyle = styled.div`
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .erroTitle {
        color: #c80000;
        font-size: 30px;
        font-weight: bold;
    }
    h1{
        font-size: 20px;
        font-weight: 600;
        padding-top: 24px;
    }
    p{
        font-size: 14px;
    }
`

const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

export default AluguerComSucesso