import React from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PreviewValorTotal from '../components/PreviewValorTotal';
import { updateProgressRent } from "../redux/rentSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useCreateTransactionMutation } from '../redux/transactionAPI';

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  padding: 25px;
`;

const ConfButton = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const AlugarValorTotal = () => {
  const list = useSelector((state) => state.Rent.progressRentList);
  const dispatch = useDispatch();
  const [createTransaction] = useCreateTransactionMutation();

  const date1 = new Date(list.date[0].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
  const date2 = new Date(list.date[1].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));

  const difference = Math.abs(date2 - date1);
  const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const valor = list.total;
  const taxa = parseFloat(((valor * 0.05) + 2).toFixed(2));
  const total = valor + taxa;

  const navigate = useNavigate();

  const handleNextStep = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Formato ano-mes-dia
    dispatch(updateProgressRent({ index: 0, updatedData: { total: total } }));
    createTransaction({ 
      date_start: list.date[0], 
      date_end: list.date[1], 
      date: currentDate, 
      productId: list.article_id 
    });
    navigate("/wait-accept-rent");
  };

  return (
    <div>
      <Header name="Valor Total" />
      <MainContainer>
        <PreviewValorTotal id={list.article_id} days={daysDifference} taxa={taxa} valor={valor} total={total} />
        <ConfButton>
          <Button onClick={handleNextStep} text="Confirmar" />
        </ConfButton>
      </MainContainer>
    </div>
  );
};

export default AlugarValorTotal;
