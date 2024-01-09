import React from 'react'
import Header from '../components/Header/Header';
// import PreviewCard from '../components/PreviewCard';
import ProgressPublish from '../components/ProgressPublish';
import NavbarWeb from '../components/NavbarWeb';
import MenuMobile from '../components/MenuMobile'


const Publicar = () => {
  return (

    <div>
      <NavbarWeb/>
        <Header name="Publicar"/>
        {/* <PreviewCard/> */}
        <ProgressPublish/>  
        <MenuMobile/>
    </div>
  )
}

export default Publicar