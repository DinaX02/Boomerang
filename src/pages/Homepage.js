import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <p>Homepage</p>
    <Link to={"/search-page"}><button>Pesquisa</button></Link>
    </div>
  )
}

export default Homepage