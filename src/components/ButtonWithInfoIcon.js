import React, { useState } from "react";
import styled from "styled-components";
import InfoIconMesures from "../assets/infoIcon.svg";
import DropdownIcon from "../assets/dropdownicon.svg";
import Modal from "./Modal";

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

const StyledButton = styled.button`
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
`;

const Asterisk = styled.span`
  color: #00c17c;
  margin-left: 5px;
  margin-right: 5px;
`;

const InfoIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
  margin-bottom: 1rem;
`;

const InfoSvg = styled.img`
  width: 18px;
  margin-right: 8px;
`;

const StyledDropdownIcon = styled.img`
  width: 16px;
  height: auto;
`;

const ParagraphMessageModal1p = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;
  justify-content: flex-start;
  flex-direction: column;
`;

const MandatoryField = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  font-size: 14px;
  align-self: flex-start;
`;

const ButtonWithInfoIcon = (props) => {
  const btnName = props.btnName;
  const infoName = props.infoName;

  const [fecharModal, setFecharModal] = useState(true);

  const handleIconClick = () => {
    // console.log("abrir modal pls");
    setFecharModal(false);
  };

  return (
    <Container>
      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message={
          <ParagraphMessageModal1p>
            <strong>Muito Bom</strong>Uma peça pouco usada que pode ter ligeiras
            imperfeições, mas que está em bom estado. Inclui fotografias e
            descrições de quaisquer defeitos no teu anúncio.
            <br></br>
            <br></br>
            <strong>Bom</strong>Uma peça usada que pode apresentar imperfeições
            e sinais de desgaste. Inclui fotografias e descrições de quaisquer
            defeitos no teu anúncio.
            <br></br>
            <br></br>
            <strong>Satisfatório</strong>Uma peça usada com frequência, com
            imperfeições e sinais de desgaste. Inclui fotografias e descrições
            de quaisquer defeitos no teu anúncio.
          </ParagraphMessageModal1p>
        }
      />
      <ButtonWrapper>
        <InfoIconContainer>
          <InfoSvg src={InfoIconMesures} onClick={handleIconClick} />
          {infoName}
        </InfoIconContainer>
        <StyledButton>
          <span>
            {btnName} <Asterisk>*</Asterisk>
          </span>
          <StyledDropdownIcon src={DropdownIcon} alt="Dropdown Icon" />
        </StyledButton>
        <MandatoryField>
          <Asterisk>*</Asterisk> Campo Obrigatório
        </MandatoryField>
      </ButtonWrapper>
    </Container>
  );
};

export default ButtonWithInfoIcon;
