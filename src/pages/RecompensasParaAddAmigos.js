import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import ExitPage from "../assets/icons/eliminar.svg"
import GreenStar from "../assets/icons/green_star.svg"
import AddFriendsIcon from "../assets/icons/Add_friends_icon.svg"
import IconCampanhasTemporarias from "../assets/icons/icon_campanhas_temporarias.svg"

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


const ConvidarBtnEIconAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerCampanhasTemporarias = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:#FFF;
  border-radius:8px;
  padding: 1em;
  margin-top: 3.4em;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

  .btnIrCampanhas{
    background-color:#C6F6E5;;
    border: none;
    border-radius: 4px;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  .btnIrCampanhas:active {
    background-color: #A4E9D8;
  }

  .tituloWhiteContainer{
    font-size: 15px;
    font-weight: bold;
    margin-bottom:0;
  }

  img{
    height: 40px;
  }
`

const ContainerAddAmigos = styled.div`
  background-color:#00C17C;
  border-radius:8px;
  padding: 1em;
  margin-top: 3.4em;
  color: white;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

  .btnAddFriend{
    background-color:#F8F8F8;
    border: none;
    border-radius: 4px;
    padding: 0.8em;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  .btnAddFriend:active {
    background-color: #DADADA;
  }

  .tituloGreenContainer{
    font-size: 15px;
    color: white;
    font-weight: bold;
    margin-bottom: 0.3em;
  }
.paraghContainerGreen{
  font-size: 14px;
}
`
const FecharPaginaIcon = styled.img`
  width: 20px;
  height: 20px;
`
const ButtonRecompensas = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 0.6em;
  padding-right: 0.6em;
  background-color: #C6F6E5;
  border: none;

  &:active {
    background-color: #A4E9D8; }
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

const RecompensasParaAddAmigos = () => {
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
    <p style={{fontSize: "13px"}}>Partilha com os teus amigos e começa a ganhar !</p>

    <ContainerAddAmigos>
<p className='tituloGreenContainer'>Convida amigos</p>
<p className='paraghContainerGreen'>Traz os teus amigos para a Boomerang!</p>
<ConvidarBtnEIconAdd>
<button className='btnAddFriend'>Convidar Amigos</button>
<img src={AddFriendsIcon} alt='icone adicionar amigos'/></ConvidarBtnEIconAdd>
    </ContainerAddAmigos>

    <ContainerCampanhasTemporarias>
  <img src={IconCampanhasTemporarias} alt='icone campanhas temporarias' />
<p className='tituloWhiteContainer'>Campanhas Temporárias</p>
<button className='btnIrCampanhas'>Ir</button>
    </ContainerCampanhasTemporarias>

    </ContainerGeral>
  )
}

export default RecompensasParaAddAmigos