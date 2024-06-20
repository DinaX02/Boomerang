import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/homepageweb/fundo_hero.png";
import coverBoomerang from "../../assets/homepageweb/img_cover_boomerang.png";

const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: #f8f8f8;
`;

const ContainerHeroo = styled.div`
.paraghDescription{
  width: 65%;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 18px;
}

.imgBoomerang{
  max-width: 450px;
  height: auto;
  margin-top: 1em;
}

@media (min-width: 768px) {
  .imgBoomerang{
    margin-left: 2em;
    margin-right: 2em;
    width: 600px !important;  
    margin-right: 20px;
  }
}

.tags_boomerang{
  background-color: #343541;
  color: #00C17C;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  border-radius: 25px;
  max-width: 180px;
  margin-right: 0.7em;
  margin-bottom: 0.7em;
  font-size: 18px;
  font-weight: 400;
}

.tags_boomerang_big{
  background-color: #343541;
  color: #00C17C;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  padding-left: 0.7em;
  padding-right: 0.7em;
  border-radius: 25px;
  max-width: 220px;
  margin-right: 0.7em;
  margin-bottom: 0.7em;
  font-size: 18px;
  font-weight: 400;
}

.fontsize_tags{
  font-size: 30px;
  font-weight: 500;
  color: white;
}
 
.text_marcado_boomerang{
  background-color: rgba(0, 193, 124, 0.8);
  display: inline-block;
  position: relative;
  z-index: 1;
  line-height: 0.10;
  padding-right: 0.4em;
  padding-bottom: 0.6em;
}

.content_p4{
  margin-top: 20px;
  padding-left: 30px;
}

.title_boomerang_hero{
  font-size: 6.6vw;
  margin-bottom: 0.3em;
  margin-top: 0 !important;
  color: #00c17c;
  font-weight: 700;
}

@media (max-width: 1090px) {
  .title_boomerang_hero{
    font-size: 6vw;
  }

  .paraghDescription{
  font-size: 16px;
  width: 75%;
  }
}

@media (max-width: 950px) {
  .title_boomerang_hero{
    font-size: 5vw;
  }
}

@media (max-width: 850px) {
  .title_boomerang_hero{
    font-size: 4.5vw;
    margin-bottom: 1em !important;
  }
}

.div_content_p4 {
  padding-bottom: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 868px) {
  .div_content_p4 {
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 60px;
  }
}
`;

const DownloadButton = styled.a`
  padding: 0.625rem 1.25rem;
  font-size: 16px;
  font-weight: bold;
  color: black;
  background-color: #f8f8f8;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  z-index: 2;

  @media (max-width: 768px) {
    /* font-size: calc(0.625rem + 1vw); */
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <ContainerHeroo>
        <div className="div_content_p4">
          <img
            className="imgBoomerang"
            src={coverBoomerang}
            alt="mockupBoomerang"
          />
          <div className="content_p4">
            <h1 className="title_boomerang_hero">Boomerang</h1>
            <div style={{ width: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", maxWidth: "600px" }}>
              <div className="tags_boomerang_big"><span>Aluguer de Roupa</span></div>
              <div className="tags_boomerang"><span>Peer-to-Peer</span></div>
              <div className="tags_boomerang"><span>Sustentabilidade</span></div>
              <div className="tags_boomerang"><span>E-commerce</span></div>
              <div className="tags_boomerang_big"><span>Comunidade online</span></div>
            </div>
            <p className="paraghDescription">A plataforma Boomerang está atualmente disponível apenas para dispositivos móveis. Para saber mais sobre o que é a Boomerang e como funciona, clica no botão "Saber Mais" para seres redirecionado para o nosso website informativo.</p>
            <DownloadButton
              href="" //isto não está a reencaminhar o botão para o link
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </DownloadButton>
          </div>  
        </div>
      </ContainerHeroo>
    </HeroWrapper>
  );
};

export default HeroSection;