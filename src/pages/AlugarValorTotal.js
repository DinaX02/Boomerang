import React from 'react';
import Header from '../components/Header/Header';
import styled from "styled-components";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PreviewValorTotal from '../components/PreviewValorTotal';
import { updateProgressRent } from "../redux/rentSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useFetchProductQuery } from '../redux/productAPI';
import { CircularProgress } from "@mui/material";

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

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
`;

const AlugarValorTotal = () => {
  const list = useSelector((state) => state.RentSecond.progressRentList);
  console.log("List", list);
  const dispatch = useDispatch();
  const { data: productsData, isLoading } = useFetchProductQuery({ id: list.article_id });
  const product = productsData && productsData.length > 0 ? productsData[0] : null;

  // Cálculo dos valores
  const daysDifference = list.daysDifference;
  const valor = product.price_day * daysDifference;
  const taxa = parseFloat(((valor * 0.05) + 2).toFixed(2));
  const extras = (list.detalhes[0] + list.detalhes[1]) === 1 ? 5 : (list.detalhes[0] + list.detalhes[1]) === 2 ? 0 : 10;
  const OpExtras = (((list.detalhes[0]) === 1) && (list.detalhes[1]) === 0) ? ["Transportadora Eco-friendly"] : (((((list.detalhes[0]) === 0) && (list.detalhes[1]) === 1)) ? ["Lavandaria Sustentável"] : (((((list.detalhes[0]) === 1) && (list.detalhes[1]) === 1)) ? [] : ["Transportadora Eco-friendly", "Lavandaria Sustentável"]))
  const total = valor + taxa + extras;

  console.log("extras", extras);

  const navigate = useNavigate();

  const handleNextStep = () => {
    // Enviar os valores atualizados ao rentSecondSlice
    dispatch(updateProgressRent({ index: 0, updatedData: { total: total, extras: extras } }));
    
    console.log("LIST", list);

    navigate("/alugar-morada");
  };

  return (
    <div>
      <Header name="Valor Total" />
      {isLoading && <Loader className={'loader'} color="success" />}

      {!isLoading && <MainContainer>
        <PreviewValorTotal id={list.article_id} days={daysDifference} taxa={taxa} valor={valor} total={total} extras={extras} OpExtras={OpExtras} />
        <ConfButton>
          <Button onClick={handleNextStep} text="Continuar" />
        </ConfButton>
      </MainContainer>}
    </div>
  );
};

export default AlugarValorTotal;
