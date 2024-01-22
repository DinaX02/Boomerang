import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ProfileLink from "../components/ProfileLink";
import {useNavigate} from "react-router-dom";
import arrowBack from "../assets/icons/back_arrow.svg";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IconButton} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '../components/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import artigosJSON from '../data/artigos.json'
import mockupprofile from '../assets/perfil/user_mockup_image.jpg'
import InfoIconTaxa from "../assets/icons/infoIcon.svg"
import Modal from "../components/Modal"
import Vermelho from "../assets/cores/vermelho.svg";
import Azul from "../assets/cores/azul.svg";
import Amarelo from "../assets/cores/amarelo.svg";
import Rosa from "../assets/cores/rosa.svg";
import Verde from "../assets/cores/verde.svg";
import Roxo from "../assets/cores/roxo.svg";
import Preto from "../assets/cores/preto.svg";
import Multicolor from "../assets/cores/multicolor.svg";
import Laranja from "../assets/cores/laranja.svg";
import Branco from "../assets/cores/branco.svg";
 
const ArticlePage = (props) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [fecharModal, setFecharModal] = useState(true);

    const colorImages = {
        Vermelho,
        Azul,
        Amarelo,
        Rosa,
        Verde,
        Roxo,
        Preto,
        Multicolor,
        Laranja,
        Branco,
    };



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  useEffect(() =>{
    artigosJSON.forEach(artigo => {
      if(artigo.id===parseInt(id)){
        setItem(artigo);
        setTimeout(()=>{console.log('Image Path:', colorImages[item.color])},1000)
      }
    });
  }, [item, id])
    
   const handleIconClick = () => {
        setFecharModal(false);
      };

  useEffect(() => {
    // dar reset ao scroll quando se entrar aqui :)
    window.scrollTo(0, 0);
  }, []);

    return (
        <ArticlePageStyle>
           <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message={
          <ParagraphMessageModal1p>
Esta taxa de proteção (<strong>2€ + 5% do valor total do aluguer</strong>) é <strong>obrigatória</strong> e permite que <strong>todos os danos até 25€</strong> causados à peça durante o período de aluguer sejam <strong>cobertos pela Boomerang</strong>.
          </ParagraphMessageModal1p>
        }
      />
            <div className={'headerBoomerang'}>
                <div onClick={() => {navigate(-1)}} className={'back'}>
                    <img data-testid="svg-icon" src={arrowBack}  style={{ cursor: "pointer" }} alt="arrow go back" />
                    <h3>Voltar</h3>
                </div>
                <div className={'icons'}>
                    <IconButton
                        id="article-menu-button"
                        aria-controls={anchorEl ? 'article-menu' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon style={{color: "white"}}/>
                    </IconButton>
                    <Menu
                        className={'articleDropdown'}
                        id="article-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem style={{fontSize: 14}} onClick={handleClose}>Denunciar</MenuItem>
                        {/*
                        <MenuItem style={{fontSize: 14}} onClick={handleClose}>Editar artigo</MenuItem>
                        */}
                    </Menu>
                </div>
            </div>
            {item.images && item.images.length > 0 &&
                <div className={'carousel'}>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        showArrows={false}
                    >
                        {item.images.map((image, index) => (<div style={{ position: 'relative', zIndex: '-1', height: '40vh' }}>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `url(${image})`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center',
                                        filter: 'blur(15px)',
                                    }}
                                ></div>
                                <img
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%',
                                        width: '100%',
                                        position: 'relative',
                                        zIndex: '1',
                                    }}
                                    src={image}
                                    alt={`image-${index}`}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                }

            <div className={'articleHeader'}>
                <div className={'user'}>
                    <ProfileLink zoom={1.1} image={mockupprofile}/>
                    <div>
                        <div>maria_carmo</div>
                        <div className={'stars'}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarOutlineIcon />
                        </div>
                    </div>
                </div>
                <div className={'articleButtons'}>
                    <Button text="Alugar" onClick={() => navigate(`/rentdate-page/${item.id}`)}></Button>
                    <Button text="Chat" onClick={() => navigate(`/chat`)}></Button>
                </div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Título da Peça</div>
                <div>{item.title}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Valor Estimado do Artigo</div>
                <div style={{marginBottom: "1.5em"}}>60€</div>
                <div className={'title'}>Preço do Aluguer por dia</div>
                <div>{item.dailyRentalPrice}€ / dia</div>
                <div style={{marginTop: "1.5em", fontWeight: "bold", display:"flex", alignItems:"center"}}>Taxa de Proteção Obrigatória <img style={{marginLeft: "0.5em"}} src={InfoIconTaxa} alt='infoICon' onClick={handleIconClick}/></div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Descrição</div>
                <div>{item.description}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Tamanho</div>
                <div>{item.size}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Cor</div>
                <div className={'articleColor'}><img src={colorImages[item.color]}/>{item.color}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Categoria</div>
                <div>Vestido</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Marca</div>
                <div>{item.brand}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Estado</div>
                <div>{item.condition}</div>
            </div>
            <div className={'articleSection'}>
                <div className={'title'}>Medidas da Peça</div>
                {item.measurements && Object.entries(item.measurements).map(([propertyName, propertyValue]) => (
    <div key={propertyName}>
        {propertyName}: {propertyValue}
    </div>
))}

            </div>

        </ArticlePageStyle>
    )
}

const ArticlePageStyle = styled.div`
  
  
  .headerBoomerang{
    z-index: 100;
    top: 0;
    position: fixed;
    width: 100%;
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back{
      display: flex;
      align-items: center;
      img{
        margin-left: 0;
      }
    }
    .icons{
      button{
        padding: 0;
      }
      svg{
        font-size: 30px;
      }
      display: flex;
      gap: 20px;
    }
  }
    
    .carousel{
      height: 40vh;
      object-fit: cover;
      width: 100%;
      margin-top: 60px;
    }
  
  .articleHeader{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 25px 0;
    margin: 0 25px;
    .user{
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      gap: 20px;
      .stars svg{
        font-size: 15px;
      }
    }
    .articleButtons{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      flex: 1;
      text-align: center;
      button{
        border: 1px solid rgb(0,0,0,0.1);
        background-color: white !important;
        color: #2e2e2e;
        &:first-child{
          background-color: #00C17C !important;
          color: white;
        }
      }
    }
  }
  
  .articleSection{
    font-weight: 500;
    font-size: 13px;
    padding: 25px 0;
    margin: 0 25px;
    border-top: 1px solid rgb(0,0,0,0.1);
    .title{
      font-weight: 800;
    }
    .articleColor{
      display: flex;
      align-items: center;
      gap: 10px;
      div{
      }
    }
  }
  

`
const ParagraphMessageModal1p = styled.span`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1rem;
`;

export default ArticlePage