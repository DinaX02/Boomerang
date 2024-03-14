import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import ExitPage from "../assets/icons/eliminar.svg"
import GreenStar from "../assets/icons/green_star.svg"

const ContainerConvidarAmigos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`
const ContainerGeral = styled.div`
  padding: 0 24px;
`

const FecharPaginaIcon = styled.img`
  width: 20px;
  height: 20px;
`
const ButtonRecompensas = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 0.6em;
  padding-right: 0.6em;
  background-color: #C6F6E5;
  border: none;
`
const GreenStarIcon = styled.img`
  margin-left: 0.3em;
  margin-right: 0.6em;
  width: 20px;
  height: 20px;
`
const TituloPagina = styled.p`
  margin-top: 3em;
  font-size: 20px;
  font-weight: 800;
`

const ConvidarAmigos = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/profile-page");
  };


  return (
    <ContainerGeral>
    <ContainerConvidarAmigos>
      <FecharPaginaIcon src={ExitPage} alt='fechar pagina' onClick={handleGoBack}/>
      <ButtonRecompensas>
        <GreenStarIcon src={GreenStar} alt='icon de recompensa'/>
        Recompensas
      </ButtonRecompensas>

      
    </ContainerConvidarAmigos>
    <TituloPagina>Ganhe Recompensas</TituloPagina>
    </ContainerGeral>
  )
}

export default ConvidarAmigos