import React from 'react';
import styled from 'styled-components';
import sustainabilityImage from '../../assets/homepageweb/planetcare-23coWmkTNSg-unsplash.jpg';

const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  margin-top: 8rem;
  padding: 0 300px;

  @media (max-width: 1024px) {
    margin-top: unset;
  }
`;

const ServicesTitle = styled.h2`
  text-align: center;
  padding: 50px 100px 0 100px; 
  font-size: 48px;
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
  /* align-items: center; */
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 80px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black;
  max-width: 700px;
  line-height: 1.3;
  z-index: 1;

  h3{
    margin-bottom: 80px;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    max-width: 100%; 
    font-size: calc(0.625rem + 2vw);
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  /* flex: 1;
  padding-right: 0; */
`;

const ServicesImage = styled.img`
  max-width: 100%;
  height: 45vh;
`;

const DownloadButton = styled.button`
  padding: 0.5vw 1vw; 
  /* width: 200px;  */
  min-width: 150px; 
  font-size: 16px; 
  font-weight: bold;
  color: #FFFFFF;
  background-color: #00C17C;
  border: none;
  cursor: pointer;
  border-radius: 100px;
  z-index: 20;
  /* margin-top: 2vw;  */
  /* margin-left: 100px; */
  margin: 0 25px;

  @media (max-width: 1024px) {
    font-size: calc(1.8vw + 10px); 
    padding: 1vw; 
  }

  @media (max-width: 768px) {
    font-size: calc(3vw + 10px); 
    padding: 4vw; 
    margin-top: 6vw; 
    /* margin-left: 10vw;  */
    min-width: 120px; 
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 100px;
  margin-top: 15px;
`;

const SustainabilityServices = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Serviços de sustentabilidade</ServicesTitle>
      <ButtonContainer>
        <DownloadButton>Lavandaria sustentável</DownloadButton>
        <DownloadButton>Transportadora <i>Eco-friendly</i></DownloadButton>
      </ButtonContainer>
      <ContentContainer>
        <ImageContainer>
          <ServicesImage src={sustainabilityImage} alt="Lavandaria sustentável" />
        </ImageContainer>
        <TextContent>
          <h3>Lavandaria Sustentável</h3>
          <p>
            A nossa plataforma oferece uma opção de <BoldText>lavandaria sustentável</BoldText>. Esta opção contribui para um ambiente mais sustentável, pois oferecemos um serviço útil, a baixo custo e com poupança de água e detergentes bio e próprios a cada tipo de roupa, até mesmo o serviço de secagem próprio e ecológico.
          </p>
        </TextContent>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default SustainabilityServices;
