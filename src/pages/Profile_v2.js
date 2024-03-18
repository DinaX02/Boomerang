import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import mariacarmo from "../assets/perfil/user_mockup_image.jpg";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import Sobrenos from "../assets/icons/sobrenos.svg";
import Button from "../components/Button";

const Profile = () => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
  }, []);

  let bio =
    "Sou apaixonada por moda e tenho sempre em conta opções mais sustentáveis no meu dia-a-dia.";

  return (
    <div>
      <ProfileStyle>
        <div className="namediv">
          <div className="profileimg"></div>
          <div className="profiletext fontsizeadjust">
            <p className="username">mariacarmo</p>
            <p>{bio.substring(0, 22) + "..."}</p>
          </div>

          <ArrowForwardIosRoundedIcon className="setaprofile"></ArrowForwardIosRoundedIcon>
        </div>
        <p className="title">Atividade</p>

        <div className="icondiv">
          <Link to={"/convidar-amigos"}>
            <div className="iconitem">
              <PersonAddOutlinedIcon
                alt="convidar amigos"
                className="icon"
              ></PersonAddOutlinedIcon>
              <div className="profiletext">
                <p>Convidar Amigos</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
          <hr></hr>
          <div className="iconitem">
            <CheckroomOutlinedIcon
              alt="armário"
              className="icon"
            ></CheckroomOutlinedIcon>
            <div className="profiletext">
              <p>Armário</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <FavoriteBorderOutlinedIcon
              alt="favoritos"
              className="icon"
            ></FavoriteBorderOutlinedIcon>
            <div className="profiletext">
              <p>Favoritos</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <ShoppingBasketOutlinedIcon
              alt="histórico de encomendas"
              className="icon"
            ></ShoppingBasketOutlinedIcon>
            <div className="profiletext">
              <p>Histórico de encomendas</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <Link to={"/vouchers-page"}>
            <div className="iconitem">
              <LocalOfferOutlinedIcon
                alt="cupões"
                className="icon"
              ></LocalOfferOutlinedIcon>
              <div className="profiletext">
                <p>Cupões</p>
              </div>
              <ArrowForwardIosRoundedIcon
                alt="avançar"
                className="seta"
              ></ArrowForwardIosRoundedIcon>
            </div>
          </Link>
        </div>
        <p className="title">Definições</p>

        <div className="icondiv">
          <div className="iconitem">
            <SettingsOutlinedIcon
              alt="definições"
              className="icon"
            ></SettingsOutlinedIcon>
            <div className="profiletext">
              <p>Definições</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <DescriptionOutlinedIcon
              alt="termos e condições"
              className="icon"
            ></DescriptionOutlinedIcon>
            <div className="profiletext">
              <p>Termos e Condições</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <PrivacyTipOutlinedIcon
              alt="política de privacidade"
              className="icon"
            ></PrivacyTipOutlinedIcon>
            <div className="profiletext">
              <p>Política de Privacidade</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
          <hr></hr>
          <div className="iconitem">
            <img src={Sobrenos} alt="sobre nós" className="icon"></img>
            <div className="profiletext">
              <p>Sobre Nós</p>
            </div>
            <ArrowForwardIosRoundedIcon
              alt="avançar"
              className="seta"
            ></ArrowForwardIosRoundedIcon>
          </div>
        </div>
        <div className="sair" onClick={handleClickLogout}>
          <Button text="Terminar Sessão" />
        </div>
      </ProfileStyle>
      <MenuMobile></MenuMobile>
    </div>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 120px;

  a {
    color: black;
    text-decoration: none;
  }

  .setaprofile {
    width: 20px;
  }
  .fontsizeadjust {
    font-size: 14px;
  }
  .icon {
    width: 28px;
    height: 20px;
    margin-right: 30px;
    margin-left: 25px;
  }
  .seta {
    width: 18px;
    height: 15px;
  }

  .sair {
    //   background-color: #343541;
    //   color: white;
    // font-weight: bold;
    //   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    //   border-radius: 10px;
    //   font-size: 14px;
    margin: 20px 20px 0 0;
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    // height: 40px;
    // padding: 0 30px 0 30px;
  }

  // .sair:active{
  //     background-color: #00C17C;
  //   }

  .namediv {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 25px;
    height: 90px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 5px;
    align-items: center;
  }
  .profileimg {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 2px black solid;
    background-image: url(${mariacarmo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    margin-right: 18px;
    margin-left: 15px;
  }
  .profiletext {
    .username {
      font-weight: bold;
    }
    p {
      margin: 0;
    }
    text-align: left;
    width: 55%;
    margin-right: 30px;
  }

  .title {
    margin-top: 35px;
    font-weight: bold;
    padding-left: 25px;
  }

  .icondiv {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    font-size: 12px;
  }

  .iconitem {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export default Profile;
