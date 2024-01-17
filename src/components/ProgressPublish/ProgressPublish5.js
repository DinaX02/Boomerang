import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import HeaderPublish from "../Header/HeaderPublicar";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import CustomizedSteppers from "../ProgressBar";

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
  const [fecharModal, setFecharModal] = useState(true); // alerta de voltar para a homepage (perder dados inseridos)
  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/"); // mudar para futuro overlay publicar concluído
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  }

  const handleChangeStepInProgressBar = (newStep) => { // passar para o proximo step 
  };

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler}/>
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