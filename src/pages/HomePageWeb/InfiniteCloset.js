import React from 'react';
import styled from 'styled-components';
import closetImage from '../../assets/homepageweb/naturedress.jpg';

const ClosetContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  width: 100%;
  color: black;
  padding: 0 300px;
`;

const ClosetTitle = styled.h2`
  text-align: center;
  margin-bottom: 50px; 
  font-size: 48px;
  font-weight: bold;
  margin-top: 8rem;
  max-width: 90%;

  @media (max-width: 1024px) {
    margin-top: 4rem; 
    font-size: calc(1.75rem + 3vw);
    max-width: 100%;
    padding: 1rem;
  }
`;

const Highlight = styled.span`
  color: #00C17C; 
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
  /* padding: 0 100px; */
  padding-right: 80px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: black; 
  line-height: 1.3; 

  @media (max-width: 1024px) {
    padding: 10px;
    font-size: calc(0.625rem + 2vw);
  }
`;

const Bolder = styled.span`
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  /* flex: 1; */
  text-align: right;

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

const ClosetImage = styled.img`
  width: auto; 
  height: 45vh; 
`;

const InfiniteCloset = () => {
  return (
    <ClosetContainer>
      <ClosetTitle>
        Ter um armário infinito de forma sustentável? <Highlight>É possível!</Highlight>
      </ClosetTitle>
      <ContentContainer>
        <TextContent>
          <p>
            Ao escolher a <Bolder>Boomerang</Bolder>, estás a contribuir para um movimento que valoriza a moda de forma responsável. Cada peça conta a sua própria história, de um compromisso com um futuro mais sustentável.
          </p>
          <p>
            Tens uma peça de roupa parada no teu armário? Imagina agora poderes-lhe dar uma nova vida e rentabilizares o teu armário dessa forma. <br></br><Bolder>Gostas da ideia?</Bolder>
          </p>
        </TextContent>
        <ImageWrapper>
          <ClosetImage src={closetImage} alt="Sustentabilidade na moda" />
        </ImageWrapper>
      </ContentContainer>
    </ClosetContainer>
  );
};

export default InfiniteCloset;
