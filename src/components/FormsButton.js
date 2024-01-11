import React, { useState } from "react";
import selected from "../assets/selected.svg";
import styled from "styled-components";

const FormsButton = (props) => {
  const [ticked, setTicked] = useState(false);

  let valueFinal = "";

  if (props.value){
    valueFinal = ` | ${props.value} €`
  }

  const FormsButton = styled.button`
  margin: auto;
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background: ${ticked ? 'var(--notch, #343541)' : '#FFF'};
  font-weight: 500;
  font-size: 94%;
  outline: 0;
  border: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
  p{
    margin: 0;
  }
  span{
    width: 20px;
  }
  @media only screen and (min-width: 600px) {
    width: 380px !important;
  }
  @media only screen and (max-width: 375px) {
  padding-left: 15px !important;
  }

    padding-left: ${ticked ? '15px' : ''};
    color: ${ticked ? 'white' : ''};
  
    img {
      margin-right: ${ticked ? '-15px' : ''};
      width: ${ticked ? '15px' : ''};
    }
  }
`

  const FormsButtonOrg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  padding-left: 35px;
  `



  return (
      <FormsButton className={ticked ? "FormsButtonAdd" : ""}
        onClick={() => setTicked(!ticked)}
      >
        <img
          src={selected}
          alt="selected"
          style={ticked ? { display: "block" } : { display: "none" }}
        />
        <FormsButtonOrg>
          <p>{props.name}</p> <p>{valueFinal}</p>
        </FormsButtonOrg>
      </FormsButton>
  );
};

export default FormsButton;
