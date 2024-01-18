import React from 'react'
import Header from '../components/Header/Header'
import PreviewCard from '../components/PreviewCard'
import MenuMobile from '../components/MenuMobile'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const RentDetails = () => {
  const list = useSelector((state) => state.Rent.progressRentList);

  const lavagens = [
'Lavandaria Sustentável', 'Lavagem feita pelo utilizador'
];
const transportes = [
'Transportadora Eco-Friendly', 'Transporte a cargo do utilizador'
];

  return (
    <div>
        <Header name="Detalhes do Aluguer"/>
        <PreviewCard id={list[0].article_id}/>
        <RentDetailsDiv>
        <Titles>Estado do Aluguer:</Titles>
        <Info>Aguarda Confirmação</Info>
        <hr></hr>
        <Titles>Data:</Titles>
        <Info>{list[0].date[0]} - {list[0].date[1]}</Info>
        <hr></hr>
        <Titles>Detalhes:</Titles>
        <Info><li>{lavagens[list[0].detalhes[0]]}</li>
        <li>{transportes[list[0].detalhes[1]]}</li></Info>
        <hr></hr>
        <Titles>Morada:</Titles>
        <Info>{list[0].morada}</Info>
        <hr></hr>
        <Titles>Método de Pagamento:</Titles>
        <Info>{list[0].pagamento}</Info>
        </RentDetailsDiv>
        <MenuMobile/>
    </div>
  )
}

const RentDetailsDiv= styled.div`
width: 85vw;
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
hr{
    margin-bottom: 20px;
    margin-top: 5px;
}

padding-bottom: 100px;
`


const Info = styled.p`
font-size: 0.8rem;
font-weight: 500;
line-height: 20px;
`

const Titles = styled.h2`
font-size: 1rem;
font-weight: 600;
line-height: 15px;
`

export default RentDetails