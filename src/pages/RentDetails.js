import React from 'react'
import Header from '../components/Header/Header'
import PreviewCard from '../components/PreviewCard'
import MenuMobile from '../components/MenuMobile'
import styled from 'styled-components'

const RentDetails = () => {
  return (
    <div>
        <Header name="Detalhes do Aluguer"/>
        <PreviewCard/>
        <RentDetailsDiv>
        <Titles>Estado do Aluguer:</Titles>
        <Info>Aceite</Info>
        <hr></hr>
        <Titles>Data:</Titles>
        <Info>3 janeiro - 5 janeiro</Info>
        <hr></hr>
        <Titles><i>Tracking</i> da encomenda:</Titles>
        <Info>A cargo do utilizador</Info>
        <hr></hr>
        <Titles>Opções sustentáveis:</Titles>
        <Info><ul><li>Lavandaria Sustentável</li></ul></Info>
        <hr></hr>
        <Titles>Morada:</Titles>
        <Info>Rua Mário Sacramento, nº76</Info>
        <hr></hr>
        <Titles>Método de Pagamento:</Titles>
        <Info>Mb Way</Info>
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

padding-bottom: 120px;
`


const Info = styled.p`
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.24px;
`

const Titles = styled.h2`
font-size: 1.2rem;
font-style: normal;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.24px;
`

export default RentDetails