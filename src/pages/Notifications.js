import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import Notification from "../components/Notification.js";
import styled from "styled-components";
import notificationsJSON from "../data/notifications.json";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <NotificationsPage>
    {notificationsJSON.map((notification, index) => {
        if (notification.discount) {
          return (
            <Link className={"vouchers"} to={"/vouchers-page"}>
              <Notification
              key={index}
              discount={notification.discount}
              title={notification.title}
              sub={notification.sub}
            ></Notification>
            </Link>
          );
        } else if (notification.image) {
          return (
            <Notification
              key={index}
              image={notification.image}
              title={notification.title}
              sub={notification.sub}
            ></Notification>
          );
        }
        return "";
      })}
      <MenuMobile></MenuMobile>
      </NotificationsPage>
  
  );
};

const NotificationsPage = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .vouchers{
    text-decoration: none;
    color: #212529;
    width: 100%;
    margin-right: -10%;
  }
`;

export default Notifications;
