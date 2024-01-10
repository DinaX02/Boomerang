import React from "react";
import EliminarImage from "../assets/eliminar.svg";
import Button from "./Button";
import "./components.css";
//import ProgressBar from "./ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { updateProgressPublish1 } from "../redux/publicarSlice";
import { useNavigate } from "react-router-dom";

const ProgressPublish1 = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Dados da store relativos a etapa 1 de publicar
  const { title, description, images, countChar, paragraphAddFoto } =
    useSelector((state) => state.Publicar1.progressPublish1);

  const handleGoToProgress2 = () => {
    // console.log("cliquei no btn")
    dispatch(
      updateProgressPublish1({
        title,
        description,
        images,
        countChar,
        paragraphAddFoto,
      })
    );
    navigate("/progressPublish-2");
  };

  const limit_images = 5;   // define o limite de img uploaded

  const isButtonDisable = !title || !description || images.length === 0;

  const handleImageChange = (e) => {
    const newImages = Array.from(e.target.files);
  // verifica se o uplload das img nao excede o limite definido
    if (images.length + newImages.length > limit_images) {
      alert(`Não pode adicionar mais de 5 imagens!`);
      return;
    }

    // atualizar a store redux com as novas img uploaded
    dispatch(
      updateProgressPublish1({
        images: [...images, ...newImages],
        paragraphAddFoto: false,
      })
    );
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    // atualizar a store redux com as modificacoes feitas ao array das img
    dispatch(updateProgressPublish1({ images: newImages }));
  };

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value; // verificar se a descricao esta dentro do limite definido
    if (inputDescription.length <= 150) {
      // atualizar a store redux com descriçao e no. de charc
      dispatch(
        updateProgressPublish1({
          description: inputDescription,
          countChar: inputDescription.length,
        })
      );
    }
  };

  return (
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

        {paragraphAddFoto && <p>Adiciona até 5 fotografias</p>}

        <div className="imagesPreviewContainer">
          {images.map((image, index) => (
            <div key={index} className="imagePreview">
              <img
                className="imagePreviewImg"
                src={URL.createObjectURL(image)}
                alt={image.name}
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
        onChange={(e) => dispatch(updateProgressPublish1({ title: e.target.value, description, images, countChar, paragraphAddFoto }))}
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
        {/* <Button text="Próximo" onClick={handleGoToProgress2}disable={isButtonDisable} /> */}
        <button onClick={handleGoToProgress2}>próximo</button>
      </div>
    </div>
  );
};

export default ProgressPublish1;
