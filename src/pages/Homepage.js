import React from 'react'
import {Link} from 'react-router-dom'
import NavbarWeb from '../components/NavbarWeb'
import Article from "../components/Article";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import userMockupImage from "../assets/user_mockup_image.jpg"
import ProfileLink from "../components/ProfileLink";

const Homepage = () => {
    return (
        <div>
            <HomepageStyle>
                {/*<NavbarWeb/>
        <p>Bem Vindos ao Boomerang</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>*/}
                <div className={'top'}>
                    <div>
                        <div>Bem-Vinda</div>
                        <div>O teu guarda-roupa ilimitado começa aqui</div>
                    </div>
                    <ProfileLink className={'profileLink'} description={false}/>
                </div>
                {/*
                <div>
                    <div className={'sectionTitle'}><span>Categorias Populares</span><Link to={'/'}>Ver mais</Link></div>
                </div>
                */}
                <div>
                    <div className={'sectionTitle'}><span>Promotores Populares</span><Link to={'/'}>Ver mais</Link></div>
                    <div className={'articles'}>
                        <ProfileLink className={'profileLink'} name={'Bernardo Silva'} description={true}/>
                        <ProfileLink className={'profileLink'} name={'Joana Faria'} description={true}/>
                        <ProfileLink className={'profileLink'} name={'Leandro Santos'} description={true}/>
                        <ProfileLink className={'profileLink'} name={'Gisela Martins'} description={true}/>
                        <ProfileLink className={'profileLink'} name={'Renata Batista'} description={true}/>
                    </div>

                </div>
                <div>
                    <div className={'sectionTitle'}><span>Os teus favoritos</span><Link to={'/'}>Ver tudo</Link></div>
                    <div className={'articles'}>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                    </div>
                </div>
                <div>
                    <div className={'sectionTitle'}><span>Novidades</span><Link to={'/'}>Ver mais</Link></div>
                    <div className={'articles'}>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                    </div>
                </div>
            </HomepageStyle>
            <MenuMobile></MenuMobile>
        </div>
    )
}

const HomepageStyle = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  

  .top {
    padding: 25px;
    display: flex;
    justify-content: space-between;

    div:first-child {
      font-size: 20px;
      font-weight: 800;
      flex: 1;

      div:first-child {
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }

    .profileLink {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  
  .articles{
    margin: 5px 0;
    padding: 10px 25px;
    display: flex;
    gap: 15px;
    overflow: scroll;
    *{
      flex-shrink: 0;
    }
  }


  .sectionTitle {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 800;
    a{
      font-weight: 600;
      text-decoration: none;
      color: #00C17C;
    }
  }
`

export default Homepage