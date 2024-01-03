import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <p>Bem Vindos ao Boomerang</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>
    <Link to={"/publicar-page"}><button>Publicar TESTE</button></Link>
    <Link to={"/notificacoes"}><button>Notificações</button></Link>

    </div>
  )
}

export default Homepage