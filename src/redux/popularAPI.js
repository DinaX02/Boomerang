import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myPopularAPI = createApi({
    reducerPath: 'popularAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        fetchPopularCategory: builder.query({
            query: () => ({
                url: `popular/categories`,
                method: "GET",
              }),
        }),
    }),
});

export const { useFetchPopularCategoryQuery  } = myPopularAPI;

export default myPopularAPI;
