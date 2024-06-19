import React, { useState } from 'react';
import styled from "styled-components";
import InfoIconMesures from "../assets/icons/infoIcon.svg";
import Modal from "./Modal";
import ImgMesuresModal from "../assets/icons/overlay_dress_mesures.svg";
import { useDispatch, useSelector } from 'react-redux';
import { updateMeasurements } from '../redux/publicarSlice';

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const InfoIconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  margin-bottom:1rem;
`;

const InfoSvg = styled.img`
width: 18px;
margin-right:8px;
`;

const ImgModalDress = styled.img`
  margin-top: 1em;
  text-align: center;

  @media (max-width: 500px) {
    width: 230px;
  }
`;

const ContainerMesures = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 20px;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  span {
    flex: 1;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px; 
    }
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #2e2e2e;
  text-align: center;
  width: 50px;
  margin-right: 3em;
  outline: none;

  @media (max-width: 400px) {
    margin-right: 1em;}

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    /* Ocultar a seta para cima em navegadores Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
`;

const Divisor = styled.div`
  height: 20px;
  width: 1px;
  background-color: #CACACA;
  margin: 0 40px;
`;

const InputMeasuresNotMandatory = (props) => {
  const dispatch = useDispatch();

  const measurements = useSelector((state) => state.Publicar1.progressPublish1.measurements);

  const [fecharModal, setFecharModal] = useState(true);

  const handleIconClick = () => {
    setFecharModal(false);
  };

  const handleInputChange = (field, value) => {
    // Atualizar o redux ao modificar qualquer valor dos inputs
    const numericValue = parseFloat(value) || 0;
    dispatch(updateMeasurements({ [field]: numericValue  }));
  };

  return (
    <Container>
      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message={
          <ImgModalDress src={ImgMesuresModal} alt='Imagem exemplo de medidas' />
        }
      />
      <ButtonWrapper>
        <InfoIconContainer><InfoSvg src={InfoIconMesures} onClick={handleIconClick} alt='icon de mais informação' /> Medidas da peça</InfoIconContainer>
        <ContainerMesures>
          <span>Busto</span>
          <Divisor />
          <div>
            <StyledInput placeholder="Ex: 84"
              type="number"
              value={measurements.Busto || ""}
              onChange={(e) => handleInputChange("Busto", e.target.value)} />
            <span>cm</span>
          </div>
        </ContainerMesures>

        <ContainerMesures>
          <span>Cintura</span>
          <Divisor />
          <div>
            <StyledInput placeholder="Ex: 87"
              type="number"
              value={measurements.Cintura || ""}
              onChange={(e) => handleInputChange("Cintura", e.target.value)} />
            <span>cm</span>
          </div>
        </ContainerMesures>

        <ContainerMesures>
          <span>Quadril</span>
          <Divisor />
          <div>
            <StyledInput placeholder="Ex: 90"
              type="number"
              value={measurements.Quadril || ""}
              onChange={(e) => handleInputChange("Quadril", e.target.value)} />
            <span>cm</span>
          </div>
        </ContainerMesures>

        <ContainerMesures>
          <span>Comprimento</span>
          <Divisor />
          <div>
            <StyledInput placeholder="Ex: 130"
              type="number"
              value={measurements.Comprimento || ""}
              onChange={(e) => handleInputChange("Comprimento", e.target.value)} />
            <span>cm</span>
          </div>
        </ContainerMesures>
      </ButtonWrapper>
    </Container>
  );
}

export default InputMeasuresNotMandatory;
