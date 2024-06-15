import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Article from "../components/Article";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import ProfileLink from "../components/ProfileLink";
import Chip from '../components/chip';
import LoginRegistar from '../components/LoginRegistar';
// import artigosJSON from '../data/artigos.json';
import mockupprofile from '../assets/icons/user_unknown.svg';
import usersJSON from '../data/users.json';
import { useFetchProductSearchQuery } from '../redux/productAPI';
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import { CircularProgress } from "@mui/material";
import PopupHomepage from '../components/HomepagePopUp';
import { useFetchFavoriteQuery } from '../redux/favoriteAPI';
import { useSeeUserQuery } from "../redux/usersAPI";

const Homepage = () => {
  const { data, isLoading } = useFetchProductSearchQuery({ title: '' });
  const { data: dataFavorite, isLoading: isLoadingFavorite, error} = useFetchFavoriteQuery();
  const { data: userData, refetch } = useSeeUserQuery();

  useEffect(() => {
    console.log("Loading state:", isLoadingFavorite);

    console.log("Error state:", error);
    if (!isLoadingFavorite) {
      console.log("Data favorite:", dataFavorite);
    }
  }, [isLoadingFavorite, dataFavorite, error]);

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();

    if (window.innerWidth < 600) {
      if (localStorage.getItem("redirect")) {
        return;
      } else {
        localStorage.setItem("redirect", true);
        return navigate("/onBoarding");
      }
    }

    if (localStorage.getItem('firstLogin') === 'true') {
      setShowPopup(true);
      localStorage.removeItem('firstLogin');
    }
  }, [navigate, refetch]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Loader>
      {isLoading && <CircularProgress className={'loader'} color="success" />}
      {!isLoading && (
        <HomepageStyle>
          {showPopup && (
            <PopupHomepage
              message="Bem-vindo! Você pode editar seus dados no seu perfil."
              onClose={handleClosePopup}
            />
          )}
          <div className={'top'}>
            <div>
              <h1 style={{ fontSize: "12px", fontWeight: "600", marginBottom: "5px" }}>Bem-Vindo</h1>
              <h2 style={{ fontSize: "20px", fontWeight: "800" }}>O teu guarda-roupa ilimitado começa aqui</h2>
            </div>
            <Link to={"/profile-page"} aria-label="Link para visitares o teu perfil">
              <div className={'profileLink'} ></div>
            </Link>
          </div>
          <div>
            <h3 className={'sectionTitle'}><span>Categorias Populares</span></h3>
            <div className={'articles'}>
              <Chip category={'Homem'} />
              <Chip category={'Mulher'} />
              <Chip category={'Gala'} />
              <Chip category={'Cerimónia'} />
            </div>
          </div>
          <div>
            <h3 className={'sectionTitle'}><span>Promotores Populares</span></h3>
            <div className={'articles'}>
              {usersJSON
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((user) => (
                  <ProfileLink key={user.id} className={'profileLink'} name={user.username} image={user.avatar} id={user.id} />
                ))}
            </div>
          </div>
          {userData && dataFavorite && dataFavorite.length > 0 && <div>
            <h3 className={'sectionTitle'}><span>Os teus favoritos</span><Link to={'/ver-tudo'} aria-label="Ver Tudo dos favoritos">Ver tudo</Link></h3>
            <div className={'articles'}>
              {!isLoadingFavorite && dataFavorite.slice(0, 4).map((artigo) => (
                <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.image ? artigo.image : imageDefaultProduct} price={artigo.price_day} brand={artigo.brand} size={artigo.Size.name} title={artigo.title}/>
              ))}
              <Article more={true} ariaLabel={"Ver Todos os teus favoritos"} />
            </div>
          </div>}
          <div>
            <div className={'sectionTitle'}><span>Novidades</span><Link to={'/ver-tudo'} aria-label="Ver Tudo das novidades">Ver tudo</Link></div>
            <div className={'articles'}>
              {!isLoading && data.slice(0, 4).map((artigo) => (
                <Article key={artigo.id} id={artigo.id} description={artigo.description} image={artigo.image ? artigo.image : imageDefaultProduct} price={artigo.price_day} brand={artigo.brand} size={artigo.Size.name} title={artigo.title}/>
              ))}
              <Article more={true} ariaLabel={"Ver Todas as novidades"} />
            </div>
          </div>
          <MenuMobile />
          {!localStorage.getItem("login") && <LoginRegistar />}
        </HomepageStyle>
      )}
    </Loader>
  );
}

const HomepageStyle = styled.div`
  padding-bottom: 115px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  .top {
    padding: 25px;
    display: flex;
    justify-content: space-between;
    div:first-child {
      font-size: 20px;
      font-weight: 800;
      flex: 1;
      h1 {
        font-size: 20px;
        font-weight: 800;
        flex: 1;
      }
      div:first-child {
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }
    .profileLink {
      margin-left: 10px;
      margin-top: 10px;
      height: 50px;
      width: 50px;
      border-radius: 100%;
      border: 1px black solid;
      background-image: url(${mockupprofile});
      background-size: auto;
      background-repeat: no-repeat;
      background-position: bottom center;
    }
  }
  .articles {
    margin: 5px 0;
    padding: 10px 25px;
    display: flex;
    gap: 15px;
    overflow: scroll;
    * {
      flex-shrink: 0;
    }
  }
  .sectionTitle {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 800;
    a {
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      color: #008052;
    }
  }
`

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

export default Homepage;
