import React from "react";
import arrowBack from "../../assets/back_arrow.svg";
import "./../components.css";
import { useNavigate } from "react-router-dom";

const HeaderPublish = (props) => {
  const navigate = useNavigate();
  let name = props.name;

  if (!props.name) {
    name = "Página desconhecida";
  }

  const handleGoBack = () => {
    props.alertHandler ? props.alertHandler() : navigate("/"); // voltar para hompepage
  };

  return (
    <header className="headerBoomerang">
      <img
        data-testid="svg-icon"
        src={arrowBack}
        onClick={handleGoBack}
        style={{ cursor: "pointer" }}
        alt="arrow go back"
      />
      <h3>{name}</h3>
    </header>
  );
};

export default HeaderPublish;
