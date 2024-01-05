import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./components.css";
import LogoNavbarWeb from '../assets/logo_boomerang_navbar.png'

const NavbarWeb = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
                <img className="navbarLogoImg" src={LogoNavbarWeb} alt="img_logo"/>
          <Link to={"/"}><strong>Boomerang</strong></Link>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                 <Link to={"/about-page"}>Sobre Nós</Link>
                 <Link to={"/search-page"}>Pesquisar</Link>
                 <Link to={"/fav-page"}>Favoritos</Link>
                 <Link to={"/notifications-page"}>Caixa de Entrada</Link>
                 <Link to={"/publicar-page"}>Publicar</Link>
                 <Link to={"/profile-page"}>Perfil</Link>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>)
}

export default NavbarWeb