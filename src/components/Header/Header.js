import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pageNames from "../Header/headernames.json";
import "./../components.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.replace("/", "");

  // Verificação se a página existe no JSON
  const currentPageName = pageNames[currentPath] || "Página Desconhecida";

  const handleGoBack = () => {
    navigate(-1); // voltar para trás
  };

  return (
    <header className="header">
      <svg
        data-testid="svg-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        onClick={handleGoBack}
        style={{ cursor: "pointer" }}
      >
        <path
          d="M6.53033 0.21967C6.23744 -0.0732233 5.76256 -0.0732233 5.46967 0.21967L0.21967 5.46967C-0.0732231 5.76256 -0.0732231 6.23744 0.21967 6.53033L5.46967 11.7803C5.76256 12.0732 6.23744 12.0732 6.53033 11.7803C6.82322 11.4874 6.82322 11.0126 6.53033 10.7197L1.81066 6L6.53033 1.28033C6.82322 0.987437 6.82322 0.512563 6.53033 0.21967Z"
          fill="white"
        />
      </svg>
      <h3>{currentPageName}</h3>
    </header>
  );
};

export default Header;