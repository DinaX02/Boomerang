import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
import { useUpdateProductMutation, useFetchProductQuery } from '../redux/productAPI';
import Header from '../components/Header/Header';

const EditarProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();
  const { data: product, error, isLoading } = useFetchProductQuery({ id: parseInt(id) });

  const [formState, setFormState] = useState({
    id: '',
    title: '',
    description: '',
    value: '',
    price_day: '',
    availability: '',
    brand: '',
    SizeId: '',
    ProductTypeId: '',
    ColorId: '',
    GradeId: '',
    productImage: null,
  });

  const [originalFormState, setOriginalFormState] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (product) {
      const initialState = {
        id: product.id || '',
        title: product.title || '',
        description: product.description || '',
        value: product.value || '',
        price_day: product.price_day || '',
        availability: product.availability || '',
        brand: product.brand || '',
        SizeId: product.SizeId || '',
        ProductTypeId: product.ProductTypeId || '',
        ColorId: product.ColorId || '',
        GradeId: product.GradeId || '',
        productImage: null,
      };

      setFormState(initialState);
      setOriginalFormState(initialState);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsModified(true);
  };

  const handleFileChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      productImage: e.target.files[0],
    }));
    setIsModified(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(formState).forEach((key) => {
        formData.append(key, formState[key]);
      });
      await updateProduct(formData).unwrap();
      navigate(`/product/${id}`);
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isLoading) {
    return <Loader><CircularProgress className="loader" color="success" /></Loader>;
  }

  if (error) {
    return <p>Error loading product: {error.message}</p>;
  }

  return (
    <>
      <Header name="Editar Produto" />
      <EditProdutoStyle>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Value:
            <input
              type="number"
              name="value"
              value={formState.value}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Price per Day:
            <input
              type="number"
              name="price_day"
              value={formState.price_day}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Availability:
            <input
              type="text"
              name="availability"
              value={formState.availability}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              value={formState.brand}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Size ID:
            <input
              type="number"
              name="SizeId"
              value={formState.SizeId}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Product Type ID:
            <input
              type="number"
              name="ProductTypeId"
              value={formState.ProductTypeId}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Color ID:
            <input
              type="number"
              name="ColorId"
              value={formState.ColorId}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Grade ID:
            <input
              type="number"
              name="GradeId"
              value={formState.GradeId}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </label>
          <label>
            Product Image:
            <input
              type="file"
              name="productImage"
              onChange={handleFileChange}
              disabled={!isEditing}
            />
          </label>
          <button type="button" onClick={handleEditClick}>Editar</button>
          <button type="submit" disabled={!isModified}>Update Product</button>
        </form>
      </EditProdutoStyle>
    </>
  );
};

const EditProdutoStyle = styled.div`
  /* Estilos conforme necessário */
`;

const Loader = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default EditarProduto;