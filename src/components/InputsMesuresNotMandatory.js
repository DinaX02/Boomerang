import React, {useState} from 'react';
import styled from "styled-components";
import InfoIconMesures from "../assets/infoIcon.svg";
import Modal from "./Modal";
import ImgMesuresModal from "../assets/overlay_dress_mesures.svg"

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para column */
  align-items: center; /* Adicionado para centralizar na coluna */
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
` 
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

  span:first-child {
    align-self: flex-start;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #2e2e2e;
  text-align: center;
  width: 50px;
  margin-right: 5px;
  outline: none;
`;

const InputMeasuresNotMandatory = (props) => {
  const btnName = props.btnName;

  const [fecharModal, setFecharModal] = useState(true);

  const handleIconClick = () => {
    // console.log("abrir modal pls");
    setFecharModal(false);
  };

  const handleInputValueMeasure = (event) => {

    const onlyNumbers = event.target.value.replace(/\D/g, '');

    event.target.value = onlyNumbers;
  };


  return (
    <Container>
              <Modal
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          message={
              <ImgModalDress src={ImgMesuresModal}/>
          }
        />
      <ButtonWrapper>
      <InfoIconContainer><InfoSvg src={InfoIconMesures} onClick={handleIconClick}/> Medidas da peça</InfoIconContainer>
      <ContainerMesures>
        <span>Busto:</span>
        <StyledInput placeholder="Ex: 84" onChange={handleInputValueMeasure}/>
        <span>cm</span>
      </ContainerMesures>

      <ContainerMesures>
        <span>Cintura:</span>
        <StyledInput placeholder="Ex: 87" onChange={handleInputValueMeasure}/>
        <span>cm</span>
      </ContainerMesures>

      <ContainerMesures>
        <span>Quadril:</span>
        <StyledInput placeholder="Ex: 90" onChange={handleInputValueMeasure}/>
        <span>cm</span>
      </ContainerMesures>

      <ContainerMesures>
        <span>Comprimento:</span>
        <StyledInput placeholder="Ex: 130" onChange={handleInputValueMeasure}/>
        <span>cm</span>
      </ContainerMesures>
      </ButtonWrapper>
    </Container>
  );
}

export default InputMeasuresNotMandatory;