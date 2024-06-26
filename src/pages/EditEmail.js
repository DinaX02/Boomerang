import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import Button from '../components/Button';
import EditarInputIcon from '../assets/icons/editarInput.svg';
import Header from '../components/Header/Header';
import Modal from '../components/Modal';
import Input from '../components/Input';
import { CircularProgress } from "@mui/material";
import { useSeeUserQuery, useEditUserMutation } from '../redux/usersAPI';
import colors from "./../assets/colors";

const EditEmail = () => {
  const { data: userData, refetch, isLoading, error } = useSeeUserQuery();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [disableEmail, setDisableEmail] = useState(true);
  const [disableBtn, setDisableBtn] = useState(true);
  const [fecharModal, setFecharModal] = useState(true);
  const [alert, setAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // States to store original values
  const [originalEmail, setOriginalEmail] = useState("");

  useEffect(() => {
    if (userData) {
      setEmail(userData.email);
      setOriginalEmail(userData.email);
    }
  }, [userData]);

  const [editUser] = useEditUserMutation();

  const handleClick = async () => {
    setIsSubmitting(true);
    try {
      await editUser({ email }).unwrap();
      await refetch();
      setIsSubmitting(false);
      navigate(-1);
    } catch (error) {
      console.error('Failed to update email:', error);
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  const handleEditEmailInput = (e) => {
    e.preventDefault();
    setDisableEmail(false);
    setAlert(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setDisableBtn(e.target.value === originalEmail);
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

  if (error) return <div>Error loading user data</div>;

  return (
    <>
      <Header name="Editar Email" alertHandler={alertHandler} />
      <EditProfileStyle>
        <form onSubmit={handleSubmit}>
          <div className='inputsContainer'>
            <div className='inputContainer'>
              <div className='inputTitleContainer'>
                <label htmlFor="email" className='inputTitle'>
                  Email
                </label>
                <button className='buttonEdit' type="button" onClick={handleEditEmailInput}>
                  <img className="editarInputIcon" src={EditarInputIcon} alt="icon_editar_input" />
                </button>
              </div>
              <Input
                obrigatorio={true}
                placeholder=""
                value={email}
                onChange={handleEmailChange}
                disabled={disableEmail}
              />
            </div>
          </div>
          <div className="btnAtualizarDados">
            <button className="buttonAtualizar" disabled={disableBtn || isSubmitting} type="submit">
              {isSubmitting ? <CircularProgress color="inherit" size={24} /> : 'Atualizar Email'}
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

export default EditEmail;