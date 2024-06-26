import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserUnknownIcon from "../assets/icons/user_unknown.svg";
import EditarPerfilIcon from "../assets/icons/editar_perfil.svg";
import EditarInputIcon from "../assets/icons/editarInput.svg";
import Header from "../components/Header/Header";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { CircularProgress } from "@mui/material";
import { useSeeUserQuery, useEditUserMutation } from "../redux/usersAPI";
import colors from "./../assets/colors";

const EditProfile = () => {
  const { data: userData, isLoading } = useSeeUserQuery();
  const navigate = useNavigate();
  const [disableUsername, setDisableUsername] = useState(true);
  const [disableBiografia, setDisableBiografia] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  const [biografia, setBiografia] = useState("");
  const [countChar, setCountChar] = useState(0);
  const [imagePerfil, setImagePerfil] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editUser] = useEditUserMutation();

  // States to store original values
  const [originalUsername, setOriginalUsername] = useState("");
  const [originalBiografia, setOriginalBiografia] = useState("");

  useEffect(() => {
    if (userData && userData.bio) {
      setBiografia(userData.bio);
      setOriginalBiografia(userData.bio);
      setCountChar(userData.bio.length);
    }
    if (userData && userData.username) {
      setUsername(userData.username);
      setOriginalUsername(userData.username);
    }
    if (userData && userData.profileImage) {
      setPreviewImage(userData.profileImage);
    }
  }, [userData]);

  const handleBiografiaChange = (e) => {
    const inputBiografia = e.target.value;
    if (inputBiografia.length <= 150) {
      setBiografia(inputBiografia);
      setCountChar(inputBiografia.length);
      setDisableBtn(
        inputBiografia === originalBiografia && username === originalUsername
      );
    }
  };

  const handleEditUsernameInput = (e) => {
    e.preventDefault();
    setDisableUsername(false);
    setAlert(true);
  };

  const handleEditBiografiaInput = (e) => {
    e.preventDefault();
    setDisableBiografia(false);
    setAlert(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setDisableBtn(
      e.target.value === originalUsername && biografia === originalBiografia
    );
  };

  // const uploadProfileImage = async (image) => {
  //   const formData = new FormData();
  //   formData.append("profileImage", image);

  //   try {
  //     const response = await fetch("http://localhost:3000/user", {
  //       method: "PUT",
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("Erro ao fazer upload da imagem de perfil");
  //     }

  //     const data = await response.json();
  //     return data.imageUrl;
  //   } catch (error) {
  //     console.error("Erro ao fazer upload da imagem:", error);
  //     throw error;
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const formData = new FormData();
  //     formData.append("username", username);
  //     formData.append("bio", biografia);

  //     if (imagePerfil) {
  //       formData.append("profileImage", imagePerfil);
  //     }

  //     console.log("Username:", username);
  //     console.log("Biografia:", biografia);
  //     console.log("Profile Image:", imagePerfil);
  //     console.log("Form data:", formData);

  //     const response = await editUser(formData);
  //     console.log("User updated successfully:", response);
  //     navigate("/profile-page");
  //   } catch (error) {
  //     console.error("Error editing user:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("bio", biografia);

      if (imagePerfil) {
        formData.append("profileImage", imagePerfil);
      }

      console.log("Form data:", formData);

      const response = await editUser(formData).unwrap();
      console.log("User updated successfully:", response);
      navigate("/profile-page");
    } catch (error) {
      console.error("Error editing user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleImageChange = (e) => {
  //   const newImage = e.target.files[0];
  //   console.log("New image selected:", newImage);
  //   setImagePerfil(newImage); // This sets the state correctly

  //   // Update preview image
  //   setPreviewImage(URL.createObjectURL(newImage));

  //   // Enable submit button and set alert
  //   setDisableBtn(false);
  //   setAlert(true);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePerfil(file);
      setPreviewImage(URL.createObjectURL(file));
      setDisableBtn(false);
      setAlert(true);
    }
  };

  const renderImage = () => {
    return (
      <img
        className="imagemPerfil"
        src={previewImage || UserUnknownIcon}
        alt="imagem de perfil"
        style={{ border: `1px solid ${colors.cinzaEscuro}` }}
      />
    );
  };

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  };

  if (isLoading) {
    return (
      <Loader>
        <CircularProgress className="loader" color="success" />
      </Loader>
    );
  }

  return (
    <>
      <Header name="Editar Perfil" alertHandler={alertHandler} />
      <EditProfileStyle>
        <form onSubmit={handleSubmit}>
          <div className="containerUserEdit">
            <label htmlFor="images">
              <div className="containerUserEditContent">
                {renderImage()}
                <img
                  className="editarPerfilIcon"
                  src={EditarPerfilIcon}
                  alt="icon_editar_perfil"
                />
              </div>
            </label>
          </div>
          <input
            id="images"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{
              opacity: 0,
              position: "absolute",
              display: "block",
              zIndex: -1,
              maxWidth: "600px",
              width: "90%",
            }}
          />
          <div className="inputsContainer">
            <div className="inputContainer">
              <div className="inputTitleContainer">
                <label htmlFor="username" className="inputTitle">
                  Nome de utilizador
                </label>
                <button
                  className="buttonEdit"
                  type="button"
                  onClick={handleEditUsernameInput}
                >
                  <img
                    className="editarInputIcon"
                    src={EditarInputIcon}
                    alt="icon_editar_input"
                  />
                </button>
              </div>
              <Input
                obrigatorio={true}
                placeholder=""
                value={username}
                disabled={disableUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="inputContainer">
              <div className="inputTitleContainer" style={{ marginTop: "0" }}>
                <label htmlFor="biografia" className="inputTitle">
                  Biografia
                </label>
                <button
                  className="buttonEdit"
                  type="button"
                  onClick={handleEditBiografiaInput}
                >
                  <img
                    className="editarInputIcon"
                    src={EditarInputIcon}
                    alt="icon_editar_input"
                  />
                </button>
                <span className="countCharBiografia">{countChar}/150</span>
              </div>
              <textarea
                className="biografiaInput input"
                id="biografia"
                value={biografia}
                maxLength={150}
                onChange={handleBiografiaChange}
                disabled={disableBiografia}
              />
            </div>
          </div>
          <div className="btnAtualizarDados">
            <button
              className="buttonAtualizar"
              disabled={disableBtn || isSubmitting}
              type="submit"
            >
              {isSubmitting ? (
                <CircularProgress color="inherit" size={24} />
              ) : (
                "Atualizar perfil"
              )}
            </button>
          </div>
        </form>

        <Modal
          fecharModal={fecharModal}
          setFecharModal={setFecharModal}
          alert={alert}
          message="Se retrocederes agora, vais perder todas as alterações que efetuaste. Descartar edições?"
        />
      </EditProfileStyle>
    </>
  );
};

const EditProfileStyle = styled.div`
  /* padding: 0 24px; */
  margin: auto;
  display: flex;
  max-width: 600px;
  justify-content: center;

  .imagemPerfil {
    width: 84px;
    height: 84px;
    object-fit: cover;
    border-radius: 50%;
    // border: 2px solid #343541;
  }

  .containerUserEdit {
    text-align: center;
    margin-top: 48px;
  }

  .containerUserEditContent {
    display: inline-block;
    position: relative;
  }
  .editarPerfilIcon {
    position: absolute;
    right: 0;
    width: 18px;
  }

  .input {
    padding: 0.5rem;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
    border: none;
    font-family: Montserrat;
    font-size: 14px;
    width: 100%;
  }
  .inputTitle {
    font-size: 13px;
    font-weight: 500;
  }
  .inputTitleContainer {
    padding: 0 24px;
    margin-top: 1rem;
    display: block;
  }

  .editarInputIcon {
    position: relative;
    bottom: 3px;
    margin-left: 9px;
  }

  .inputsContainer {
    display: flex;
    flex-wrap: wrap;
    // width: calc(100% - 48px);
    width: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .inputContainer {
    width: 100%;
  }

  .btnAtualizarDados {
    margin-top: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .biografiaInput {
    border: none;
    width: calc(100% - 48px);
    margin-left: 24px;
    font-size: 14px;
    padding-bottom: 0.5rem;
    height: 110px;
  }
  .countCharBiografia {
    font-size: 12px;
    color: #888;
    margin-left: 9px;
  }

  .textErroObrigatorio {
    margin-bottom: 0;
  }

  .buttonEdit {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  .buttonAtualizar {
    background-color: ${colors.cinzaEscuro};
    color: white !important;
    font-weight: bold;
    font-size: 15px;
    width: 144px;
    height: 36px;
    border-radius: 5px;
    border: 1px transparent;
    font-family: Montserrat;
    cursor: pointer;
  }

  .buttonAtualizar:disabled {
    background-color: rgb(202, 202, 202);
    cursor: not-allowed;
  }

  .buttonAtualizar:not(:disabled):active {
    background-color: #00c17c;
  }

  @media only screen and (min-width: 600px) {
    .input {
      font-size: 17px;
    }
    .inputTitle {
      font-size: 16px;
    }
  }
`;

const Loader = styled.div`
  .loader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 40px;
    height: 40px;
  }
`;

export default EditProfile;
