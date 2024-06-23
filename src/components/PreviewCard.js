import React, { useState, useEffect } from 'react';
import { useFetchProductQuery } from '../redux/productAPI';
import imageDefaultProduct from "../assets/icons/image_default_product.svg";
import styled from 'styled-components';
import { CircularProgress } from "@mui/material";

const PreviewCard = (props) => {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(90);
  const { data: productsData, isLoading } = useFetchProductQuery({ id: props.id });
  const product = productsData && productsData.length > 0 ? productsData[0] : null;

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

  return (
    <>
      {isLoading && <Loader className={'loader'} color="success" />}

      {!isLoading && product && (
        <div className="containerPreview">
          <div
            className='imgCardPreview'
            style={{
              backgroundImage: `url(${product.productImage && product.productImage.length > 0 ? product.productImage : imageDefaultProduct})`
            }}
          ></div>
          <div className="textContainerPreview">
            <h2 className="titlePreview">{product.title}</h2>
            <p className="descriptionPreview">
              {descriptionSizeControl(product.description)}
            </p>
          </div>
          <div className="priceContainerPreview">
            <p className="priceLabelPreview">{product.price_day}€ / dia</p>
            <p className="totalPreview">Total:</p>
            <p className="totalPricePreview">{props.valor}€</p>
          </div>
        </div>
      )}

      {!isLoading && !product && (
        <div>No product found</div>
      )}
    </>
  );
};

const Loader = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 40px;
  height: 40px;
`;

export default PreviewCard;
