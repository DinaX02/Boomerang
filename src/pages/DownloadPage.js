import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_boomerang_navbar.svg'
import InstallButton from '../components/InstallButton'
import { Link } from 'react-router-dom'

const DownloadPage = () => {

  return (
    <DownloadDiv>
        <img src={logo} alt='Boomerang Logo'></img>
        <h1>Instala a app para uma melhor experiência.</h1>
        <InstallButton></InstallButton>
        <Link to="/onBoarding">Ignorar mensagem</Link>
    </DownloadDiv>
  )
}

const DownloadDiv= styled.div`
background-color: #f8f8f8;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
color: #2e2e2e;
margin-top: -70px;

h1{
  font-weight: 600 !important;
  font-size: 1.6rem !important;
  width: 80vw;
}
button{
  margin-top: 20px;
}

a{
    font-weight: 600 !important;
    margin-top: 10px;
    color: #2e2e2e !important;
    font-size: 1rem;
}
img{
    margin: 20px;
    width: 80px;
}
`
export default DownloadPage