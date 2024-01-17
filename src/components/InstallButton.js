import React, { useEffect, useState } from "react";
import Button from '../components/Button'

const InstallButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = (e) => {

    if (promptInstall) {
      promptInstall.prompt();
    }
  };

  return (
    <Button
      className="download-button"
      onClick={handleInstallClick}
      disabled={!supportsPWA}
      text="Download App"
    >
      Install PWA
    </Button>
  );
};

export default InstallButton;
