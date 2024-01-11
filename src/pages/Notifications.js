import React from 'react'
import MenuMobile from '../components/MenuMobile.js'
import Notification from '../components/Notification.js'
import FormsButton from '../components/FormsButton.js'
import FormsButtonAdd from '../components/FormsButtonAdd.js'


const Notifications = () => {
  
  return (
    <div className='notificacoes'>
      <br></br>
            <Notification discount="7%" title="fhdalfkjdaf" sub="fdafdaljfasdkj"></Notification>
            <FormsButton></FormsButton>
            <FormsButtonAdd></FormsButtonAdd>
            <MenuMobile></MenuMobile>
    </div>
  )
}

export default Notifications