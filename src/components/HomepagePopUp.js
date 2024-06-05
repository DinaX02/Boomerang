import React from 'react';
import styled from 'styled-components';

const PopupHomepage = ({ message, onClose }) => {
    return (
        <PopupOverlay>
        <PopupContainer>
          <PopupMessage>{message}</PopupMessage>
          <CloseButton onClick={onClose}>Fechar</CloseButton>
        </PopupContainer>
      </PopupOverlay>
    );
};

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

const PopupMessage = styled.p`
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #0056b3;
  }
`;

export default PopupHomepage;