import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import Button from '../components/Button';
import UserUnknownIcon from '../assets/icons/user_unknown.svg';
import EditarPerfilIcon from '../assets/icons/editar_perfil.svg';
import EditarInputIcon from '../assets/icons/editarInput.svg';
import Header from '../components/Header/Header';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { useSeeUserQuery, useEditUserMutation } from "../redux/usersAPI";

const EditProfile = () => {
  const { data: userData, isLoading } = useSeeUserQuery();
  const navigate = useNavigate();
  const [disableUsername, setDisableUsername] = useState(true);
  const [disableBiografia, setDisableBiografia] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  const [biografia, setBiografia] = useState("");
  const [countChar, setCountChar] = useState(0);
  const [imagePerfil, setImagePerfil] = useState([]);
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState("");

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
  }, [userData]);

  const [editUser] = useEditUserMutation();

  const handleBiografiaChange = (e) => {
    const inputBiografia = e.target.value;
    if (inputBiografia.length <= 150) {
      setBiografia(inputBiografia);
      setCountChar(inputBiografia.length);
      setDisableBtn(inputBiografia === originalBiografia && username === originalUsername);
    }
  };

  const handleEditUsernameInput = (e) => {
    e.preventDefault();  // Evitar a submissão do formulário
    setDisableUsername(false);
    setAlert(true);
  };

  const handleEditBiografiaInput = (e) => {
    e.preventDefault();  // Evitar a submissão do formulário
    setDisableBiografia(false);
    setAlert(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setDisableBtn(e.target.value === originalUsername && biografia === originalBiografia);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBio = biografia !== userData.bio ? biografia : userData.bio;

      console.log("Dados a serem enviados para edição:", {
        bio: newBio,
        username,
        name: userData.name,
        email: userData.email,
        gender: userData.gender
      });

      await editUser({
        bio: newBio,
        username,
        name: userData.name,
        email: userData.email,
        gender: userData.gender
      });
      navigate('/profile-page');
      console.log("Perfil editado com sucesso!");
    } catch (error) {
      console.error("Erro ao editar perfil:", error);
    }
  };

  const handleImageChange = (e) => {
    const newImages = e.target.files;
    setImagePerfil([...imagePerfil, ...newImages]);
    setDisableBtn(false);
    setAlert(true);
  };

  const renderImage = () => {
    const firstImage = imagePerfil.length > 0 ? imagePerfil[0] : null;
    return (
      <img
        className='imagemPerfil'
        src={firstImage ? URL.createObjectURL(firstImage) : UserUnknownIcon}
        alt="imagem de perfil"
        style={{ border: '1px solid #343541' }}
      />
    );
  };

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  };

  return (
    <>
      <Header name="Editar Perfil" alertHandler={alertHandler} />
      <EditProfileStyle>
        <form onSubmit={handleSubmit}>
          <div className="containerUserEdit">
            <label htmlFor="images">
              <div className='containerUserEditContent'>
                {renderImage()}
                <img className="editarPerfilIcon" src={EditarPerfilIcon} alt="icon_editar_perfil" />
              </div>
            </label>
          </div>
          <input
            id="images"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ opacity: 0, position: "absolute", display: "block", zIndex: -1, maxWidth: "600px", width: "90%" }}
          />
          <div className='inputsContainer'>
            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="username" className='inputTitle'>
                  Nome de utilizador
                </label>
                <button className="buttonEdit" type="button" onClick={handleEditUsernameInput}>
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" />
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
            
            <div className='inputContainer'>
              <div className='inputTitleContainer' style={{ marginTop: "0" }}>
                <label htmlFor="biografia" className='inputTitle'>
                  Biografia
                </label>
                <button className="buttonEdit" type="button" onClick={handleEditBiografiaInput} >
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" />
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

          <div className='btnAtualizarDados'>
            <button className='buttonAtualizar'
              disabled={disableBtn}
              type="submit"
            >Atualizar perfil</button>
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

        .editarInputIcon{
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
      .countCharBiografia{
        font-size: 12px;
        color: #888;
        margin-left: 9px;
      }

      .textErroObrigatorio{
        margin-bottom: 0;
      }

      .buttonEdit{
        border: none;
        margin: 0;
        padding:0;
        background-color: transparent;
      }

      .buttonAtualizar{
        background-color: #343541;
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
        background-color: #00C17C;
      }
      
      @media only screen and (min-width: 600px) {
        .input {
          font-size: 17px;
        }
          .inputTitle {
            font-size: 16px;
        }
      }
`

export default EditProfile;