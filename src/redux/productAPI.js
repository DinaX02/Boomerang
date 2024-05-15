import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {  //isto é porque precisamos de fazer a autenticação
            headers.set('Content-Type', 'application/json')
            return headers
        },
    }),

    endpoints: (builder) => ({
        fetchProduct: builder.query({
            query: ({ id }) => `product?id=${id}`,
        }),
        createProduct: builder.mutation({
            query: ({ title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId }) => ({
                url: 'product/',
                method: 'POST',
                body: { title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId },
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product/?id=${id}`, // Corrigido: URL deve ser uma string
                method: 'DELETE',
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ id, title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId }) => ({ // Adicionado productId
                url: `product/`, // Corrigido: URL deve ser uma string
                method: 'PUT',
                body: { id, title, description, value, price_day, availability, brand, sizeId, productTypeId, colorId, gradeId },
            }),
        }),
        fetchProductForm: builder.query({
            query: () => 'product/form', // Corrigido: URL deve ser uma string
        }),
        fetchProductSearch: builder.query({
            query: () => 'product/search', // Corrigido: URL deve ser uma string
        }),
    }),
});

export const { useFetchProductQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation, useFetchProductFormQuery, useFetchProductSearchQuery } = myAPI;

export default myAPI;
