import React from 'react'
import { Link } from 'react-router-dom'
import NavbarWeb from '../components/NavbarWeb'

const Homepage = () => {
  return (
    <div>
      <NavbarWeb/>
        <p>Bem Vindos ao Boomerang</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>
    <Link to={"/notificacoes"}><button>Notificações</button></Link>

    </div>
  )
}

export default Homepage