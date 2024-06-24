import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Notification = (props) => {
  const navigate = useNavigate();

  // dispatch(updateProgressRent({ updatedData: { TransactionId: props.TransactionId } }));
  // const list = useSelector((state) => state.Rent.progressRentList);

  // console.log("TransactionId", list.TransactionId);

  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);

  const handleResize = () => {

    if (window.innerWidth <= 400) {
      setMaxDescriptionLength(18);
    } else if (window.innerWidth <= 800) {
      setMaxDescriptionLength(50);
    } else {
      setMaxDescriptionLength(90);
    }
  };

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const descriptionSizeControl = (text) => {
    return (text.length > maxDescriptionLength) && props.type !== "transaction"
      ? `${text.substring(0, maxDescriptionLength)}...`
      : text;
  };

  const confirmHandle = (id) => {
    props.onNotificationClick();
    if (props.type === "transaction") {
      navigate(`/aluguer-aceitar-rejeitar?transactionId=${props.TransactionId}&ownerUserId=${props.ownerUserId}&article_id=${props.article_id}`);
    }
    if (props.type === "favorite") {
      navigate("/article/" + id);
    }
  }
  return (
    <NotificationDiv style={{
      height: props.type === "transaction" ? "145px" : "105px",
      ...(props.read ? null : { background: "#00C17C20" })
    }} onClick={() => confirmHandle(props.productId)}>
      <NotificationImg alt='notificação' style={{ background: props.image ? `url(${props.image})` : '#2e2e2e' }}>{props.discount}</NotificationImg>
      <div>
        <div>
          <p><b>{descriptionSizeControl(props.title)}</b></p>
          <p>{descriptionSizeControl(props.sub)}</p>
        </div>
        {/* {props.finishRent && <div className='buttonsNotification'>
          <button className='confirm' onClick={confirmHandle} >{props.confirm}</button>
          <button className='reject'>{props.reject}</button>
        </div>} */}
      </div>

    </NotificationDiv>
  )
}

const NotificationDiv = styled.div`
padding-right: 15px;
border-radius: 5px;
background: #fff;
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.09);
/* height: 105px; */
display: flex;
flex-direction: row;
align-items: center;
font-size: 13px;
margin-top: 25px;
/* width: 90vw !important; */
p{
  margin-bottom: 5px;
}

.buttonsNotification{
  display: flex;
  justify-content: left;
  margin-top: 10px;
}
.buttonsNotification button {
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 13px;
}

.confirm{
background-color: #00C17C;
margin-right: 10px;
}
.reject{
  background-color: #c80000;
  margin-left: 10px;
}
`

const NotificationImg = styled.div`
width: 70px;
height: 70px;
min-width: 70px;
min-height: 70px;
border-radius: 500px;
margin-right: 20px;
margin-left: 20px;
background-size: cover !important;
background-position: center center;
font-size: 20px;
color: white;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
`


export default Notification