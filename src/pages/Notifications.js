import React, { useEffect } from "react";
import MenuMobile from "../components/MenuMobile.js";
import Notification from "../components/Notification.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TabsComponent from "../components/TabsComponent";
import ChatLink from "../components/ChatLink";
import { useDispatch, useSelector } from "react-redux";
// import { updateProgressRent } from '../redux/rentSlice'
import nothingimg from "../assets/icons/zeroNotifications.svg";
// import artigosJSON from "../data/artigos.json"
import { useFetchNotificationQuery } from "../redux/notificationAPI.js";
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import { addProgressRent } from "../redux/rentSecondSlice";

const Notifications = () => {
  const dispatch = useDispatch();
  // const list = useSelector((state) => state.Rent.progressRentList);
  const {
    data: notifications,
    isLoading,
    refetch,
  } = useFetchNotificationQuery();

  const handleNotificationClick = (notification) => {
    if (notification?.type === "transaction") {
      const daysDifference =
        (new Date(notification.transaction.date_end) -
          new Date(notification.transaction.date_start)) /
        (1000 * 3600 * 24); // calcular total de dias
      const valor = notification.transaction.price_day * daysDifference;
      const taxa = parseFloat((valor * 0.05 + 2).toFixed(2));
      const total = valor + taxa;

      const rentSecondData = {
        article_id: notification?.product?.id,
        daysDifference: daysDifference,
        valor: valor,
        taxa: taxa,
        total: total,
        transactionId: notification?.TransactionId,
        ownerUserId: notification?.transaction?.ownerUserId,
      };
      dispatch(addProgressRent(rentSecondData));
    }
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <NotificationsPage>
        <TabsComponent
          title1={"Notificações"}
          firstComponent={
            notifications ? (
              <div>
                <Link className={"vouchers"} to={"/rentdetails-page"}>
                  {/* <Notification
                    image={artigosJSON[list.article_id - 1].images[0]}
                    title={"Alugou o seu primeiro item!"}
                    sub={"Estamos a espera que seja confirmado."}
                  ></Notification> */}
                </Link>

                {/* <Link className={"vouchers expirado"} to={"/vouchers-page"}>
                  <Notification
                    discount={"7%"}
                    title={"Desconto Expirado"}
                    sub={"Validade até: 10/01/2024"}
                  ></Notification>
                </Link> */}
                {!isLoading &&
                  notifications &&
                  [...notifications]
                    .reverse()
                    .map((notification) => (
                      <Notification
                        key={notification.id}
                        image={
                          notification?.product?.productImage
                            ? notification.product.productImage[0]
                            : imageDefaultProduct
                        }
                        title={notification?.title}
                        sub={notification?.message}
                        type={notification?.type}
                        productId={notification?.product?.id}
                        TransactionId={notification?.TransactionId}
                        read={notification?.read}
                        ownerUserId={notification?.transaction?.ownerUserId}
                        article_id={notification?.product?.id}
                        onNotificationClick={() =>
                          handleNotificationClick(notification)
                        }
                      ></Notification>
                    ))}
              </div>
            ) : (
              <div className="nothing">
                <img src={nothingimg} alt="sem notificações"></img>
                <p className="noNotificationsText">
                  Ainda não tens notificações
                </p>
              </div>
            )
          }
          title2={"Chat"}
          secondComponent={
            <div className={"chatList"}>
              <ChatLink index={20} />
            </div>
          }
        />

        <MenuMobile></MenuMobile>
      </NotificationsPage>
    </div>
  );
};

const NotificationsPage = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  padding-bottom: 115px;

  .vouchers {
    text-decoration: none;
    color: #212529;
  }

  .nothing {
    /* margin-top: 180px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      width: 80px;
      /* margin-bottom: 20px; */
    }

    p {
      color: var(--notch, #343541);
    }
  }
  .chatList {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .noNotificationsText {
    font-weight: 500;
    /* font-size: 18px; */
    width: max-content;
    margin-top: 1em;
  }
`;

export default Notifications;
