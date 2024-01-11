import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import InputWithInfoIcon from "../InputWithInfoIcon";
import InputWithEuroIcon from "../InputwithEuroIcon";
import Header from "../Header/Header";
import { updateProgressPublish1 } from "../../redux/publicarSlice";

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

const ProgressPublish4 = () => {
  
const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    navigate("/progressPublish-5");
  };

  const handleEstimatedValue = (e) => {
    const value = e.target.value;
    console.log('Estimated Value:', value);
    dispatch(updateProgressPublish1({ estimatedValue: value }));
  };

  const handleRentaPricePerDAY = (e) => {
    const value = e.target.value;
    console.log('Rental Price Per Day:', value);
    dispatch(updateProgressPublish1({ rentalPricePerDay: value }));
  };

  const estimatedValueRedux = useSelector(
    (state) => state.Publicar1.progressPublish1.estimatedValue
  );

  const rentalPricePerDayRedux = useSelector(
    (state) => state.Publicar1.progressPublish1.rentalPricePerDay
  );

  return (
    <div>
      <Header name="Publicar / Etapa 4 de 5" />
      <SpaceTopComponent>
        <InputWithInfoIcon
          btnName="Valor estimado da peça"
          infoName="Valor estimado da peça"
          inputPlaceholder="Ex: 120"
          onChange={handleEstimatedValue}
          value={estimatedValueRedux}
        />
        <InputWithEuroIcon
          infoName="Preço do aluguer p/ dia"
          inputPlaceholderr="Ex: 10"
          onChange={handleRentaPricePerDAY}
          value={rentalPricePerDayRedux}
        />
        <ContainerDoisBtn>
          <Button text="Anterior" onClick={handleGoBackStepPublish} />
          <Button text="Próximo" onClick={handleNextStepPublish} />
        </ContainerDoisBtn>
      </SpaceTopComponent>
    </div>
  );
};

export default ProgressPublish4;
