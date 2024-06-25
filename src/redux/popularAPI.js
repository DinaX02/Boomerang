import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myPopularAPI = createApi({
  reducerPath: "popularAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://boomerang-api-nu.vercel.app/",

    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include",
  }),

  endpoints: (builder) => ({
    fetchPopularCategory: builder.query({
      query: () => ({
        url: `popular/categories`,
        method: "GET",
      }),
    }),
    fetchPopularPromoter: builder.query({
      query: () => ({
        url: `popular/promoters`,
        method: "GET",
      }),
      transformResponse: (response) => {
        if (Array.isArray(response)) {
          response.forEach((promoter) => {
            if (
              typeof promoter.profileImage === "string" &&
              promoter.profileImage.startsWith("http://localhost:3000/profile/")
            ) {
              promoter.profileImage = promoter.profileImage.replace(
                "http://localhost:3000/profile/",
                ""
              );
            } else if (promoter.profileImage === null) {
              promoter.profileImage = null;
            }
          });
        }
        return response;
      },
    }),
  }),
});

export const { useFetchPopularCategoryQuery, useFetchPopularPromoterQuery } =
  myPopularAPI;

export default myPopularAPI;
