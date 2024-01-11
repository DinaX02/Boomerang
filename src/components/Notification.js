import React from 'react'
import vestidopreto from '../assets/vestido_preto_1.png'

const Notification = (props) => {


  return (
    <div className='notification'>
      <div style={props.discount ?  {} : {backgroundImage: `url(${vestidopreto})`}} alt='notificação' className={props.discount ? 'discount' : 'notificationimg'}>{props.discount}</div>
      <div>
      <p className='notificationtitle'><b>{props.title}</b></p>
      <p className='notificationsub'>{props.sub}</p>
      </div>
       
    </div> 
  )
}

export default Notification