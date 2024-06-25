import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myExtraAPI = createApi({
  reducerPath: "extraAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://boomerang-4hhtobs79-boomerangs-projects.vercel.app/",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    fetchExtra: builder.query({
      query: () => ({
        url: `extra`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchExtraQuery } = myExtraAPI;

export default myExtraAPI;
