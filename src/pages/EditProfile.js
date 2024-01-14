import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Button from '../components/Button';
import UserUnknownIcon from '../assets/icons/user_unknown.svg';
import EditarPerfilIcon from '../assets/icons/editar_perfil.svg';
import EditarInputIcon from '../assets/icons/editarInput.svg';
import Header from '../components/Header/Header';
import Modal from '../components/Modal'

const EditProfile = () => {
  const [email, setEmail] = useState("mariacarmo1985@gmail.com");
  const [username, setUsername] = useState("mariacarmo");
  const [password, setPassword] = useState("********");
  const [maskedPassword, setMaskedPassword] = useState("********");
  const [disableEmail, setDisableEmail] = useState(true);
  const [disableUsername, setDisableUsername] = useState(true);
  const [disableBiografia, setDisableBiografia] = useState(true);
  const [disablePassword, setDisablePassword] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  const [biografia, setBiografia] = useState("Sou apaixonada por moda e tenho sempre em conta opções mais sustentáveis no meu dia-a-dia.");
  const [countChar, setCountChar] = useState(biografia.length);
  const [imagePerfil, setImagePerfil] = useState([]);
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleBiografiaChange = (e) => {
    const inputBiografia = e.target.value;

    if (inputBiografia.length <= 150) {
      setBiografia(inputBiografia);
      setCountChar(inputBiografia.length);
    }
  }

  const handleClick = () => {
    navigate('/profile-page');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleImageChange = (e) => {
    const newImages = e.target.files;
    setImagePerfil([...imagePerfil, ...newImages]);
    console.log(newImages);
    setDisableBtn(false);
    setAlert(true);
  }

  const renderImage = () => {
    const firstImage = imagePerfil.length > 0 ? imagePerfil[0] : null;
    return (
      <img
        className='imagemPerfil'
        src={firstImage ? URL.createObjectURL(firstImage) : UserUnknownIcon}
        alt="imagem de perfil"
        style={!firstImage ? null : { border: '1px solid #343541' }}
      />
    );
  };

  const handleEditEmailInput = () => {
    setDisableEmail(false);
    setDisableBtn(false);
    setAlert(true);
  }
  const handleEditUsernameInput = () => {
    setDisableUsername(false);
    setDisableBtn(false);
    setAlert(true);
  }
  const handleEditBiografiaInput = () => {
    setDisableBiografia(false);
    setDisableBtn(false);
    setAlert(true);
  }
  const handleEditPasswordInput = () => {
    setDisablePassword(false);
    setDisableBtn(false);
    setAlert(true);
  }

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  }

  return (
    <>
      <Header name="Editar Perfil" alertHandler={alertHandler} />
      <EditProfileStyle>
        <form onSubmit={handleSubmit}>
          <div className="containerUserEdit">
            <label htmlFor="images">
              <div className='containerUserEditContent'>
                {/* <img className="userUnknownIcon" src={UserUnknownIcon} alt="icon_user_unknown" /> */}
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
          {/* <div className="imagePerfil">
      {renderImage()}
    </div> */}

          <div className='inputsContainer'>
            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="email" className='inputTitle'>
                  E-mail
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" onClick={handleEditEmailInput} />
                </label>
              </div>
              <input
                className="input"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disableEmail}
              />
            </div>


            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="username" className='inputTitle'>
                  Nome de utilizador
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" onClick={handleEditUsernameInput} />
                </label>
              </div>
              <input
                className="input"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={disableUsername}
              />
            </div>
            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="biografia" className='inputTitle'>
                  Biografia
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" onClick={handleEditBiografiaInput} />
                  <span className="countCharBiografia">{countChar}/150</span>
                </label>
              </div>
              <textarea
                className="biografiaInput input"
                id="biografia"
                value={biografia}
                maxLength={150}
                onChange={(e) => handleBiografiaChange(e)}
                disabled={disableBiografia}
              />
            </div>

            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="password" className='inputTitle'>
                  Palavra-passe
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" onClick={handleEditPasswordInput} />
                </label>
              </div>
              <input
                className="input"
                type="text"
                id="password"
                value={maskedPassword}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setMaskedPassword('*'.repeat(password.length));
                }}
                disabled={disablePassword}
              />
            </div>
          </div>
          <div className='btnAtualizarDados'>
            <Button
              onClick={handleClick}
              text="Atualizar dados"
              disable={disableBtn}></Button>
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
  )
}

const EditProfileStyle = styled.div`
          margin: 0 24px;
          display: flex;

        .imagemPerfil {
          width: 84px;
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
          width: 100%;
          font-size: 14px;
          padding-bottom: 0.5rem;
      }
      .countCharBiografia{
        font-size: 12px;
        color: #888;
        margin-left: 9px;
      }
      @media only screen and (min-width: 768px) {
        width: 672px;
        margin: auto; 
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

export default EditProfile
