import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myNotificationsnAPI = createApi({
    reducerPath: 'notificationAPI',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3000/',
        baseUrl: "https://boomerang-4hhtobs79-boomerangs-projects.vercel.app/",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json')
            return headers
        },
        credentials: 'include'
    }),

    endpoints: (builder) => ({
        fetchNotification: builder.query({
            query: () => ({
                url: `notification`,
                method: "GET",
            }),
        }),
    }),
});

export const { useFetchNotificationQuery } = myNotificationsnAPI;

export default myNotificationsnAPI;
