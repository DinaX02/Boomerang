import React from 'react'
import { Link } from 'react-router-dom'
import FilterButtons from '../components/FilterButtons'

const SearchPage = () => {
  return (
    <div>SearchPage
         <Link to={"/"}><button>Back To Homepage</button></Link>
         <FilterButtons/>
    </div>
  )
}

export default SearchPage