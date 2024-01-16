import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import InputWithInfoIcon from "../InputWithInfoIcon";
import InputWithEuroIcon from "../InputwithEuroIcon";
import HeaderPublish from "../Header/HeaderPublicar";
import { updateProgressPublish1 } from "../../redux/publicarSlice";
import ModalAlertaForPublish from "./ModalAlertaForPublish";

import "../components.css";

const SpaceTopComponent = styled.div`
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerDoisBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 600px;
  margin-top: 20.9em;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-evenly;
`;

const ProgressPublish4 = () => {
  const [fecharModal, setFecharModal] = useState(true); // alerta de voltar para a homepage (perder dados inseridos)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const {
    estimatedValue,
    rentalPricePerDay
  } = useSelector((state) => state.Publicar1.progressPublish1);

  // console.log("Valores atuais:", estimatedValue, rentalPricePerDay);

  const isButtonDisable = !estimatedValue || rentalPricePerDay === '' || rentalPricePerDay === 0;
  
  const handleGoBackStepPublish = () => {
    navigate(-1);
  };

  const handleNextStepPublish = () => {
    dispatch(
      updateProgressPublish1({
        estimatedValue,
        rentalPricePerDay
      })
    );
    navigate("/progressPublish-5");
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  }

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler}/>
      <ModalAlertaForPublish
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          alert={alert}
          message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
        />
      <SpaceTopComponent>
      <InputWithInfoIcon
          btnName="Valor estimado da peça"
          infoName="Valor estimado da peça"
          inputPlaceholder="Ex: 120"
          value={estimatedValue}
          onChange={(e) => {
            dispatch(
              updateProgressPublish1({
                estimatedValue: e.target.value,
                rentalPricePerDay,
              })
            );
          }}
        />
 <InputWithEuroIcon
          infoName="Preço do aluguer p/ dia"
          inputPlaceholderr="Ex: 10"
          value={rentalPricePerDay}
          onChange={(e) => {
            dispatch(
              updateProgressPublish1({
                estimatedValue,
                rentalPricePerDay: e.target.value,
              })
            );
            }}
        />
        <ContainerDoisBtn>
          <Button text="Anterior" onClick={handleGoBackStepPublish} />
          <Button text="Próximo" onClick={handleNextStepPublish} disable={isButtonDisable}/>
        </ContainerDoisBtn>
      </SpaceTopComponent>
    </div>
  );
};

export default ProgressPublish4;