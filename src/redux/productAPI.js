import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://boomerang-4hhtobs79-boomerangs-projects.vercel.app/",

    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    fetchProduct: builder.query({
      query: ({ id = "" }) => ({
        url: `product/?id=${id}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (
          Array.isArray(response) &&
          response.length > 0 &&
          response[0].productImage
        ) {
          response[0].productImage = response[0].productImage.map((image) =>
            image.replace("http://localhost:3000/", "")
          );
        }

        return response;
      },
    }),
    createProduct: builder.mutation({
      query: (formData) => ({
        url: "product/",
        method: "POST",
        body: formData, // Send the FormData directly
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `product/?id=${id}`, // Corrigido: URL deve ser uma string
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation({
      query: ({
        id,
        title,
        description,
        value,
        price_day,
        availability,
        brand,
        sizeId,
        productTypeId,
        colorId,
        gradeId,
      }) => ({
        // Adicionado productId
        url: `product/`, // Corrigido: URL deve ser uma string
        method: "PUT",
        body: {
          id,
          title,
          description,
          value,
          price_day,
          availability,
          brand,
          sizeId,
          productTypeId,
          colorId,
          gradeId,
        },
      }),
    }),
    fetchProductForm: builder.query({
      query: () => ({
        url: "product/form",
        method: "GET",
      }), // Corrigido: URL deve ser uma string
    }),
    fetchProductSearch: builder.query({
      query: ({
        name = "",
        id = "",
        size = "",
        color = "",
        gender = "",
        category = "",
        orderBy = "",
        orderDirection,
      }) => ({
        url: `product/search?name=${name}&id=${id}&size=${size}&color=${color}&gender=${gender}&category=${category}&orderBy=${orderBy}&orderDirection=${orderDirection}`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (Array.isArray(response)) {
          response.forEach((product) => {
            if (Array.isArray(product.productImage)) {
              product.productImage = product.productImage.map((image) =>
                image.replace("http://localhost:3000/", "")
              );
            }
          });
        }
        return response;
      },
    }),
    fetchFavorite: builder.query({
      query: () => ({
        url: `favorite`,
        method: "GET",
      }),
    }),
    transformResponse: (response) => {
      console.log("Original fetchFavorite response:", response);
      if (Array.isArray(response)) {
        response.forEach((favorite) => {
          if (Array.isArray(favorite.productImage)) {
            favorite.productImage = favorite.productImage.map((image) => {
              return image ? image.replace("http://localhost:3000/", "") : null;
            });
          }
        });
      }
      console.log("Transformed fetchFavorite response:", response);
      return response;
    },
  }),
});

export const {
  useFetchProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useFetchProductFormQuery,
  useFetchProductSearchQuery,
  useFetchFavoriteQuery,
} = myAPI;

export default myAPI;
