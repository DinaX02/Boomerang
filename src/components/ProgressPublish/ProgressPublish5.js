import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import InputWithInfoIcon from "../InputWithInfoIcon";
import InputWithEuroIcon from "../InputwithEuroIcon";
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
  margin-top: 20.9em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ParagraphIntroAdress = styled.p`
color: #9F9F9F;

@media (max-width: 500px) {
  font-size: 14px;}

`

const ProgressPublish5 = () => {
  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/"); // mudar para futuro overlay publicar concluído
  };

  return (
    <div>
      <Header name="Publicar / Etapa 5 de 5" />
      <SpaceTopComponent>
<Container>
  <ParagraphIntroAdress>Escolhe a Morada de Retorno para garantir uma recuperação simples e eficiente da tua peça após o período de aluguer.</ParagraphIntroAdress>
</Container>
      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button text="Próximo" onClick={handleNextStepPublish} />
      </ContainerDoisBtn>
      </SpaceTopComponent>
  </div>
  );
};

export default ProgressPublish5;