import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Draggable from "react-draggable";
import styled from "styled-components";
import Header from '../components/Header/Header';
import Input from '../components/Input';
import Modal from '../components/Modal';
import ButtonForOpenBottomSheetSignUp from "../components/ButtonForOpenBottomSheetSignUp";
// import Button from '../components/Button';
import BottomSheetGender from '../components/BottomSheets/BottomSheetGender';
import { useRegisterUserMutation } from '../redux/usersAPI';
import { CircularProgress } from "@mui/material";
import ModalTermos from '../components/ModalTermos';

const SignUpPage = () => {
  const [inputNomeValue, setInputNomeValue] = useState('');
  const [inputApelidoValue, setInputApelidoValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputNomeUtilizadorValue, setInputNomeUtilizadorValue] = useState('');
  const [inputPassValue, setInputPassValue] = useState('');
  const [inputRepetirPassValue, setInputRepetirPassValue] = useState('');
  const [alert, setAlert] = useState(false);
  const [fecharModal, setFecharModal] = useState(true);
  const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [btnGeneroName, setBtnGeneroName] = useState('Género');
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(false);
  const [shown, setShown] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [erroObrigatorio, setErroObrigatorio] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const bottomSheetRef = useRef(null);

  const navigate = useNavigate();
  const [registerUser, { isLoading}] = useRegisterUserMutation();

  const handleNomeChange = (e) => {
    setInputNomeValue(e.target.value);
    setAlert(true);
  };

  const handleApelidoChange = (e) => {
    setInputApelidoValue(e.target.value);
    setAlert(true);
  };

  const handleEmailChange = (e) => {
    setInputEmailValue(e.target.value);
    setAlert(true);
  };

  const handleNomeUtilizadorChange = (e) => {
    setInputNomeUtilizadorValue(e.target.value);
    setAlert(true);
  };

  const handlePassChange = (e) => {
    setInputPassValue(e.target.value);
    if (e.target.value !== inputRepetirPassValue) {
      setMatchPassword(false);
      setErroObrigatorio(true);
    } else {
      setMatchPassword(true);
      setErroObrigatorio(false);
    }
    setAlert(true);
  };

  const handleRepetirPassChange = (e) => {
    setInputRepetirPassValue(e.target.value);
    if (inputPassValue !== e.target.value) {
      setMatchPassword(false);
      setErroObrigatorio(true);
    } else {
      setMatchPassword(true);
      setErroObrigatorio(false);
    }
    setAlert(true);
  };

  const alertHandler = () => {
    alert ? setFecharModal(false) : navigate(-1);
  };

  const handleToggleBottomSheet = () => {
    setBottomSheetOpen(!bottomSheetOpen);
  };

  useEffect(() => {
    const camposPreenchidos =
      inputNomeValue.trim() !== '' &&
      inputApelidoValue.trim() !== '' &&
      inputEmailValue.trim() !== '' &&
      inputNomeUtilizadorValue.trim() !== '' &&
      inputPassValue.trim() !== '' &&
      inputRepetirPassValue.trim() !== '';
    setTodosCamposPreenchidos(camposPreenchidos);
  }, [
    inputNomeValue,
    inputApelidoValue,
    inputEmailValue,
    inputNomeUtilizadorValue,
    inputPassValue,
    inputRepetirPassValue
  ]);

  const handleTermosChange = (e) => {
    setTermosAceitos(e.target.checked);
  };

  const handleOptionSelect = (option) => {
    setBtnGeneroName(option);
    setBottomSheetOpen(false);
    setAlert(true);
    setOpcaoSelecionada(true);
  };

  const handleClickDrag = () => {
    setBottomSheetOpen(false);
  };

  const toggleEyeHandle = (id) => {
    setShown((prevShown) => ({ ...prevShown, [id]: !prevShown[id] }));
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    if (todosCamposPreenchidos && termosAceitos && matchPassword) {
      try {
        const response = await registerUser({
          username: inputNomeUtilizadorValue,
          name: `${inputNomeValue} ${inputApelidoValue}`,
          email: inputEmailValue,
          gender: btnGeneroName,
          password: inputPassValue,
        });
        if (response.error) {
          setErrorMessages(response.error.message);
        } else {
          navigate('/');
        }
      } catch (err) {
        console.error('Failed to register:', err);
        setErrorMessages(['Erro ao processar sua solicitação. Por favor, tente novamente.']);
      }
    }
  };

  const handleOpenTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  return (
    <RegistarStyle>
      <Header name="Criar conta" alertHandler={alertHandler} />
      <form className='formRegistar' onSubmit={handleRegisterClick}>
        <Input
          obrigatorio={true}
          placeholder="Nome"
          value={inputNomeValue}
          onChange={handleNomeChange}
        />
        <Input
          obrigatorio={true}
          placeholder="Apelido"
          value={inputApelidoValue}
          onChange={handleApelidoChange}
        />
        <Input
          obrigatorio={true}
          placeholder="E-mail"
          value={inputEmailValue}
          onChange={handleEmailChange}
        />
        <Input
          obrigatorio={true}
          placeholder="Nome de utilizador"
          value={inputNomeUtilizadorValue}
          onChange={handleNomeUtilizadorChange}
        />
        {bottomSheetOpen && <Draggable
          cancel=".no-drag"
          onStop={() => setBottomSheetOpen(false)}
          nodeRef={bottomSheetRef}
        >
          <BottomSheetGender
            ref={bottomSheetRef}
            onSelectOption={handleOptionSelect}
            handleClickDrag={handleClickDrag}
          />
        </Draggable>}
        <ButtonForOpenBottomSheetSignUp
          btnName={btnGeneroName}
          onClick={handleToggleBottomSheet}
          type="button"
          className={opcaoSelecionada ? "opcaoSelecionada" : ""}
        />
        <Input
          obrigatorio={false}
          placeholder="Palavra-passe"
          value={inputPassValue}
          onChange={handlePassChange}
          type={shown.password ? "text" : "password"}
          shown={shown.password}
          isPassword={true}
          matchPassword={matchPassword}
          toggleEyeHandle={() => toggleEyeHandle("password")}
        />
        <Input
          obrigatorio={false}
          placeholder="Repetir Palavra-passe"
          value={inputRepetirPassValue}
          onChange={handleRepetirPassChange}
          type={shown.repeatPassword ? "text" : "password"}
          shown={shown.repeatPassword}
          matchPassword={matchPassword}
          erroObrigatorio={erroObrigatorio}
          isPassword={true}
          toggleEyeHandle={() => toggleEyeHandle("repeatPassword")}
        />
        <div className="termsContainer">
          <input type="checkbox" id="terms" name="terms" onChange={handleTermosChange} />
          <label className="termos" htmlFor='terms'>  Aceito os <button className='btnOpenTermosModal' onClick={handleOpenTermsModal}>termos e condições</button></label>
        </div>
        <div
          className='campoObrigatorio'
          style={
            todosCamposPreenchidos
              ? { visibility: "hidden" }
              : { visibility: "visbile" }
          }>
          <span className="colourGreenAsterisk">*</span> Campo Obrigatório
        </div>
        {errorMessages && errorMessages.length > 0 && (
          <div className="error-messages">
            {errorMessages.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div className='btnAtualizarDados'>
          <button
            className='buttonAtualizar'
            disabled={!todosCamposPreenchidos || !termosAceitos || !matchPassword || isLoading}
            onClick={handleRegisterClick}
            type="submit"
          >
            {isLoading ? <Loader><CircularProgress color="inherit" size={24} /></Loader> : 'Concluir'}
          </button>
        </div>
      </form>
      <Modal
        fecharModal={fecharModal}
        alert={alert}
        setFecharModal={setFecharModal}
      />
       {isTermsModalOpen && (
        <ModalTermos isOpen={isTermsModalOpen} onClose={handleCloseTermsModal} />
      )}
    </RegistarStyle>
  );
};

const RegistarStyle = styled.div`
  flex-direction: column;
  min-height: 100vh;

  .formRegistar {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
    flex: 1;
    width: 100%;
  }

  .termsContainer {
    width: calc(100% - 48px);
    display: flex;
    align-items: start;
    margin-bottom: 12px;
  }

  .termos {
    font-size: 12px;
    margin-left: 5px;
    a {
      text-decoration: underline;
      color: #484954;
    }
  }

  .btnOpenTermosModal{
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;
  }

  .campoObrigatorio {
    width: calc(100% - 48px);
    margin-bottom: 24px;
    font-size: 14px;
  }

  .colourGreenAsterisk {
    color: #00C17C;
    margin-left: 5px;
    margin-right: 5px;
  }

  .inputAsteriskContainer {
    width: 100%;
    text-align: center;
  }

  .btnAtualizarDados {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
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

  .inputAsteriskContainer .colourGreenAsterisk {
    position: absolute;
    right: 40px;
    margin-top: 7px;
  }

  .buttonOpenBottomSheetContainer {
    width: calc(100% - 48px);
    margin: 0;
  }

  .headerBoomerang {
    margin-bottom: 24px;
  }

  .btnComponent {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .asterisk {
    display: none;
  }

  .buttonOpenBottomSheetContainer button {
    color: gray;
  }

  .buttonOpenBottomSheetContainer button.opcaoSelecionada {
    color: black;
  }

  .formRegistar button[type="submit"] {
    margin: 0 auto;
    margin-top: auto;
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

export default SignUpPage
