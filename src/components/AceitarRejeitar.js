import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import iconInfo from '../assets/icons/infoIcon.svg';
import { useNavigate } from 'react-router-dom';
import Modal from "./Modal";
// import { useSelector } from "react-redux";
import { useFetchTransactionQuery, useRejectedTransactionMutation, useCancelledTransactionMutation } from '../redux/transactionAPI';
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import { CircularProgress } from "@mui/material";
import { format, differenceInDays } from 'date-fns'; // Importe 'format' e 'differenceInDays' do date-fns
import ptBR from 'date-fns/locale/pt-BR'; // Importe a localidade desejada
import { useSeeUserQuery } from "../redux/usersAPI";

const AceitarRejeitar = (props) => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);
  const navigate = useNavigate();
  const [fecharModal, setFecharModal] = useState(true);
  const { data: transactionData, isLoading: isLoadingTransaction } = useFetchTransactionQuery(props.transactionId);
  const [rejectedTransaction] = useRejectedTransactionMutation();
  const [cancelledTransaction] = useCancelledTransactionMutation();
  const { data: userData } = useSeeUserQuery();
  const ownerUserId = Number(props.ownerUserId);
  // Função para formatar a data
  const formatDate = (date) => {
    return format(new Date(date), 'd MMM yyyy', { locale: ptBR }); // Ajuste 'ptBR' para a localidade desejada
  };

  // Função para calcular a diferença em dias entre duas datas
  const calculateDaysDifference = (start, end) => {
    const diffInDays = differenceInDays(new Date(end), new Date(start));
    return diffInDays;
  };
  const total = transactionData?.Product?.price_day * calculateDaysDifference(transactionData?.date_start, transactionData?.date_end);

  // Efeito para controlar o redimensionamento da janela
  const handleResize = () => {
    if (window.innerWidth <= 450) {
      setMaxDescriptionLength(40);
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
    return text?.length > maxDescriptionLength
      ? `${text.substring(0, maxDescriptionLength)}...`
      : text;
  };

  const confirmHandle = () => {
    if (transactionData.state === "pending") {
      //mandar para o endpoint aceitar
      // const response = await approvedTransaction({ transactionId: props.transactionId, ownerUserAddress: });
      // return <AlugarMorada transactionId={props.transactionId}/>
      navigate(`/alugar-morada?transactionId=${props.transactionId}&state=${transactionData.state}`);
    }
    if (transactionData.state === "approved") {
      navigate(`/alugar-detalhes?article_id=${props.article_id}`);
    }

  }
  const rejectHandle = async () => {
    if (transactionData.state === "pending") {
      //mandar para o endpoint rejeitar

      try {
        const response = await rejectedTransaction({ transactionId: props.transactionId });
      }
      catch (error) {
        console.error("Error Rejected:", error);
      }
    }
    if (transactionData.state === "approved") {
      //mandar para o endpoint cancelar
      try {
        const response = await cancelledTransaction({ transactionId: props.transactionId });
      }
      catch (error) {
        console.error("Error Cancelled:", error);
      }
    }
    navigate("/notifications-page");
  }

  // Função para navegar para a página de vouchers
  // const vouchers = () => {
  //     navigate("/vouchers-page");
  // };
  return (
    <>
      <Modal
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        message={transactionData?.state === "pending" ? "Tens a certeza que queres rejeitar este aluguer?" : "Tens a certeza que queres cancelar este aluguer?"}
        alert={true}
        transaction={true}
        onClick={rejectHandle}
      />
      {isLoadingTransaction && <Loader className={'loader'} color="success" />}
      {!isLoadingTransaction && transactionData && <MainContainer>
        <FirstContainer>
          <div className='imgCardPreview' style={{ backgroundImage: `url(${transactionData?.Product?.productImage?.length > 0 ? transactionData?.Product?.productImage : imageDefaultProduct})` }}></div>
          <div className="textContainerPreview">
            <h2 className="titlePreview">{transactionData.Product?.title}</h2>
            <p className="descriptionPreview">{descriptionSizeControl(transactionData.Product?.description)}</p>
          </div>
        </FirstContainer>
        <hr />
        <SecondContainer>
          <ServiceConatiner>
            <TextInner>
              <p style={{ margin: "2px 0px", fontWeight: "bold" }}>Período do Aluguer</p>
              <p style={{ margin: "0" }} className='detalhe'>De: {formatDate(transactionData.date_start)}</p>
              <p style={{ margin: "0" }} className='detalhe'>Até: {formatDate(transactionData.date_end)}</p>
            </TextInner>
          </ServiceConatiner>
          <ServiceConatiner>
            <TextInner>
              <p style={{ margin: "2px 0px", fontWeight: "bold" }}>Valor do Aluguer</p>
              <p style={{ margin: "0" }} className='detalhe'>{transactionData.Product?.price_day}€ /dia x {calculateDaysDifference(transactionData.date_start, transactionData.date_end)} dias</p>
            </TextInner>
          </ServiceConatiner>
          <div style={{ textAlign: "center" }}>
            <p style={{ margin: "5px 0 0 0", fontWeight: "600" }}>Total:</p>
            <p style={{ margin: "0", fontWeight: "bold", color: "#00c17c", fontSize: "20px" }}>{total}€</p>
          </div>
        </SecondContainer>
        {transactionData.state === "cancelled" || transactionData.state === "rejected"
          ? <p className='buttonsNotification' style={{ color: "#C80000", fontWeight: "600" }}>{transactionData.state === "cancelled" ? "Aluguer cancelado" : "Aluguer rejeitado"}</p>
          : <div className='buttonsNotification'>
            <button className='confirm' onClick={confirmHandle}>{(transactionData.state === "pending" && userData.id === ownerUserId) ? "Aceitar" : ((transactionData.state === "approved" && userData.id !== ownerUserId) ? "Finalizar" : "Aceitar")}</button>
            <button className='reject' onClick={() => setFecharModal(false)}>{(transactionData.state === "pending" && userData.id === ownerUserId) ? "Rejeitar" : ((transactionData.state === "approved" && userData.id !== ownerUserId) ? "Cancelar" : "Rejeitar")}</button>
          </div>
        }
      </MainContainer>}
    </>
  );
};

// const ParagraphMessageModal1p = styled.span`
//   font-weight: 400;
//   font-size: 14px;
//   margin-bottom: 1rem;
// `;

const MainContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 15px 10px;
  background-color: white;
  box-shadow: -1px 4px 7px -1px rgb(0 0 0 / 15%);
  border-radius: 5px;

  .buttonsNotification{
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
`;
const FirstContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const SecondContainer = styled.div`
  width: 100%;
  text-align: center;

  .btncupao{
    background-color: transparent;
    border: none;
    outline: none;
    color: #00c17c;
    font-size: 12px;
    font-weight: 600;
    margin: 20px 0px;
  }
`;
const ServiceConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextInner = styled.div`
  width: 75%;
  font-size: 13px;
  padding: 5px 5px 5px 5px;
  .buttonInfo{
      border: none;
      background: none;
    }
  .detalhe{
    font-size: 14px;
    font-weight: 500;
  }
`;
// const PriceInner = styled.div`
//   width: 25%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
`;

export default AceitarRejeitar;