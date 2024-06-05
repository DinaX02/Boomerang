import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Header from '../components/Header/Header';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { useEditPasswordMutation } from "../redux/usersAPI";

const EditPassword = () => {
  const [disableBtn, setDisableBtn] = useState(true);
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [shown, setShown] = useState({ password: false, repeatPassword: false, newPassword: false });
  const navigate = useNavigate();
  const [editPassword, { isLoading }] = useEditPasswordMutation();

  const toggleEyeHandle = (id) => {
      setShown((prevShown) => ({ ...prevShown, [id]: !prevShown[id] }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (password && newPassword && newPassword === repeatPassword && password !== newPassword) {
          try {
              console.log('A enviar para a API:', { password, newPassword });
              const response = await editPassword({ password, newPassword }).unwrap();
              console.log('API Response:', response);
              navigate('/');
          } catch (err) {
              console.error('Failed to change password:', err);
          }
      } else {
          if (password === newPassword) {
              console.error('A nova palavra-passe deve ser diferente da palavra-passe atual.');
          } else {
              console.error('As palavras-passe não coincidem.');
          }
      }
  };

  const alertHandler = () => {
      alert ? setFecharModal(false) : navigate(-1);
  };

  const handlePasswordInput = (e) => {
      setPassword(e.target.value);
      setAlert(true);
  };

  const handleNewPasswordInput = (e) => {
      setNewPassword(e.target.value);
  };

  const handleRepeatPasswordInput = (e) => {
      setRepeatPassword(e.target.value);
  };

  useEffect(() => {
      const isValid =
          password &&
          newPassword &&
          newPassword.length > 6 &&
          newPassword !== password &&
          newPassword === repeatPassword;
      setDisableBtn(!isValid);
  }, [password, newPassword, repeatPassword]);

  return (
      <>
          <Header name="Alterar Palavra-passe" alertHandler={alertHandler} />
          <EditProfileStyle>
              <Container>
                  <ParagraphIntroAdress>
                      Para alterares a tua palavra-passe, terás que inserir a tua palavra-passe atual primeiro!
                  </ParagraphIntroAdress>
              </Container>

              <form onSubmit={handleSubmit}>
                  <div className="inputsContainer">
                      <div className="inputContainer">
                          <div className="inputTitleContainer">
                              <label htmlFor="password" className="inputTitle">
                                  Palavra-passe atual
                              </label>
                          </div>
                          <Input
                              placeholder="Palavra-passe"
                              value={password}
                              onChange={handlePasswordInput}
                              type={shown.password ? 'text' : 'password'}
                              shown={shown.password}
                              isPassword={true}
                              toggleEyeHandle={() => toggleEyeHandle('password')}
                          />
                      </div>
                      <div className="inputContainer">
                          <div className="inputTitleContainer">
                              <label htmlFor="newPassword" className="inputTitle">
                                  Nova Palavra-passe
                              </label>
                          </div>
                          <Input
                              placeholder="Nova Palavra-passe"
                              value={newPassword}
                              onChange={handleNewPasswordInput}
                              type={shown.newPassword ? 'text' : 'password'}
                              shown={shown.newPassword}
                              isPassword={true}
                              toggleEyeHandle={() => toggleEyeHandle('newPassword')}
                          />
                      </div>
                      <div className="inputContainer">
                          <div className="inputTitleContainer">
                              <label htmlFor="repeatPassword" className="inputTitle">
                                  Repita a Nova Palavra-passe
                              </label>
                          </div>
                          <Input
                              placeholder="Repita a Nova Palavra-passe"
                              value={repeatPassword}
                              onChange={handleRepeatPasswordInput}
                              type={shown.repeatPassword ? 'text' : 'password'}
                              shown={shown.repeatPassword}
                              isPassword={true}
                              toggleEyeHandle={() => toggleEyeHandle('repeatPassword')}
                          />
                      </div>
                  </div>
                  <Label htmlFor="description">
                      <span className="colourGreenAsterisk">*</span> Campo Obrigatório
                  </Label>

                  <div className="btnAtualizarDados">
                      <button className="buttonAtualizar" disabled={disableBtn || isLoading} type="submit">
                          {isLoading ? 'Loading...' : 'Concluir'}
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

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.3em;
  font-size: 14px;
  padding: 0 24px;
`;

const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

const ParagraphIntroAdress = styled.p`
  color: rgb(84, 84, 84);
  margin-top: 2em;
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const EditProfileStyle = styled.div`
  margin: auto;

  .imagemPerfil {
    width: 84px;
    height: 84px;
    object-fit: cover;
    border-radius: 50%;
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
  }
  .countCharBiografia {
    font-size: 12px;
    color: #888;
    margin-left: 9px;
  }
  .buttonediticon {
    border: none;
    background-color: transparent;
  }

  .buttonAtualizar {
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

  .buttonEdit {
    border: none;
    margin: 0;
    padding: 0;
    background-color: transparent;
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

export default EditPassword;