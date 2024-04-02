import React from "react";
import arrowBack from "../../assets/icons/back_arrow.svg";
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
        alt="seta para voltar à página anterior"
      />
      <h1 style={{fontSize: "16px", marginBottom: "0"}}>{name}</h1>
    </header>
  );
};

export default HeaderPublish;
