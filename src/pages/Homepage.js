import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavbarWeb from '../components/NavbarWeb'
import Article from "../components/Article";
import styled from "styled-components";
import MenuMobile from "../components/MenuMobile";
import ProfileLink from "../components/ProfileLink";
import Button from '../components/Button';
import Input from '../components/Input';
import Chip from '../components/chip';

const Homepage = () => {
  const navigate = useNavigate();
  const [fecharBottomSheet, setFecharBottomSheet] = useState(false);
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [inputNomeValue, setInputNomeValue] = useState('');
  const [inputPassValue, setInputPassValue] = useState('');
  const [maskedPassword, setMaskedPassword] = useState('');
  const [erroObrigatorio, setErroObrigatorio] = useState(false);
  const [todosCamposPreenchidos, setTodosCamposPreenchidos] = useState(false);

  const handleCriarContaClick = () => {
    navigate('/sign-up-page');
  };

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    const camposPreenchidos =
      inputNomeValue.trim() !== '' &&
      inputPassValue.trim() !== '';

    // Atualiza o estado de todosCamposPreenchidos
    setTodosCamposPreenchidos(camposPreenchidos);
  }, [
    inputNomeValue,
    inputPassValue
  ]);

  const handleEntrarClick = () => {
    if (mostrarLogin) {
      if (todosCamposPreenchidos) {
        setFecharBottomSheet(true);
      }
      else {
        setErroObrigatorio(true);
      }
    } else {
      setMostrarLogin(true);
    }
  };

  const dragClickHandle = () => {
    setFecharBottomSheet(true);
  }


  const handleInputNomeChange = (e) => {
    setInputNomeValue(e.target.value);
  };

  const handleInputPassChange = (e) => {
    setInputPassValue(e.target.value);
    setMaskedPassword('*'.repeat(e.target.value.length));
  };

  const clickContinuarHandle = () => {
    setFecharBottomSheet(true);
  }

  useEffect(() => {
    if (window.innerWidth < 600) {
    if (localStorage.getItem("redirect")) {
      return;
    }else{
      localStorage.setItem("redirect", true);
      return navigate("/onBoarding");
    }
  }
  });


  return (
    <div>
      <HomepageStyle>
        {/*<NavbarWeb/>
        <p>Bem Vindos ao Boomerang</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>*/}
                <div className={'top'}>
                    <div>
                        <div>Bem-Vinda</div>
                        <div>O teu guarda-roupa ilimitado começa aqui</div>
                    </div>
                    <ProfileLink className={'profileLink'}/>
                </div>
                <div>
                    <div className={'sectionTitle'}><span>Categorias Populares</span></div>
                    <div className={'articles'}>
                        <Chip category={'Homem'}/>
                        <Chip category={'Mulher'}/>
                        <Chip category={'Gala'}/>
                        <Chip category={'Cerimónia'}/>
                    </div>
                </div>
                <div>
                    <div className={'sectionTitle'}><span>Promotores Populares</span></div>
                    <div className={'articles'}>
                        <ProfileLink className={'profileLink'} name={'Bernardo Silva'} />
                        <ProfileLink className={'profileLink'} name={'Joana Faria'} />
                        <ProfileLink className={'profileLink'} name={'Leandro Santos'} />
                        <ProfileLink className={'profileLink'} name={'Gisela Martins'} />
                        <ProfileLink className={'profileLink'} name={'Renata Batista'} />
                    </div>

                </div>
                <div>
                    <div className={'sectionTitle'}><span>Os teus favoritos</span><Link to={'/'}>Ver tudo</Link></div>
                    <div className={'articles'}>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article more={true}/>
                    </div>
                </div>
                <div>
                    <div className={'sectionTitle'}><span>Novidades</span><Link to={'/'}>Ver mais</Link></div>
                    <div className={'articles'}>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article description={true}/>
                        <Article more={true}/>
                    </div>
                </div>
          <MenuMobile></MenuMobile>
          {!fecharBottomSheet && <div className='fundoBlured'>
              <div
                  className='bottomSheetLoginRegistar'
                  style={
                      mostrarLogin
                          ? { height: "354px" }
                          : { height: "220px" }
                  }>
                  <div className='dragHandleContainer' onClick={dragClickHandle}>
                      <div className='dragHandle' />
                  </div>
                  {!mostrarLogin && <div className='loginRegistarContainer' >
                      <Button
                          width="236px"
                          onClick={handleEntrarClick}
                          text="Entrar"></Button>
                      <Button
                          width="236px"
                          onClick={handleCriarContaClick}
                          text="Criar conta"></Button>
                      <Link className='ignorar' onClick={clickContinuarHandle}>Continuar sem conta</Link>
                  </div>}
                  {mostrarLogin && <div className='loginContainer'>
                      <form className='formLogin'>
                          <Input
                              erroObrigatorio={erroObrigatorio}
                              placeholder="E-mail ou nome de utilizador"
                              value={inputNomeValue}
                              onChange={handleInputNomeChange}
                          />
                          <Input
                              erroObrigatorio={erroObrigatorio}
                              placeholder="Palavra-passe"
                              value={maskedPassword}
                              onChange={handleInputPassChange}
                          />
                      </form>
                      <Link className='ignorar forgetPassword'>Esqueceste-te da palavra-passe?</Link>
                      <Button
                          width="236px"
                          type="submit"
                          onClick={handleEntrarClick}
                          text="Entrar"></Button>
                      <Link className='ignorar' to={'/sign-up-page'}>Criar conta</Link>
                  </div>}
              </div>
          </div>
          }
            </HomepageStyle>
        </div>
    )
}

const HomepageStyle = styled.div`
  
  padding-bottom: 115px;
  
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  

  .top {
    padding: 25px;
    display: flex;
    justify-content: space-between;

    div:first-child {
      font-size: 20px;
      font-weight: 800;
      flex: 1;

      div:first-child {
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 5px;
      }
    }

    .profileLink {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  
  .articles{
    margin: 5px 0;
    padding: 10px 25px;
    display: flex;
    gap: 15px;
    overflow: scroll;
    *{
      flex-shrink: 0;
    }
  }


  .sectionTitle {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 800;
    a{
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      color: #00C17C;
    }
  }

  .bottomSheetLoginRegistar {
    background-color: #f8f8f8;
    height: 220px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }

  .dragHandleContainer {
    width: 100%;
    margin-bottom: 24px;
  }

  .dragHandle {
    margin-top: 15px;
    width: 25%;
    border: 2px solid #cacaca;
    border-radius: 5px;
    margin: 15px auto 1.5em;
  }

  .btnComponent {
    margin-bottom: 24px;
  }

  .ignorar {
        font-weight: normal;
        font-size: 13px;
        text-decoration: underline;
        color: #484954;
        display: block;
        margin-top: -12px;
    }

  .fundoBlured {
    background-color: rgba(0,0,0,0.3);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    backdrop-filter: blur(1.5px);
  }

  .loginRegistarContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .loginContainer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .formLogin {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .forgetPassword {
    width: calc(100% - 48px);
    margin-top: 0;
  }

  @media only screen and (min-width: 600px) {
    .fundoBlured {
      display: none;
    }
  }
`

export default Homepage