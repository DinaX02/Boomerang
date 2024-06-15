import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myFavoriteAPI = createApi({
    reducerPath: 'favoriteAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        fetchFavorite: builder.query({
            query: () => ({
                url: `favorite`,
                method: "GET",
              }),
        }),
        addFavorite: builder.mutation({
            query: ({ productId }) => ({
                url: 'favorite/add',
                method: 'POST',
                body: { productId },
            }),
        }),
        removeFavorite: builder.mutation({
            query: ({ productId }) => ({
                url: 'favorite/remove',
                method: 'POST',
                body: { productId },
            }),
        }),
    }),
});

export const { useFetchFavoriteQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } = myFavoriteAPI;

export default myFavoriteAPI;
