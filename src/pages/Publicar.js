import React from 'react'
import Header from '../components/Header/Header';
// import PreviewCard from '../components/PreviewCard';
import ProgressPublish1 from '../components/ProgressPublish';
import NavbarWeb from '../components/NavbarWeb';

const Publicar = () => {
  return (

    <div>
      <NavbarWeb/>
        <Header name="Publicar / Etapa 1 de 5"/>
        {/* <PreviewCard/> */}
        <ProgressPublish1/>
    </div>
  )
}

export default Publicar