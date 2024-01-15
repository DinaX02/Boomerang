import React, { useState } from "react";
import PreviewCard from "../components/PreviewCard";
import Header from "../components/Header/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "../components/Button";
import styled from "styled-components";

const RentDate = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]); // Initial date range

  const handleDateChange = (value) => {
    setDateRange(value);
    console.log(dateRange);
  };

  return (
    <div>
      <Header name="Período de Aluguer" />
      <RentDateDiv>
        <PreviewCard />
        <Calendar
          onChange={handleDateChange}
          value={dateRange}
          selectRange={true}
        />
        <Button text="Continuar"></Button>
      </RentDateDiv>
    </div>
  );
};

const RentDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default RentDate;
