import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import mariacarmo from "../assets/icons/user_unknown.svg";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PersonAddOutlinedIcon from '../assets/icons/profile/invite.svg';
import CheckroomOutlinedIcon from '../assets/icons/profile/closet.svg';
import FavoriteBorderOutlinedIcon from '../assets/icons/profile/favorite.svg';
import ShoppingBasketOutlinedIcon from '../assets/icons/profile/encomendas.svg';
import LocalOfferOutlinedIcon from '../assets/icons/profile/cupoes.svg';
import SettingsOutlinedIcon from '../assets/icons/profile/settings.svg';
import DescriptionOutlinedIcon from '../assets/icons/profile/termos.svg';
import PrivacyTipOutlinedIcon from '../assets/icons/profile/privacidade.svg';
import CardGiftcardIcon from '../assets/icons/profile/gift.svg';
import CookiesIcon from '../assets/icons/cookies_icon.svg';
import Sobrenos from '../assets/icons/sobrenos.svg';
import Logout from '../assets/icons/logout.svg';
import { useLogoutUserMutation } from "../redux/usersAPI";
import { useSeeUserQuery } from "../redux/usersAPI";
import { CircularProgress } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();
  const { data: userData, refetch, isLoading } = useSeeUserQuery();

  const handleClickLogout = async () => {
    try {
      await logoutUser().unwrap();
      localStorage.removeItem("login");
      document.cookie = "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // window.location.reload();
    } catch (error) {
      console.error('Falha no logout:', error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [refetch]);

  useEffect(() => {
    // console.log('Verificando  a userData...');
    // console.log('userData:', userData);
    // console.log('isLoading:', isLoading);

    if (!isLoading && (!userData || !userData.id)) {
      console.log('Utilizador foi realizou login não --> Redirecionado para a homepage...');
      localStorage.removeItem("login");
      navigate("/", { state: { showLoginRegister: true } });
    }
  }, [userData, isLoading, navigate]);

  if (isLoading) return <Loader><CircularProgress className={'loader'} color="success" /></Loader>


  return (
    <div>
      <ProfileStyle>
        <Link className="namediv" to={"/edit-profile-page"}>
          <div className="profileimg"></div>
          <div className="profiletext fontsizeadjust">
            <h1 className="username">{userData?.username || 'Utilizador da Boomerang'}</h1>
            <p>{userData?.bio || "-".substring(0, 22) + "..."}</p>
          </div>
          <ArrowForwardIosRoundedIcon className="setaprofile" />
        </Link>
        <p className="title">Atividade</p>

        <div className="icondiv">
          <Link to={"/convidar-amigos"}>
            <div className="iconitem">
              <img src={PersonAddOutlinedIcon} alt="convidar amigos" className="icon" />
              <div className="profiletext">
                <p>Convidar Amigos</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
          <hr />
          <div className="iconitem">
            <img src={CheckroomOutlinedIcon} alt="armário" className="icon" />
            <div className="profiletext">
              <p>Armário</p>
            </div>
            <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
          </div>
          <hr />
          <Link to={"/favorites-page"}>
            <div className="iconitem">
              <img src={FavoriteBorderOutlinedIcon} alt="favoritos" className="icon" />
              <div className="profiletext">
                <p>Favoritos</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
          <hr />
          <div className="iconitem">
            <img src={ShoppingBasketOutlinedIcon} alt="histórico de encomendas" className="icon" />
            <div className="profiletext">
              <p>Histórico de encomendas</p>
            </div>
            <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
          </div>
          <hr />
          <Link to={"/vouchers-page"}>
            <div className="iconitem">
              <img src={LocalOfferOutlinedIcon} alt="cupões" className="icon" />
              <div className="profiletext">
                <p>Cupões</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
          <hr />
          <Link to={"/recompensas"}>
            <div className="iconitem">
              <img src={CardGiftcardIcon} alt="recompensas" className="icon" />
              <div className="profiletext">
                <p>Recompensas</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
        </div>
        <p className="title">Definições</p>

        <div className="icondiv">
          <Link to={"/settings-page"}>
            <div className="iconitem">
              <img src={SettingsOutlinedIcon} alt="definições" className="icon" />
              <div className="profiletext">
                <p>Definições</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
          <hr />
          <Link to={"/termos-condicoes-page"}>
          <div className="iconitem">
            <img src={DescriptionOutlinedIcon} alt="termos e condições" className="icon" />
            <div className="profiletext">
              <p>Termos e Condições</p>
            </div>
            <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
          </div>
          </Link>
          <hr />
          <Link to={"/politica-privacidade-page"}>
          <div className="iconitem">
            <img src={PrivacyTipOutlinedIcon} alt="política de privacidade" className="icon" />
            <div className="profiletext">
              <p>Política de Privacidade</p>
            </div>
            <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
          </div>
          </Link>
          <hr />
          <Link to={"/politica-cookies-page"}>
          <div className="iconitem">
            <img src={CookiesIcon} alt="política de privacidade" className="icon" />
            <div className="profiletext">
              <p>Política de Cookies</p>
            </div>
            <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
          </div>
          </Link>
          <hr />
          <Link to={"/sobre-nos"}>
            <div className="iconitem">
              <img src={Sobrenos} alt="sobre nós" className="icon" />
              <div className="profiletext">
                <p>Sobre Nós</p>
              </div>
              <ArrowForwardIosRoundedIcon alt="avançar" className="seta" />
            </div>
          </Link>
          <hr></hr>
          <Link to={"/"}>
            <div className="iconitem">
              <img src={Logout} alt="terminar sessão" className="icon"></img>
              <div className="profiletext" onClick={handleClickLogout}>
                <p className="logout">Terminar sessão</p>
              </div>
            </div>
          </Link>
        </div>
      </ProfileStyle>
      <MenuMobile />
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
    color: #5c5c5c;
  }
  .fontsizeadjust {
    font-size: 14px;
  }
  .icon {
    width: 20px;
    /* height: 20px; */
    margin-right: 20px;
    margin-left: 25px;
  }
  .seta {
    width: 18px;
    height: 15px;
    margin-left: 20px;
    color: #5c5c5c;
  }

  .sair {
    //   background-color: #343541;
    //   color: white;
    // font-weight: bold;
    //   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    //   border-radius: 10px;
    //   font-size: 14px;
    margin: 20px 0 0 24px;
    display: flex;
    /* align-self: flex-start; */
    align-items: left;
    justify-content: left;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 600;
    // height: 40px;
    // padding: 0 30px 0 30px;
  }

  // .sair:active{
  //     background-color: #00C17C;
  //   }

.namediv{
  margin-left: 24px;
margin-right: 24px;
  margin-top: 25px;
  height: 90px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 5px;
  align-items: center;

}
.profileimg{
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 1px black solid;
  background-image: url(${mariacarmo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  margin-right: 18px;
  margin-left: 15px;
}
.profiletext{
  .username{
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  p{
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
    font-size: 14px;
    font-weight: bold;
  }

  .icondiv {
    margin-left: 24px;
    margin-right: 24px;
    padding-top: 20px;
    padding-bottom: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    justify-content: center;
    font-size: 13px;
    font-weight: 500;
    hr{
      color: #cacaca;
    }
  }

  .iconitem {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Loader = styled.div`
  .loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 40px;
    height: 40px;
  }
`

export default Profile;
