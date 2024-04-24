import React from 'react';
import styled from 'styled-components';
import friendsImage from '../../assets/homepageweb/amy-kate-Xsppd5V1yKE-unsplash.jpg'

const KnowMoreContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  width: 100%;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: unset;
  }

`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 50%;
  img {
    width: 100%; 
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 45%;
  font-size: 20px;
  font-weight: 500;
  color: #343541;
  line-height: 1.3;
  padding-left: 4vw;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 1rem;
    font-size: calc(0.625rem + 2vw);
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const KnowMoreHere = () => {
  return (
    <KnowMoreContainer>
      <ImageWrapper>
        <img src={friendsImage} alt="Felizes com a sustentabilidade de roupas alugadas" />
      </ImageWrapper>
      <TextContent>
        <p>Agora imagina ao invés de comprares uma peça de roupa nova, gastares esse dinheiro para usares, à priori, apenas num evento específico, alugares uma peça que está sem uso, poderes desta forma ir a esse evento com charme e dando uma nova vida a essa peça de roupa?! Esta opção também te encanta?</p>
        <p><Bold>Descobre mais como o podes fazer acedendo à nossa página num formato mobile ou instalando a nossa app.</Bold></p>
      </TextContent>
    </KnowMoreContainer>
  );
};

export default KnowMoreHere;
