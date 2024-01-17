import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_boomerang_navbar.svg'
import InstallPWA from '../components/InstallButton'
import { Link } from 'react-router-dom'

const DownloadPage = () => {
  return (
    <DownloadDiv>
        <img src={logo} alt='Boomerang Logo'></img>
        <h1>Instale a <i>app</i> para uma melhor experiência.</h1>
        <InstallPWA></InstallPWA>
        <Link to="/onBoarding">Ignorar mensagem</Link>
    </DownloadDiv>
  )
}

const DownloadDiv= styled.div`
background-color: #00BC79;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
color: white;
padding-top: 120px;

a{
    margin-top: 40px;
    color: white !important;
}
img{
    margin: 20px;
    width: 80px;
}
`
export default DownloadPage