import React from 'react';
import styled from 'styled-components';
import handWithPhone from '../../assets/homepageweb/downloadapp.svg';

const AppHeader = styled.div`
  width: 100%;
  padding: 1vw;
  background-color: #f8f8f8;
  text-align: center;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    margin-top: 4vw;
  }
`;

const AppTitle = styled.h1`
  font-size: 5vw;
  color: #343541;
  font-weight: bold;
  padding: 1vw 0;

  @media (max-width: 1024px) {
    font-size: 8vw;
  }
`;

const DownloadAppContainer = styled.div`
  height: 100vh; 
  width: 100%;
  background-image: url(${handWithPhone}); 
  background-size: cover; 
  background-position: center; 
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1024px) {
    height: 64vh; 
    justify-content: space-between;
    background-position: right 28% center;
    padding: 4vw 2vw;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 4vw; 
  margin-bottom: 2vw;
  color: #f8f8f8;
  max-width: 60%;
  padding: 100px;

  @media (max-width: 1024px) {
    font-size: 8vw;
    padding: 6vw;
  }
`;

const DownloadButton = styled.button`
  padding: 0.5vw; 
  width: 200px; 
  min-width: 150px; 
  font-size: calc(1vw + 10px); 
  font-weight: bold;
  color: #343541;
  background-color: #F8F8F8;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  z-index: 20;
  margin-top: 2vw; 
  margin-left: 7vw;

  @media (max-width: 1024px) {
    font-size: calc(1.8vw + 10px); 
    padding: 1vw; 
  }

  @media (max-width: 768px) {
    font-size: calc(3vw + 10px); 
    padding: 4vw; 
    margin-top: 6vw; 
    margin-left: 10vw; 
    min-width: 120px; 
  }
`;

const DownloadApp = () => {
  return (
    <>
      <AppHeader>
        <AppTitle>Faz download da app</AppTitle>
      </AppHeader>
      <DownloadAppContainer>
        <Title>Explora e ganha com a Boomerang!</Title>
        <DownloadButton>Download</DownloadButton>
      </DownloadAppContainer>
    </>
  );
};

export default DownloadApp;
