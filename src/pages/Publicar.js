import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressPublish1 } from "../redux/publicarSlice";
import { useNavigate } from "react-router-dom";
import CustomizedSteppers from "../components/ProgressBar";
import ModalAlertaForPublish from "../components/ProgressPublish/ModalAlertaForPublish";
import HeaderPublish from "../components/Header/HeaderPublicar";
import { useSeeUserQuery } from "../redux/usersAPI";
import EliminarImage from "../assets/icons/eliminar.svg";
import Button from "../components/Button";

const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  margin-top: 2em;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-weight: 500;
  margin-bottom: 0.3em;
  font-size: 14px;
`;

const ProductFormInput = styled.input`
  padding: 0.5rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  border: none;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  max-width: 95%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 0.6em;
`;

const ImagePreview = styled.div`
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
`;

const ImagePreviewImg = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 0.8em;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 17px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
`;

const BtnProximoPublicar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 2em;
  padding-bottom: 0.5em;
`;

const AddImgInputPublish = styled.label`
  border: 1px solid #cacaca;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border-radius: 5px;
`;

const DescriptionAddImage = styled.p`
  margin-top: 0.5em;
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  height: 300px;
`;

const ProductFormInput2 = styled.textarea`
  padding: 0.5rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  border: none;
`;

const Publicar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: userData, refetch, isLoading } = useSeeUserQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (!isLoading && (!userData || !userData.id)) {
      console.log('Utilizador não realizou login --> Redirecionado para a homepage...');
      localStorage.removeItem("login");
      navigate("/", { state: { showLoginRegister: true } });
    }
  }, [userData, isLoading, navigate]);

  const [activeStep, setActiveStep] = useState(0);

  // Dados da store relativos a etapa 1 de publicar
  const { title, description, productImage, productImageURL, countChar } = useSelector(
    (state) => state.Publicar1.progressPublish1
  );

  const handleGoToProgress2 = () => {
    dispatch(
      updateProgressPublish1({
        title,
        description,
        productImage,
        productImageURL,
        countChar,
      })
    );
    navigate("/progressPublish-2");
  };

  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const limitImages = 5; // define o limite de img uploaded

  const isButtonDisabled = !title || !description || productImage.length === 0;

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);

    // verifica se o upload das img nao excede o limite definido
    if (productImage.length + newImages.length > limitImages) {
      alert(`Não pode adicionar mais de 5 imagens!`);
      return;
    }

    // converter as novas imagens para base64 e URLs de objeto
    const imagePromises = newImages.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          const base64 = reader.result;
          resolve({ base64, objectURL: URL.createObjectURL(image) });
        };
        reader.onerror = (error) => reject(error);
      });
    });

    // após todas as imagens serem convertidas para base64 e URLs de objeto
    Promise.all(imagePromises)
      .then((results) => {
        // extrair base64 e objectURL de cada imagem
        const base64Images = results.map((result) => result.base64);
        const objectURLs = results.map((result) => result.objectURL);

        // atualizar a store redux com as novas imagens em base64 e URLs de objeto
        dispatch(
          updateProgressPublish1({
            productImage: [...productImage, ...base64Images],
            productImageURL: [...productImageURL, ...objectURLs],
          })
        );
        console.log('Novo productImage:', [...productImage, ...base64Images]);
        console.log('Novo productImageURL:', [...productImageURL, ...objectURLs]);
      })
      .catch((error) => {
        console.error("Erro ao converter imagens para base64 e URLs de objeto:", error);
      });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...productImage];
    const newImageURLs = [...productImageURL];

    newImages.splice(index, 1);
    newImageURLs.splice(index, 1);

    dispatch(
      updateProgressPublish1({
        productImage: newImages,
        productImageURL: newImageURLs,
      })
    );
  };

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;

    if (inputDescription.length <= 150) {
      dispatch(
        updateProgressPublish1({
          description: inputDescription,
          countChar: inputDescription.length,
        })
      );
    }
  };

  const [fecharModal, setFecharModal] = useState(true);

  const alertHandler = () => {
    fecharModal ? setFecharModal(false) : navigate(-1);
  };

  return (
    <div>
      <HeaderPublish name="Publicar" alertHandler={alertHandler} />
      <CustomizedSteppers
        activeStep={activeStep}
        onStepChange={handleStepChange}
      />
      <ProductForm>
        <ImageUpload htmlFor="images">
          <AddImgInputPublish htmlFor="images" className="addImgInputPublish">
            <span className="colourGreenAsterisk">+</span> Adicionar Fotografias
            <span className="colourGreenAsterisk">*</span>
          </AddImgInputPublish>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            style={{
              opacity: 0,
              position: "absolute",
              zIndex: -1,
              maxWidth: "600px",
              width: "90%",
            }}
          />
          <DescriptionAddImage>Adiciona até 5 fotografias</DescriptionAddImage>

          <ImagePreviewContainer>
            {productImageURL.map((imageUrl, index) => (
              <ImagePreview key={index} className="imagePreview">
                <ImagePreviewImg
                  className="imagePreviewImg"
                  src={imageUrl}
                  alt={`Imagem da peça ${index}`}
                />
                <RemoveImageButton
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={EliminarImage} alt="eliminar_img" />
                </RemoveImageButton>
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
        </ImageUpload>

        <Label htmlFor="title">
          Título <span className="colourGreenAsterisk">*</span>
        </Label>
        <ProductFormInput2
          className="productFormInput"
          type="text"
          id="title"
          placeholder="Ex: Casaco de Pele Preto"
          style={{ fontSize: "15px" }}
          value={title}
          onChange={(e) =>
            dispatch(
              updateProgressPublish1({
                title: e.target.value,
                description,
                productImage,
                productImageURL,
                countChar,
              })
            )
          }
        />

        <Label htmlFor="description">
          Descrição <span className="colourGreenAsterisk">*</span>
          <span className="countCharDescription">{countChar}/150</span>
        </Label>
        <ProductFormInput
          className="productFormInput"
          id="description"
          placeholder="Ex: Casaco de Pele em bom estado."
          style={{ fontSize: "15px" }}
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
          data-testid="description-input"
        />

        <Label>
          <span className="colourGreenAsterisk">*</span> Campo Obrigatório
        </Label>
        <BtnProximoPublicar>
          <Button
            text="Próximo"
            onClick={handleGoToProgress2}
            disable={isButtonDisabled}
          />
        </BtnProximoPublicar>
      </ProductForm>
    </div>
  );
};

export default Publicar;
