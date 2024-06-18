import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import HeaderPublish from "../Header/HeaderPublicar";
import ModalAlertaForPublish from "./ModalAlertaForPublish";
import CustomizedSteppers from "../ProgressBar";
import ChooseAdressComponent from "../ChooseAdressComponent";
import OverlayFinalPublish from "../OverlayFinalPublish";
import iconOverlay from "../../assets/icons/tick_iconOverlayFInal.svg";
import { useDispatch, useSelector } from "react-redux";
import { resetProgressPublish1 } from "../../redux/publicarSlice";
import { useCreateProductMutation } from '../../redux/productAPI';

const ContainerCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2.5em;
`;

const SpaceTopComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerDoisBtn = styled.div`
  position: fixed;
  bottom: 3.5em;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: -1;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ParagraphIntroAdress = styled.p`
  color: rgb(84, 84, 84);

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const ProgressPublish5 = () => {
  const [fecharModal, setFecharModal] = useState(true);
  const [BtnPublicarEnabled, setBtnPublicarEnabled] = useState(false);
  const [showOverlayFinal, setShowOverlayFinal] = useState(false);
  const [publishProduct] = useCreateProductMutation();

  const progressPublish1 = useSelector((state) => state.Publicar1.progressPublish1);

  const dispatch = useDispatch();

  const handleAddressSelect = () => {
    setBtnPublicarEnabled(true);
  };

  useEffect(() => {
    // console.log("BtnPublicarEnabled:", BtnPublicarEnabled);
  }, [BtnPublicarEnabled]);

  const navigate = useNavigate();

  const handleGoBackStepPublish = () => {
    setBtnPublicarEnabled(true);
    navigate("/progressPublish-4");
  };

  const handleNextStepPublish = () => {
    setShowOverlayFinal(true);
    setTimeout(async () => {
      localStorage.setItem('progressPublishData', JSON.stringify(progressPublish1));
      // console.log(progressPublish1);
      const { title, description, measurements, value, price_day, brand, SizeId, ProductTypeId, ColorId, GradeId } = progressPublish1;
      console.log("MEASURE:", measurements);

      try {
        await publishProduct({ title, description, measurements, value, price_day, brand, SizeId, ProductTypeId, ColorId, GradeId }).unwrap();
        dispatch(resetProgressPublish1());
        setShowOverlayFinal(false);
        // navigate("/");
      } catch (error) {
        console.log('Error publishing product:', error);
        setShowOverlayFinal(false); // Hide overlay if there's an error
      }
    }, 3000);
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  };

  const handleChangeStepInProgressBar = (newStep) => {};

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler} />
      <CustomizedSteppers
        activeStep={4}
        onStepChange={handleChangeStepInProgressBar}
        onNext={handleNextStepPublish}
        onBack={handleGoBackStepPublish}
      />
      <ModalAlertaForPublish
        fecharModal={fecharModal}
        setFecharModal={setFecharModal}
        alert={alert}
        message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
      />
      <ContainerCentered>
        <SpaceTopComponent>
          <Container>
            <ParagraphIntroAdress>
              Escolhe a Morada de Retorno para garantir uma recuperação simples
              e eficiente da tua peça após o período de aluguer.
            </ParagraphIntroAdress>
          </Container>
          <ChooseAdressComponent onAddressSelect={handleAddressSelect} />
          <ContainerDoisBtn>
            <Button text="Anterior" onClick={handleGoBackStepPublish} />
            <Button text="Publicar" onClick={handleNextStepPublish} disable={!BtnPublicarEnabled} />
          </ContainerDoisBtn>
        </SpaceTopComponent>
      </ContainerCentered>
      {showOverlayFinal && (
        <OverlayFinalPublish>
          <img style={{ marginTop: "1em" }} src={iconOverlay} alt="Icone de Publicar acabado" />
          <p style={{ marginTop: "1em", color: "white" }}>Publicado com sucesso!</p>
        </OverlayFinalPublish>
      )}
    </div>
  );
};

export default ProgressPublish5;
