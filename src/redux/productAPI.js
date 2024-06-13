import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {  //isto é porque precisamos de fazer a autenticação
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        fetchProduct: builder.query({
            query: ({id = ''}) => ({
                url: `product/?id=${id}`,
                method: "GET",
              }),
        }),
        createProduct: builder.mutation({
            query: ({ title, description, measurements, value, price_day, brand, SizeId, ProductTypeId, ColorId, GradeId }) => ({
                url: 'product/',
                method: 'POST',
                body: { title, description, measurements, value, price_day, brand, SizeId, ProductTypeId, ColorId, GradeId },
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
            query: () => ({
                url: 'product/form',
                method: 'GET',
            }), // Corrigido: URL deve ser uma string
           
        }),
        fetchProductSearch: builder.query({
            query: ({name = '', id = '', size = '', color = '', category = ''}) => ({
                url: `product/search?name=${name}&id=${id}&size=${size}&color=${color}&category=${category}`,
                method: "GET",
              }),
        }),
        
    }),
});

export const { useFetchProductQuery, useCreateProductMutation, useDeleteProductMutation, useUpdateProductMutation, useFetchProductFormQuery, useFetchProductSearchQuery } = myAPI;

export default myAPI;
