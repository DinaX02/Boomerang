import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myLocationAPI = createApi({
  reducerPath: "locationAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    // baseUrl: "https://boomerang-api-nu.vercel.app/",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    fetchLocation: builder.query({
      query: () => ({
        url: `location`,
        method: "GET",
      }),
    }),
    addLocation: builder.mutation({
      query: ({ address, locationName, postalCode }) => ({
        url: "location",
        method: "POST",
        body: { address, locationName, postalCode },
      }),
    }),
    deleteLocation: builder.mutation({
      query: (id) => ({
        url: `location?id=${id}`,
        method: "DELETE",
      }),
    }),
    updateLocation: builder.mutation({
      query: ({ id, address, locationName, postalCode }) => ({
        url: `location/`,
        method: "PUT",
        body: { id, address, locationName, postalCode },
      }),
    }),
  }),
});

export const {
  useFetchLocationQuery,
  useAddLocationMutation,
  useDeleteLocationMutation,
  useUpdateLocationMutation,
} = myLocationAPI;

export default myLocationAPI;
