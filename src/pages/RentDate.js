import React, { useState } from "react";
import PreviewCard from "../components/PreviewCard";
import Header from "../components/Header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import styled from "styled-components";

const RentDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]); 
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleDateChange = (value) => {
    setDateRange(value);
    let formattedDates = value.map(date => date.toLocaleDateString('pt-PT'));
    setButtonDisable(true);
  };



  return (
    <RentDateDiv>
      <Header name="Período de Aluguer" />
      <div className="content">
        <PreviewCard />
        <p className="info">Seleciona o primeiro e o último dia de aluguer</p>
        <Calendar
          onChange={handleDateChange}
          value={dateRange}
          selectRange={true}
          />
        <Button text="Continuar" disable={!buttonDisable}></Button>
      </div>
    </RentDateDiv>
  );
};

const RentDateDiv = styled.div`

.content{
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  
  .info{
    margin-bottom: -18px;
    margin-top: 10px;
  }
`;

export default RentDate;
