import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import ButtonForOpenBottomSheet from "../ButtonForOpenBottomSheet";
import ButtonWithMandatoryField from "../ButtonWithMandatoryField";
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
  margin-top: 17.4em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ProgressPublish2 = () => {
  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-3");
  };

  return (
    <div>
      <Header name="Publicar / Etapa 2 de 5" />
      <SpaceTopComponent>
        <ButtonForOpenBottomSheet btnName="Tamanho" />
        <ButtonForOpenBottomSheet btnName="Cor" />
        <ButtonForOpenBottomSheet btnName="Categorias " />
        <ButtonWithMandatoryField btnName="Marca" />
      </SpaceTopComponent>

      <ContainerDoisBtn>
        <Button text="Anterior" onClick={handleGoBackStepPublish} />
        <Button text="Próximo" onClick={handleNextStepPublish} /> {/* falta aplicar a lógica de só ficar ativo se os botoes tiverem value atribuido */}
      </ContainerDoisBtn>
  </div>
  );
};

export default ProgressPublish2;