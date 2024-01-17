import React, { useEffect, useState } from "react";
import download from '../assets/download.svg'
import styled from "styled-components";


const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <Installimg src={download} alt="download app"
    className="link-button"
    id="setup_button"
    aria-label="Instalar Boomerang"
    title="Boomerang"
    onClick={onClick}
  />
      
  );
};

const Installimg= styled.img`
width: 50px !important;
`

export default InstallPWA;