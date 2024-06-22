import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myTransactionAPI = createApi({
    reducerPath: 'transactionAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        fetchTransaction: builder.query({
            query: () => ({
                url: `transaction`,
                method: "GET",
            }),
        }),
        createTransaction: builder.mutation({
            query: ({ date_start, date_end, date, productId }) => ({
                url: 'transaction',
                method: 'POST',
                body: { date_start, date_end, date, productId },
            }),
        }),
        createCheckOutSession: builder.mutation({
            query: ({ transactionId, selectedExtras }) => ({
                url: '/create-checkout-session',
                method: 'POST',
                body: { transactionId, selectedExtras },
            }),
        }),
    }),
});

export const { useFetchTransactionQuery, useCreateTransactionMutation, useCreateCheckOutSessionMutation } = myTransactionAPI;

export default myTransactionAPI;
