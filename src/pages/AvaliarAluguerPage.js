import React, {useState} from 'react'
import Header from '../components/Header/Header'
import PreviewCard from '../components/PreviewCard'
import MenuMobile from '../components/MenuMobile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import AvaliacaoDefault from "../assets/icons/estrela_avaliar_default.svg"
import AvaliacaoSelected from "../assets/icons/estrela_avaliar_selected.svg"
import InfoIcon from "../assets/icons/infoIcon.svg"

const AvaliarAluguerPage = () => {
  const list = useSelector((state) => state.Rent.progressRentList);

    // Estado inicial
    const [selectedStars, setSelectedStars] = useState([false, false, false, false, false]);

    // mudar a star de default para selected e vice-versa
    const handleStarClick = (index) => {
      const newSelectedStars = selectedStars.map((selected, i) =>
        i <= index ? true : false
      );
      setSelectedStars(newSelectedStars);
    };

  return (
    <div>
      <Header name="Avaliar Aluguer"/>
      <ContainerAvaliarPage>
      <PreviewCard id={list.article_id} valor={list.total}/>
      <hr></hr>
      <h1>Avaliar Aluguer</h1>
      <p>Partilha a tua opinião com outras pessoas</p>
      <div className='containerAvaliacaoEstrelas'>
      {selectedStars.map((selected, index) => (
            <img
              key={index}
              src={selected ? AvaliacaoSelected : AvaliacaoDefault}
              alt={`estrela de avaliar ${selected ? 'selecionada' : 'por selecionar'}`}
              onClick={() => handleStarClick(index)}
            />
          ))}
      </div>

      <div className='containerContactarPromotor'>
<button>Contactar mariacarmo</button>

<div className='helpersLinks'><img src={InfoIcon}/><p>O que fazer caso a peça não chegar a tempo</p></div>
<div className='helpersLinks'><img src={InfoIcon}/><p>Perguntas Frequentes</p></div>

<p>Outras opções</p>

<div className='helpersLinks'><img src={InfoIcon}/><p>Ajuda</p></div>
<div className='helpersLinks'><img src={InfoIcon}/><p>Contactar Suporte</p></div>

      </div>
      </ContainerAvaliarPage>
      <MenuMobile/>
    </div>
  )
}

export default AvaliarAluguerPage

const ContainerAvaliarPage= styled.div`
padding: 25px 25px 0px;

hr{
  margin-top: 2em;
  margin-bottom: 2em;
}

h1{
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.3em;
}

p{
  font-size: 14px;
}

.containerAvaliacaoEstrelas{
display: flex;
flex-direction: row;
justify-content: space-evenly;
text-align: right;
margin-top: 1.5em;
margin-bottom: 3.5em;
}

.containerAvaliacaoEstrelas img {
  margin-right: auto;
  margin-left: 0;
}

.containerContactarPromotor {
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color:#FFF;
  border-radius:8px;
  padding: 1em;
  margin-top: 2.4em;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  
  button{
    border: 2px solid #00C17C;
    border-radius: 5px;
    background-color:#FFF;
    padding: 0.6em;
    font-weight: bold;
    color:#00C17C;
    font-size: 14px;
    // width: 80%;
    margin-bottom: 1em;

    &:active {
      background-color: #DADADA;
  }
}

  .helpersLinks{
    display: flex;
    flex-direction: row;
    align-items:center;
    font-weight: bold;
    font-size:14px;
    margin-bottom: 0.5em;

    p{
      margin-left: 0.5em;
      margin-bottom: 0;
    }
  }
}

`
