import React from 'react';
import styled from 'styled-components';
import sustainabilityImage from '../../assets/homepageweb/planetcare-23coWmkTNSg-unsplash.jpg';

const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #343541;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    margin-top: unset;
  }
`;

const ServicesTitle = styled.h2`
  text-align: center;
  padding: 50px 100px; 
  font-size: 50px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 36px;
    padding: 25px 16px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
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

const BoldText = styled.span`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding-right: 0;
`;

const ServicesImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SustainabilityServices = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Serviços de sustentabilidade</ServicesTitle>
      <ContentContainer>
        <TextContent>
          <p>
            A nossa plataforma oferece uma opção de <BoldText>lavandaria sustentável</BoldText>. Esta opção contribui para um ambiente mais sustentável, pois oferecemos um serviço útil, a baixo custo e com poupança de água e detergentes bio e próprios a cada tipo de roupa, até mesmo o serviço de secagem próprio e ecológico.
          </p>
        </TextContent>
        <ImageContainer>
          <ServicesImage src={sustainabilityImage} alt="Lavandaria sustentável" />
        </ImageContainer>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default SustainabilityServices;
