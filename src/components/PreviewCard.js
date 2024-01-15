import React, { useState, useEffect } from 'react';
import imgDefaultPreview from '../assets/img_default_card_preview.svg';
import artigosJSON from "../data/artigos.json";

const PreviewCard = () => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);

  const handleResize = () => {

    if (window.innerWidth <= 450) {
      setMaxDescriptionLength(40);
    } else {
      setMaxDescriptionLength(90);
    }
  };

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const descriptionSizeControl = (text) => {
    return text.length > maxDescriptionLength
      ? `${text.substring(0, maxDescriptionLength)}...`
      : text;
  };

  const imageArtigo = artigosJSON.images.length > 0
    ? artigosJSON.images[0]
    : imgDefaultPreview;

  return (
    <div className="containerPreview">
      <div className='imgCardPreview' style={{backgroundImage:`url(${imageArtigo})`}}>
      </div>
      <div className="textContainerPreview">
        <h2 className="titlePreview">{artigosJSON.title}</h2>
        <p className="descriptionPreview">
          {descriptionSizeControl(artigosJSON.description)}
        </p>
      </div>
      <div className="priceContainerPreview">
        <p className="priceLabelPreview">{artigosJSON.dailyRentalPrice}€ / dia</p>
        <p className="totalPreview">Total:</p>
        <p className="totalPricePreview">25€{/*alterar quando for feita a pagina do tempo de aluguer*/}</p>
      </div>
    </div>
  );
};

export default PreviewCard;