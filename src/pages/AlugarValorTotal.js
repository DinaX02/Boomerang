import React from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PreviewValorTotal from '../components/PreviewValorTotal';
import { useSelector } from 'react-redux';

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 55px 20px;
`;


const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const AlugarValorTotal = () => {
  const list = useSelector((state) => state.Rent.progressRentList);


  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate("/alugar-morada");
  };

    return (
        <div>
            <Header name="Valor Total" />
            <MainContainer>
                <PreviewValorTotal id={list[0].article_id}/>

                    <ConfButton>
               <Button onClick={handleNextStep} text="Continuar"/>
                    </ConfButton>


                
            </MainContainer>
        </div>
    );
};

export default AlugarValorTotal;