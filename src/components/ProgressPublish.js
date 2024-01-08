import React, { useState } from "react";
import EliminarImage from "../assets/eliminar.svg";
import Button from "./Button";
import "./components.css";

const ProgressPublish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [countChar, setCountChar] = useState(0);
  const [paragraphAddFoto, setParagraphAddFoto] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione lógica para enviar os dados, se necessário
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 5) {
      alert("Podes adicionar até 5 imagens");
      return;
    }

    setImages([...images, ...Array.from(e.target.files)]);
    setParagraphAddFoto(false);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;
    if (inputDescription.length <= 150) {
      setDescription(inputDescription);
      setCountChar(inputDescription.length);
    }
  };

  return (
    <form className="productForm" onSubmit={handleSubmit}>
      <div className="imageUpload" htmlFor="images">
        <label htmlFor="images" className="addImgInputPublish">
          <span className="colourGreenAsterisk">+</span> Adicionar Fotografias
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          style={{ opacity: 0, position: "absolute", zIndex: -1 }}
        />

        {paragraphAddFoto && (
          <p>Adiciona até 5 fotografias</p>
        )}

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
        onChange={(e) => setTitle(e.target.value)}
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
        {" "}
        <span className="colourGreenAsterisk">*</span> Campo Obrigatório
      </label>
      <div className="btnProximoPublicar">
        <Button text="Próximo" />
      </div>
    </form>
  );
};

export default ProgressPublish;