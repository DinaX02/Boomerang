import React from 'react'
import Header from '../components/Header/Header';
// import PreviewCard from '../components/PreviewCard';
import ProgressPublish from '../components/ProgressPublish';
import NavbarWeb from '../components/NavbarWeb';


const Publicar = () => {
  return (

    <div className='publicarPage'>
      <NavbarWeb/>
        <Header name="Publicar"/>
        {/* <PreviewCard/> */}
        <ProgressPublish/>  
    </div>
  )
}

export default Publicar