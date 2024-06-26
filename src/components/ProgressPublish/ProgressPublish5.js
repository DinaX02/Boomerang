import React, { useState } from "react";
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
import { useCreateProductMutation } from "../../redux/productAPI";
import { CircularProgress } from "@mui/material";

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

const ProgressPublish5 = () => {
  const [fecharModal, setFecharModal] = useState(true);
  const [BtnPublicarEnabled, setBtnPublicarEnabled] = useState(false);
  const [showOverlayFinal, setShowOverlayFinal] = useState(false);
  const [publishProduct] = useCreateProductMutation();
  const [erroPublicar, setErroPublicar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const progressPublish1 = useSelector(
    (state) => state.Publicar1.progressPublish1
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddressSelect = () => {
    setBtnPublicarEnabled(true);
  };

  const handleGoBackStepPublish = () => {
    setBtnPublicarEnabled(true);
    navigate("/progressPublish-4");
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handleNextStepPublish = async () => {
    // setTimeout(async () => {
    const {
      title,
      description,
      measurements,
      value,
      price_day,
      brand,
      SizeId,
      ProductTypeId,
      ColorId,
      GradeId,
      productImage,
    } = progressPublish1;

    // Check if required fields are present
    if (!title || !description) {
      setErroPublicar(true);
      setShowOverlayFinal(false);
      return;
    }

    // Convert base64 to files
    const files = productImage.map((base64Image, index) => {
      return dataURLtoFile(base64Image, `image_${index}.png`);
    });

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("measurements", JSON.stringify(measurements));
    formData.append("value", value);
    formData.append("price_day", price_day);
    formData.append("brand", brand);
    formData.append("SizeId", SizeId);
    formData.append("ProductTypeId", ProductTypeId);
    formData.append("ColorId", ColorId);
    formData.append("GradeId", GradeId);

    // Add files to FormData
    files.forEach((file, index) => {
      formData.append(`productImage`, file); // Ensure this matches the server's expected field name
    });

    try {
      setIsLoading(true);
      await publishProduct(formData).unwrap();
      dispatch(resetProgressPublish1());
      // setShowOverlayFinal(true);
      // navigate("/");
    } catch (error) {
      setErroPublicar(true);
      console.log("Error publishing product:", error);
      setShowOverlayFinal(false);
    }
    finally {
      setShowOverlayFinal(true);
      setTimeout(async () => {
        navigate("/");
      }, 3000);
      setIsLoading(false);
    }
    // }, 3000);
  };

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate("/");
  };

  const handleChangeStepInProgressBar = (newStep) => { };

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
      {isLoading && <Loader className={'loader'} color="success" />}

      {!isLoading && <ContainerCentered>
        <SpaceTopComponent>
          <Container>
            <ParagraphIntroAdress>
              Escolhe a Morada de Retorno para garantir uma recuperação simples
              e eficiente da tua peça após o período de aluguer.
            </ParagraphIntroAdress>
          </Container>
          <div style={{ padding: "24px" }}><ChooseAdressComponent onAddressSelect={handleAddressSelect} /></div>
          {erroPublicar && (
            <p style={{ marginTop: "1em", color: "#C80000" }}>
              Erro ao publicar por causa do upload de imagens
            </p>
          )}
          <ContainerDoisBtn>
            <Button text="Anterior" onClick={handleGoBackStepPublish} />
            <Button
              text="Publicar"
              onClick={handleNextStepPublish}
              disable={!BtnPublicarEnabled}
            />
          </ContainerDoisBtn>
        </SpaceTopComponent>
      </ContainerCentered>}
      {showOverlayFinal && (
        <OverlayFinalPublish>
          <img
            style={{ marginTop: "1em" }}
            src={iconOverlay}
            alt="Icone de Publicar acabado"
          />
          <p style={{ marginTop: "1em", color: "white", zIndex: "10" }}>
            Publicado com sucesso!
          </p>
        </OverlayFinalPublish>
      )}
    </div>
  );
};

export default ProgressPublish5;
