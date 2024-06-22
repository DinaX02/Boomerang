import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import WaitIcon from "../assets/icons/wait-icon.svg";
import Button from "../components/Button";

const WaitAcceptRent = () => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate("/");
    };

    return (
        <WaitAcceptRentStyle>
            <img src={WaitIcon} alt="icone de aguardar" />
            <h1>Está quase.</h1>
            <p>Só falta o responsável aceitar o pedido de aluguer. Irás receber uma notificação assim que recebermos resposta.</p>
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

export default WaitAcceptRent