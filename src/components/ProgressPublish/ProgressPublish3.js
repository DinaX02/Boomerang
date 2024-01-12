import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import InputMeasuresNotMandatory from "../InputsMesuresNotMandatory";
import ButtonWithInfoIcon from "../ButtonWithInfoIcon";
import Header from "../Header/Header";

import "../components.css";


const SpaceTopComponent = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDoisBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 600px;
  margin-top: 9em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ProgressPublish3 = () => {

  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-4");
  };

  return (
    <div>
      <Header name="Publicar / Etapa 3 de 5" />
      <SpaceTopComponent>
        <ButtonWithInfoIcon btnName="Selecionar Estado" infoName="Estado"/>
      </SpaceTopComponent>
      <InputMeasuresNotMandatory/>
      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button text="Próximo" onClick={handleNextStepPublish} />
      </ContainerDoisBtn>
  </div>
  );
};

export default ProgressPublish3;