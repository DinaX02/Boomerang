import React from "react";
import MenuMobile from "../components/MenuMobile.js";
import Notification from "../components/Notification.js";
import styled from "styled-components";
import notificationsJSON from "../data/notifications.json";
import {Link, useNavigate} from "react-router-dom";
import TabsComponent from "../components/TabsComponent";

const Notifications = () => {

    const navigate = useNavigate();

  return (
    <NotificationsPage>
        <TabsComponent
            title1={'Notificações'}
            firstComponent={
                notificationsJSON.map((notification, index) => {
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
                })
            }
            title2={'Chat'}
            secondComponent={
                <div>
                    <div onClick={() => navigate('/chat')}>Chat</div>
                </div>
            }
        />

      <MenuMobile></MenuMobile>
      </NotificationsPage>
  
  );
};

const NotificationsPage = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;

  .vouchers{
    text-decoration: none;
    color: #212529;
    width: 100%;
  }
`;

export default Notifications;
