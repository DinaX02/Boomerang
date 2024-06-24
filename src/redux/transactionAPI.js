import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myTransactionAPI = createApi({
  reducerPath: "transactionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    // baseUrl: "https://boomerang-4hhtobs79-boomerangs-projects.vercel.app/",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),

    endpoints: (builder) => ({
        fetchTransaction: builder.query({
            query: (transactionId) => ({
                url: `transaction/${transactionId}`,
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
            query: ({ transactionId, selectedExtras, renterUserAddress }) => ({
                url: 'transaction/create-checkout-session',
                method: 'POST',
                body: { transactionId, selectedExtras, renterUserAddress },
            }),
        }),
        approvedTransaction: builder.mutation({
            query: ({ transactionId, ownerUserAddress }) => ({
                url: `/transaction/${transactionId}/approved`,
                method: 'PUT',
                body: { ownerUserAddress },
            }),
        }),
        rejectedTransaction: builder.mutation({
            query: ({ transactionId }) => ({
                url: `/transaction/${transactionId}/rejected`,
                method: 'PUT',
            }),
        }),
        cancelledTransaction: builder.mutation({
            query: ({ transactionId }) => ({
                url: `/transaction/${transactionId}/cancelled`,
                method: 'PUT',
            }),
        }),
    }),
});

export const { useFetchTransactionQuery, useCreateTransactionMutation, useCreateCheckOutSessionMutation, useApprovedTransactionMutation, useRejectedTransactionMutation, useCancelledTransactionMutation } = myTransactionAPI;

export default myTransactionAPI;
