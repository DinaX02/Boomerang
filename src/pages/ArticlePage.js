import React from 'react'
import styled from "styled-components";
import articleMockupImage from "../assets/article_mockup_image.jpg"
import ProfileLink from "../components/ProfileLink";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";

const ArticlePage = () => {

    const navigate = useNavigate();
    return (
        <ArticlePageStyle>
            <div className={'headerBoomerang'}>
                <div onClick={() => {navigate(-1)}}>
                    Voltar
                </div>
                <div className={'icons'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="red">
                        <path d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2 9.24 2 10.91 2.89 12 4.35 13.09 2.89 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-8.55 12.54L12 21.35z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="5" r="1"/>
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                    </svg>

                </div>
            </div>
            <img className={'carousel'} src={articleMockupImage}></img>
            <div className={'articleHeader articleSection'}>
                <div className={'user'}>
                    <ProfileLink/>
                    <div>
                        <div>maria_carmo</div>
                        <div>estrelas</div>
                    </div>
                </div>
                <div className={'articleButtons'}>
                    <Button text={'Alugar'}/>
                    <div>Chat</div>
                </div>
            </div>
            <div className={'articleSection'}>
                <div>Vestido castanho</div>
                <div>S / 36 / 8 . Muito bom . Shein</div>
            </div>

        </ArticlePageStyle>
    )
}

const ArticlePageStyle = styled.div`
  
  .headerBoomerang{
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons{
      display: flex;
      gap: 20px;
    }
  }
    
    .carousel{
      height: 40vh;
      object-fit: cover;
      width: 100%;
    }
  
  .articleHeader{
    display: flex;
    gap: 10px;
    .user{
      font-size: 12px;
      font-weight: 600;
      display: flex;
      gap: 10px;
    }
    .articleButtons{
      flex: 1;
      text-align: center;
    }
  }
  
  .articleSection{
    font-weight: 500;
    font-size: 13px;
    padding: 25px 0;
    margin: 0 25px;
    border-bottom: 1px solid rgb(0,0,0,0.1);
  }
  

`
export default ArticlePage