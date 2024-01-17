import React from "react";
import Header from "../components/Header/Header";
import Notification from "../components/Notification";
import MenuMobile from "../components/MenuMobile";
import styled from "styled-components";
import notificationsJSON from "../data/notifications.json";
import nothingimg from "../assets/menumobile/notificationsbtn.svg";

const Vouchers = () => {
let nothingCounter=false;


  return (
    <div>
      <Header name="Cupões" />
      <VouchersDiv>
        {notificationsJSON.map((discount, index) => {
          if (discount.discount) {
            nothingCounter=true;
            return (
            <div className="widthCorrection">
              <Notification
                key={index}
                discount={discount.discount}
                title={discount.title}
                sub={discount.sub}
              ></Notification>
              </div>
            );
          }
          return "";
        })    
        }
        {!nothingCounter && (
              <div>
              <div className="nothing">
              <img src={nothingimg} alt="sem notificações"></img>
              <h1>Ainda não tem cupões</h1>
            </div>        </div>
      )}
      </VouchersDiv>
      <MenuMobile></MenuMobile>
    </div>
  );
};

const VouchersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

.widthCorrection{
  width: 90%;
}

.nothing {
    margin-top: 180px;
    text-align: center;

    img {
      width: 80px;
      margin-bottom: 20px;
    }

    p {
      color: var(--notch, #343541);
    }
  }
`;


export default Vouchers;
