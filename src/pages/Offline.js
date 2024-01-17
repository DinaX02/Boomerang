import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_boomerang_navbar.svg'


const Offline = () => {

  return (
    <DownloadDiv>
        <img src={logo} alt='Boomerang Logo'></img>
        <h1>O Boomerang precisa de estar conectado à internet para funcionar.</h1>
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
img{
    margin: 20px;
    width: 80px;
}
`
export default Offline