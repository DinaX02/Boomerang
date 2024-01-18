import React, { useState } from "react";
import PreviewCard from "../components/PreviewCard";
import Header from "../components/Header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProgressRent } from "../redux/RentSlice";
import { useNavigate } from "react-router-dom";

const RentDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]); 
  const [buttonDisable, setButtonDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDateChange = (value) => {
    setDateRange(value);
    setButtonDisable(true);
  };

  const sendDates = () => {
    const formattedDates = dateRange.map(date => date.toLocaleDateString('pt-PT'));
    const rentData = { date: formattedDates };
    dispatch(addProgressRent(rentData));
    navigate("/alugar-detalhes");
  };

  return (
    <RentDateDiv>
      <Header name="Período de Aluguer"/>
      <div className="content">
        <PreviewCard />
        <p className="info">Seleciona o primeiro e o último dia de aluguer</p>
        <Calendar
          onChange={handleDateChange}
          value={dateRange}
          selectRange={true}
        />
        <Button text="Continuar" disable={!buttonDisable} onClick={sendDates}></Button>
      </div>
    </RentDateDiv>
  );
};

const RentDateDiv = styled.div`
  .content {
    margin-top: -15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .info {
    margin-bottom: -18px;
    margin-top: 10px;
  }
`;

export default RentDate;
