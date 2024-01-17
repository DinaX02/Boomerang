import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import HeaderPublish from "../Header/HeaderPublicar";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import CustomizedSteppers from "../ProgressBar";
import ChooseAdressComponent from "../ChooseAdressComponent"

const ContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5em;
`;

const SpaceTopComponent = styled.div`
  display: flex;
  flex-direction: column;
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

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ParagraphIntroAdress = styled.p`
  color: #9f9f9f;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const ProgressPublish5 = () => {
  const [fecharModal, setFecharModal] = useState(true);
  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate("/progressPublish-4");
  };

  const handleNextStepPublish = () => {
    navigate("/"); 
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  };

  const handleChangeStepInProgressBar = (newStep) => {};

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler} />
      <CustomizedSteppers
        activeStep={4}
        onStepChange={handleChangeStepInProgressBar}
        onNext={handleNextStepPublish}
        onBack={handleGoBackStepPublish}
      />
      <ModalAlertaForPublish
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        alert={alert}
        message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
      />
      <ContainerCentered>
        <SpaceTopComponent>
          <Container>
            <ParagraphIntroAdress>
              Escolhe a Morada de Retorno para garantir uma recuperação simples
              e eficiente da tua peça após o período de aluguer.
            </ParagraphIntroAdress>
          </Container>
          <ChooseAdressComponent />
          <ContainerDoisBtn>
            <Button text="Anterior" onClick={handleGoBackStepPublish} />
            <Button text="Publicar" onClick={handleNextStepPublish} />
          </ContainerDoisBtn>
        </SpaceTopComponent>
      </ContainerCentered>
    </div>
  );
};

export default ProgressPublish5;