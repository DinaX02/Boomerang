import React from 'react'
import vestidopreto from '../assets/vestido_preto_1.png'
import styled from 'styled-components'

const Notification = (props) => {

  const Notification = styled.div`
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09);
  height: 130px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  p{
    max-width: 250px;
    margin-bottom: 5px;
  }
  `

  const NotificationImg =styled.div`
  width: 80px;
  height: 80px;
  border-radius: 200px;
  margin-right: 20px;
  margin-left: 20px;
  background-size: cover;
  background-position: center center;
  background: ${props.discount ? '#00C17C' : `url(${vestidopreto})`};
  font-size: 20px;
  color: white;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  `


  return (
    <Notification>
      <NotificationImg alt='notificação'>{props.discount}</NotificationImg>
      <div>
      <p><b>{props.title}</b></p>
      <p>{props.sub}</p>
      </div>
       
    </Notification> 
  )
}

export default Notification