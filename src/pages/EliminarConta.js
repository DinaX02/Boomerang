import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header'
import Modal from '../components/Modal';
import styled from "styled-components";
import Input from '../components/Input';
import { CircularProgress } from "@mui/material";
import {useDeleteUserMutation} from "../redux/usersAPI"

const EliminarConta = () => {
    const [disableBtn, setDisableBtn] = useState(true);
    const [fecharModal, setFecharModal] = useState(true);
    const [alert, setAlert] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [shown, setShown] = useState({ password: false, repeatPassword: false });
    const navigate = useNavigate();
    const [deleteUser, { isLoading }] = useDeleteUserMutation();

    const toggleEyeHandle = (id) => {
        setShown((prevShown) => ({ ...prevShown, [id]: !prevShown[id] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === repeatPassword && password) {
            try {
                const response = await deleteUser({ password }).unwrap();
                console.log('API Response:', response);
                navigate('/');
                window.location.reload();
            } catch (err) {
                console.error('Failed to delete account:', err);
            }
        } else {
            console.error('As palavras-passe não coincidem.');
        }
    };

    const alertHandler = () => {
        alert ? setFecharModal(false) : navigate(-1);
    };

    const handleEditPasswordInput = (e) => {
        setPassword(e.target.value);
        setDisableBtn(!e.target.value);
        setAlert(true);
    };

    const handleRepeatPasswordInput = (e) => {
        setRepeatPassword(e.target.value);
    };

    const passwordsMatch = password === repeatPassword && password;

    return (
        <>
            <Header name="Apagar Conta" alertHandler={alertHandler} />
            <EditProfileStyle>
                <Container>
                    <ParagraphIntroAdress>
                        Para apagares a tua conta, terás que inserir a tua palavra-passe!
                    </ParagraphIntroAdress>
                </Container>

                <form onSubmit={handleSubmit}>
                    <div className="inputsContainer">
                        <div className="inputContainer">
                            <div className="inputTitleContainer">
                                <label htmlFor="password" className="inputTitle">
                                    Palavra-passe
                                </label>
                            </div>
                            <Input
                                placeholder="Palavra-passe"
                                value={password}
                                onChange={handleEditPasswordInput}
                                type={shown.password ? 'text' : 'password'}
                                shown={shown.password}
                                isPassword={true}
                                toggleEyeHandle={() => toggleEyeHandle('password')}
                                matchPassword={passwordsMatch}
                            />
                        </div>
                        <div className="inputContainer">
                            <div className="inputTitleContainer">
                                <label htmlFor="repeatPassword" className="inputTitle">
                                    Repetir Palavra-passe
                                </label>
                            </div>
                            <Input
                                placeholder="Repetir Palavra-passe"
                                value={repeatPassword}
                                onChange={handleRepeatPasswordInput}
                                type={shown.repeatPassword ? 'text' : 'password'}
                                shown={shown.repeatPassword}
                                isPassword={true}
                                toggleEyeHandle={() => toggleEyeHandle('repeatPassword')}
                                matchPassword={passwordsMatch}
                            />
                        </div>
                    </div>
                    <Label htmlFor="description">
                        <span className="colourGreenAsterisk">*</span> Campo Obrigatório
                    </Label>

                    <div className="btnAtualizarDados">
                        <button className="buttonAtualizar" disabled={!password || !repeatPassword || isLoading} type="submit">
                            {isLoading ? <CircularProgress color="inherit" size={24} />: 'Concluir'}
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
  
  export default EliminarConta;