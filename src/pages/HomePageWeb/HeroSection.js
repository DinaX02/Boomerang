import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../assets/homepageweb/christina-victoria-craft-w1H-gKfwKvU-unsplash.jpg';

const HeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: #F8F8F8;
  padding: 5vw;

  @media (max-width: 768px) {
    padding: 5vw;
  }
`;

const HeroOverlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: calc(2.5rem + 1.5vw);
  font-weight: bold;
  margin-bottom: 1rem;
  color: #F8F8F8;
  line-height: 1.2;
  z-index: 2;
  max-width: 55%;

  @media (max-width: 1024px) {
    max-width: 65%;
  }

  @media (max-width: 768px) {
    max-width: 75%; 
  }

  @media (max-width: 480px) {
    max-width: 85%;
  }
`;

const HeroText = styled.p`
  font-size: calc(0.625rem + 1vw);
  margin-bottom: 1rem;
  font-weight: 500;
  color: #F8F8F8;
  line-height: 1.3;
  z-index: 2;
  max-width: 50%;

  @media (max-width: 1024px) {
    max-width: 70%;
  }

  @media (max-width: 768px) {
    max-width: 80%; 
  }

  @media (max-width: 480px) {
    max-width: 90%;
    font-size: calc(2vw + 10px);
  }
`;

const DownloadButton = styled.a`
  padding: 0.625rem 1.25rem;
  font-size: calc(0.625rem + 0.5vw);
  font-weight: bold;
  color: #343541;
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: calc(0.625rem + 1vw);
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroOverlay />
      <HeroTitle>O teu guarda-roupa ilimitado começa aqui!</HeroTitle>
      <HeroText>A Boomerang abraça uma abordagem única pela moda. Não se trata apenas de um aluguer de roupa, mas sim de uma comunidade unida que desafia o convencional.
      O objetivo é simples: mudar a forma como encaras a moda e reduzir o desperdício têxtil.</HeroText>
      <DownloadButton 
        href="https://boomerang.tdw-mctw.dev/" //isto não está a reencaminhar o botão para o link
        target="_blank"
        rel="noopener noreferrer"
      >
        Download da app
      </DownloadButton>
    </HeroWrapper>
  );
};

export default HeroSection;
