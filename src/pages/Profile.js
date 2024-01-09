import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import Modal from '../components/Modal'
import Button from '../components/Button';
import LogoutIcon from '../assets/icons/logout.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import UserUnknownIcon from '../assets/icons/user_unknown.svg';
import EditarPerfilIcon from '../assets/icons/editar_perfil.svg';
import EditarPecaIcon from '../assets/icons/editar_peca.svg';
import FavoritosIcon from '../assets/icons/coracao.svg';
import CertoIcon from '../assets/icons/certo.svg';
import ClosetIcon from '../assets/icons/closet.svg';
import FavoritosEmptyIcon from '../assets/icons/favoritos.svg';
import EncomendasIcon from '../assets/icons/encomendas.svg';
// import "./profile.css";
import MenuMobile from '../components/MenuMobile';
import articleMockupImage from "../assets/article_mockup_image.jpg"


//Pagina do perfil
const Profile = () => {
    const [fecharModal, setFecharModal] = useState(true);
    const num = 20;
    const hasArmarioPecas = true;
    const hasFavoritos = true;
    const hasEncomendas = true
    return (
        <ProfileStyle>
            {/* <button onClick={() => {
                setFecharModal(!fecharModal);
            }}>Abrir modal</button>
            <Button
                onClick={() => {
                    setFecharModal(!fecharModal);
                }}
                text={"Próximo"}
                disable={false}
            />
            <Modal
                fecharModal={fecharModal}
                setFecharModal={setFecharModal}
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
            /> */}
            <div className='containerFixo'>
                <div className='perfilIconsContainer'>
                    <div className='editarPerfil'>
                        <div className='containerUserEdit'>
                            <img className="userUnknownIcon" src={UserUnknownIcon} alt="icon_user_unknown" />
                            <img className="editarPerfilIcon" src={EditarPerfilIcon} alt="icon_editar_perfil" />
                        </div>
                        <span className='nomeUtilizador'>mariacarmo</span>
                    </div>

                    <div className='iconesDireita'>
                        <img className="settingsIcon" src={SettingsIcon} alt="icon_settings" />
                        <img className="logoutIcon" src={LogoutIcon} alt="icon_logout" />
                    </div>
                </div>
                <div className='detalhesCentraisPerfil'>
                    <div className='contagemContainer'>
                        <div className='artigosContainer'>
                            <span>25</span>
                            <p>Artigos</p>
                        </div>
                        <div className='artigosEstrelas'>
                            <span>4.8</span>
                            <p>Estrelas</p>
                        </div>
                    </div>
                    <hr className='divisorPerfil'></hr>
                    <div className='editarBiografia'>
                        <div className='tituloBiografiaContainer'>
                            <span className='tituloBiografia'>Biografia</span>
                            <img className='editarBiografiaIcon' src={EditarPerfilIcon} alt="icon_editar_perfil" />
                        </div>
                        <p className='textoBiografia'>Sou apaixonada por moda e tenho sempre em conta opções mais sustentáveis no meu dia-a-dia.</p>
                    </div>
                </div>
                <hr className='divisorPerfil fundo'></hr>
            </div>

            <div className='sectionsContainer'>
                <div className='sectionArmario'>
                    <div className='sectionTitulo'>
                        <span>Armário</span>
                        {hasArmarioPecas && (
                            <Link to={'/profile-page'}>Ver mais ({num})</Link>
                        )}
                    </div>
                    {hasArmarioPecas ? (
                        <div className='articles'>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={EditarPecaIcon} alt="icon_editar_peca" />
                            </div>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={EditarPecaIcon} alt="icon_editar_peca" />
                            </div>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={EditarPecaIcon} alt="icon_editar_peca" />
                            </div>
                        </div>
                    ) : (
                        <div className='emptyState'>
                            <img src={ClosetIcon} alt={'closetIcon'} />
                            <p className='emptyStateText'>Ainda não publicaste nenhuma peça</p>
                        </div>
                    )}
                </div>
                <div className='sectionFavoritos'>
                    <div className='sectionTitulo'>
                        <span>Favoritos</span>
                        {hasFavoritos && (
                        <Link to={'/profile-page'}>Ver mais ({num})</Link>
                        )}
                    </div>
                    {hasFavoritos ? (
                    <div className='articles'>
                        <div className='pecaContainer'>
                            <img src={articleMockupImage} alt={'mockup'} />
                            <img className="iconPeca" src={FavoritosIcon} alt="icon_coracao" />
                        </div>
                        <div className='pecaContainer'>
                            <img src={articleMockupImage} alt={'mockup'} />
                            <img className="iconPeca" src={FavoritosIcon} alt="icon_coracao" />
                        </div>
                        <div className='pecaContainer'>
                            <img src={articleMockupImage} alt={'mockup'} />
                            <img className="iconPeca" src={FavoritosIcon} alt="icon_coracao" />
                        </div>
                    </div>
                    ) : (
                        <div className='emptyState'>
                            <img src={FavoritosEmptyIcon} alt={'closetIcon'} />
                            <p className='emptyStateText'>Ainda não tens nenhuma peça nos favoritos</p>
                        </div>
                    )}
                </div>
                <div className='sectionEncomendas'>
                    <div className='sectionTitulo'>
                        <span>Encomendas</span>
                        {hasEncomendas && (
                            <Link to={'/profile-page'}>Ver mais ({num})</Link>
                        )}
                    </div>
                    {hasEncomendas ? (
                        <div className='articles'>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={CertoIcon} alt="icon_certo" />
                            </div>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={CertoIcon} alt="icon_certo" />
                            </div>
                            <div className='pecaContainer'>
                                <img src={articleMockupImage} alt={'mockup'} />
                                <img className="iconPeca" src={CertoIcon} alt="icon_certo" />
                            </div>
                        </div>
                    ) : (
                        <div className='emptyState'>
                            <img src={EncomendasIcon} alt={'closetIcon'} />
                            <p className='emptyStateText'>Ainda não fizeste nenhuma encomenda</p>
                        </div>
                    )}
                </div>
            </div>
            <MenuMobile></MenuMobile>
        </ProfileStyle>
    )
}

const ProfileStyle = styled.div`
.containerFixo {
    position: fixed;
    background-color: #f8f8f8;
    z-index: 100;
}

.perfilIconsContainer {
    display: flex;
    justify-content: space-between;
    /* Adiciona espaço entre .editarPerfil e .iconesDireita */
    padding-top: 27px;
    margin-bottom: 18px;
}

.editarPerfil {
    width: max-content;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.containerUserEdit {
    position: relative;
    width: max-content;
    left: 50%;
    transform: translateX(-50%);
}

.editarPerfilIcon {
    position: absolute;
    right: 0;
}

.nomeUtilizador {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
}

.iconesDireita {
    position: relative;
    width: max-content;
    margin-right: 24px;
}

.settingsIcon {
    display: block;
    margin-bottom: 8px;
}

.logoutIcon {
    display: block;
    margin-top: 8px;
}

.detalhesCentraisPerfil {
    background-color: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0 24px;
    /* top | left and right | bottom */
    padding: 18px 24px 12px;
}

.contagemContainer {
    display: flex;
    justify-content: space-around;
    text-align: center;
}

.artigosContainer p {
    font-size: 10px;
    font-weight: 500;
    margin: 0;
}

.artigosEstrelas p {
    font-size: 10px;
    font-weight: 500;
    margin: 0;
}

.artigosContainer span {
    font-size: 20px;
    font-weight: 600;

}

.artigosEstrelas span {
    font-size: 20px;
    font-weight: 600;
}

hr.divisorPerfil {
    border-top: 0.5px solid #e4e4e4;
    border-radius: 5px;
    opacity: 1;
}

.detalhesCentraisPerfil .divisorPerfil {
    margin-bottom: 9px;
    margin-top: 18px;
}

.editarBiografia {
    font-size: 12px;
    text-align: center;
}

.tituloBiografiaContainer {
    margin-bottom: 7px;
}

.tituloBiografia {
    font-weight: 600;
    display: inline-block;
    margin-right: 3px;
}

.textoBiografia {
    margin: 0;
}

.divisorPerfil.fundo {
    margin: 18px 24px 0;
}

.sectionsContainer {
    padding-top: 335px;
    overflow-y: auto;
    margin-bottom: 100px;
}

.sectionTitulo {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    font-size: 13px;
    font-weight: 500;

    a {
        font-weight: 500;
        font-size: 12px;
        text-decoration: none;
        color: #00C17C;
    }
}

.articles {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px 24px;
}

.articles img {
    width: 84px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
}

.pecaContainer {
    position: relative;
}

.articles .iconPeca {
    position: absolute;
    width: auto;
    height: auto;
    object-fit: none;
    border-radius: 0;
    box-shadow: none;
    right: 0;
    padding: 3px;
}

.emptyState {
    text-align: center;
    padding: 15px 24px;
}

.emptyStateText {
    font-size: 12px;
    margin: 5px 0 0;
}
`

export default Profile
