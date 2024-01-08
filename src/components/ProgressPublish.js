import React, { useState } from "react";
import EliminarImage from "../assets/eliminar.svg"
import Button from "./Button";
import "./components.css";

const ProgressPublish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
//   const [selectedFileName, setSelectedFileName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 5) {
      alert("Podes adicionar até 5 imagens");
      return;
    }

    setImages([...images, ...Array.from(e.target.files)]);

    // const fileName = e.target.files[0] ? e.target.files[0].name : "";
    // setSelectedFileName(fileName);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <form className="productForm" onSubmit={handleSubmit}>

      <div className="imageUpload" htmlFor="images">
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>

      {/* Exibe o nome do arquivo selecionado */}
      {/* {selectedFileName && <p>{selectedFileName}</p>} */}

      <label htmlFor="title">Título <span className="corAsteriscoObrigatorio">*</span></label>
      <input
        className="productFormInput"
        type="text"
        id="title"
        placeholder="Ex: Casaco de Pele Preto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Descrição <span className="corAsteriscoObrigatorio">*</span></label>
      <textarea
        className="productFormInput"
        id="description"
        placeholder="Ex: Casaco de Pele em bom estado. Usada poucas vezes."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

<div className="imagesPreviewContainer">
  {images.map((image, index) => (
    <div key={index} className="imagePreview">
      <img className="imagePreviewImg" src={URL.createObjectURL(image)} alt={image.name} />
      <button
              type="button"
              className="removeImageButton"
              onClick={() => handleRemoveImage(index)}
            >
            <img src={EliminarImage} alt="eliminar_img"/>
       </button>
    </div>
  ))}
</div>
<label htmlFor="description"> <span className="corAsteriscoObrigatorio">*</span> Campo Obrigatório</label>
<div className="btnProximoPublicar">
      <Button text="Próximo"/>
      </div>
    </form>
  );
};

export default ProgressPublish;