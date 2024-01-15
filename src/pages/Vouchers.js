import React from "react";
import Header from "../components/Header/Header";
import Notification from "../components/Notification";
import MenuMobile from "../components/MenuMobile";
import styled from "styled-components";
import notificationsJSON from "../data/notifications.json";

const Vouchers = () => {
  return (
    <div>
      <Header name="Cupões" />
      <VouchersDiv>
        {notificationsJSON.map((discount, index) => {
          if (discount.discount) {
            return (
              <Notification
                key={index}
                discount={discount.discount}
                title={discount.title}
                sub={discount.sub}
              ></Notification>
            );
          }
          return "";
        })}
      </VouchersDiv>
      <MenuMobile></MenuMobile>
    </div>
  );
};

const VouchersDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Vouchers;
