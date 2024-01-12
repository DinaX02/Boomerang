import React from 'react'
import MenuMobile from '../components/MenuMobile.js'
import Notification from '../components/Notification.js'
import styled from 'styled-components'


const Notifications = () => {

  const NotificationsPage= styled.div`
  background-color: #F8F8F8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  `
  
  return (
    <NotificationsPage>
      <Notification discount="7%" title="fdaklçjfas" sub="fadjklkjsda"></Notification>
            <MenuMobile></MenuMobile>
    </NotificationsPage>
  )
}

export default Notifications