import React, {useState} from "react";
import Header from "../components/Header/Header";
import EliminarImage from "../assets/eliminar.svg";
import Button from "../components/Button";
import "../components/components.css";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressPublish1 } from "../redux/publicarSlice";
import { useNavigate } from "react-router-dom";
import CustomizedSteppers from "../components/ProgressBar";

const Publicar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  // Dados da store relativos a etapa 1 de publicar
  const { title, description, imageUrls, countChar } = useSelector(
    (state) => state.Publicar1.progressPublish1
  );

  const handleGoToProgress2 = () => {
    // console.log("cliquei no btn")
    dispatch(
      updateProgressPublish1({
        title,
        description,
        imageUrls,
        countChar,
      })
    );
    navigate("/progressPublish-2");
  };

  const handleStepChange = (newStep) => { // teste do stepper
    setActiveStep(newStep);
  };

  const limit_images = 5; // define o limite de img uploaded

  const isButtonDisable = !title || !description || imageUrls.length === 0;

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
    // verifica se o upload das img nao excede o limite definido
    if (imageUrls.length + newImages.length > limit_images) {
      alert(`Não pode adicionar mais de 5 imagens!`);
      return;
    }

    // atualizar a store redux com as novas img uploaded
    const newImageUrls = newImages.map((image) => URL.createObjectURL(image));

    // atualizar a store redux com as modificacoes feitas ao array das img
    dispatch(
      updateProgressPublish1({
        imageUrls: [...imageUrls, ...newImageUrls],
      })
    );
  };

  const handleRemoveImage = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);

    // Atualizar a store redux com as modificações feitas ao array de URLs das imagens
    dispatch(updateProgressPublish1({ imageUrls: newImageUrls }));
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

  return (
    <div>
      <Header name="Publicar / Etapa 1 de 5" />
      <CustomizedSteppers  activeStep={activeStep} onStepChange={handleStepChange} />
      <div className="productForm">
        <div className="imageUpload" htmlFor="images">
          <label htmlFor="images" className="addImgInputPublish">
            <span className="colourGreenAsterisk">+</span> Adicionar Fotografias
            <span className="colourGreenAsterisk">*</span>
          </label>
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

          <p>Adiciona até 5 fotografias</p>

          <div className="imagesPreviewContainer">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="imagePreview">
                <img
                  className="imagePreviewImg"
                  src={imageUrl}
                  alt={`Imagem da peça ${index}`}
                />
                <button
                  type="button"
                  className="removeImageButton"
                  onClick={() => handleRemoveImage(index)}
                >
                  <img src={EliminarImage} alt="eliminar_img" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <label htmlFor="title">
          Título <span className="colourGreenAsterisk">*</span>
        </label>
        <input
          className="productFormInput"
          type="text"
          id="title"
          placeholder="Ex: Casaco de Pele Preto"
          value={title}
          onChange={(e) =>
            dispatch(
              updateProgressPublish1({
                title: e.target.value,
                description,
                imageUrls,
                countChar,
              })
            )
          }
        />

        <label htmlFor="description">
          Descrição <span className="colourGreenAsterisk">*</span>
          <span className="countCharDescription">{countChar}/150</span>
        </label>
        <textarea
          className="productFormInput"
          id="description"
          placeholder="Ex: Casaco de Pele em bom estado. Usada poucas vezes."
          value={description}
          onChange={(e) => handleDescriptionChange(e)}
        />

        <label htmlFor="description">
          <span className="colourGreenAsterisk">*</span> Campo Obrigatório
        </label>
        <div className="btnProximoPublicar">
          <Button
            text="Próximo"
            onClick={handleGoToProgress2}
            disable={isButtonDisable}
          />
        </div>
      </div>
    </div>
  );
};

export default Publicar;
