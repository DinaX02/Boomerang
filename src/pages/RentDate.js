import React, { useState, useEffect } from "react";
import PreviewCard from "../components/PreviewCard";
import Header from "../components/Header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProgressRent } from "../redux/rentSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchProductQuery } from '../redux/productAPI';
import { CircularProgress } from "@mui/material";

const RentDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const progressRentList = useSelector((state) => state.Rent.progressRentList);
  const { data: productsData, isLoading } = useFetchProductQuery({ id: id });
  const product = productsData && productsData.length > 0 ? productsData[0] : null;

  useEffect(() => {
    const date1 = dateRange[0];
    const date2 = dateRange[1];
    const difference = Math.abs(date2 - date1);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    const dailyRentalPrice = product?.price_day;
    const valor = dailyRentalPrice * daysDifference;
    const taxa = 0;
    const newTotal = valor + taxa;
    setTotal(newTotal);
  }, [dateRange, progressRentList, id, product]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    return date.toISOString().split('T')[0]; // Formato ano-mes-dia
  }

  const handleDateChange = (value) => {
    setDateRange(value);
    setButtonDisable(true);
  };

  const sendDates = () => {
    const formattedDates = dateRange.map(date => formatDate(date));
    // console.log(formattedDates);
    const rentData = { article_id: id, date: formattedDates, total };
    dispatch(addProgressRent(rentData));
    navigate("/valor-total-before-accept");
  };

  return (
    <RentDateDiv>
      <Header name="Período de Aluguer" />
      {isLoading && <Loader className={'loader'} color="success" />}

      {!isLoading && <div className="content">
        <PreviewCard id={id} valor={total} />
        <p className="info">Seleciona o primeiro e o último dia de aluguer</p>
        <Calendar
          onChange={handleDateChange}
          value={dateRange}
          selectRange={true}
          minDate={new Date()}
        />
        <Button text="Continuar" disable={!buttonDisable} onClick={sendDates}></Button>
      </div>}
    </RentDateDiv>
  );
};

const RentDateDiv = styled.div`
  .content {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    font-size: 13px;
    margin-bottom: -18px;
    margin-top: 50px;

    @media only screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
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

export default RentDate;
