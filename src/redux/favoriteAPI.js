import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myFavoriteAPI = createApi({
  reducerPath: "favoriteAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://boomerang-4hhtobs79-boomerangs-projects.vercel.app/api/",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    fetchFavorite: builder.query({
      query: () => ({
        url: `favorite`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (Array.isArray(response)) {
          response.forEach((favorite) => {
            if (Array.isArray(favorite.productImage)) {
              favorite.productImage = favorite.productImage.map((image) => {
                return image
                  ? image.replace("http://localhost:3000/", "")
                  : null;
              });
            }
          });
        }
        return response;
      },
    }),
    addFavorite: builder.mutation({
      query: ({ productId }) => ({
        url: "favorite/add",
        method: "POST",
        body: { productId },
      }),
    }),
    removeFavorite: builder.mutation({
      query: ({ productId }) => ({
        url: "favorite/remove",
        method: "POST",
        body: { productId },
      }),
    }),
  }),
});

export const {
  useFetchFavoriteQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = myFavoriteAPI;

export default myFavoriteAPI;
