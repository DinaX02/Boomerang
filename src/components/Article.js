import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import articleMockupImage from "../assets/article_mockup_image.jpg"

const Article = (props) => {
    return (

        //TODO: alterar o link para o link do artigo//
        //TODO: alterar imagens e informações para o artigo//

        <ArticleLink style={{transform: `scale(${props.scale})`}} to={`/article`} key={props.key}>
            <img src={articleMockupImage} alt={'mockup'}/>
            {props.description && <div style={{display: props.description ? "block" : "none"}} className={'description'}>
                <div className={'priceRow'}>
                    <div>4€ / dia</div>
                    <div>heart</div>
                </div>
                <p>Zara</p>
                <p>Tamanho S</p>
            </div>}

        </ArticleLink>
    )
}

const ArticleLink = styled(Link)`
  
  font-weight: 600;
  width: 120px;
  height: fit-content;
  display: block;
  background-color: white;
  text-decoration: none;
  color: black;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
  font-size: 12px;
  
  p{
    margin: 0;
    font-weight: 400;
    color: #818181;
  }
  
  .description{
    padding: 5px;
  }
  
  .priceRow{
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 144px;
    object-fit: cover;
    border-radius: 5px;
  }
    
`


export default Article;
