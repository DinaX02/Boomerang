import React from 'react';
import styled from 'styled-components';
import ecofriendlyImage from '../../assets/homepageweb/chuttersnap-xJLsHl0hIik-unsplash.jpg';

const EcoFriendlyContainer = styled.div`
  display: flex; 
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: #343541;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    height: unset; 
    margin-top: unset;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 0 50px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #343541; 
  max-width: 700px; 
  line-height: 1.3; 
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 1rem;
    max-width: 100%; 
    font-size: calc(0.625rem + 2vw);
  }
`;

const BolderItalicText = styled.span`
  font-weight: bold;
  font-style: italic;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const EcoImage = styled.img`
  max-width: 100%; 
  height: auto;
`;

const EcoFriendly = () => {
  return (
    <EcoFriendlyContainer>
      <ContentContainer>
        <TextContent>
          <p>Transporte <BolderItalicText>eco-friendly</BolderItalicText>? Também temos! Com este serviço, tens a peça desejada mais perto de ti e sabes que estás a contribuir também para o não aumento das emissões de carbono com um transporte 100% elétrico.</p>
        </TextContent>
        <ImageWrapper>
          <EcoImage src={ecofriendlyImage} alt="Transporte Sustentável" />
        </ImageWrapper>
      </ContentContainer>
    </EcoFriendlyContainer>
  );
};

export default EcoFriendly;
