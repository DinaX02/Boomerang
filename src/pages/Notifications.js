import React from 'react'
import MenuMobile from '../components/MenuMobile.js'
import Notification from '../components/Notification.js'
import styled from 'styled-components'
import casaco from '../assets/casaco_preto_1.png'


const Notifications = () => {



  return (
    <NotificationsPage>
      <Notification title="Não sei quem alugou o vestido fsdakjfsadk çfsafjçkahsdf çkjfasd" sub="Veja aqui os detalhes do aluguer" image={casaco}></Notification>
            <MenuMobile></MenuMobile>
    </NotificationsPage>
  )
}


const NotificationsPage= styled.div`
background-color: #F8F8F8;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`


export default Notifications