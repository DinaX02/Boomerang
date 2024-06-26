import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myNotificationsnAPI = createApi({
  reducerPath: "notificationAPI",
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
    fetchNotification: builder.query({
      query: () => ({
        url: `notification`,
        method: "GET",
      }),
      transformResponse: (response) => {
        // console.log(response);
        response.forEach((item) => {
          if (item.product && Array.isArray(item.product.productImage)) {
            item.product.productImage = item.product.productImage.map(
              (imageUrl) => {
                return imageUrl.replace("http://localhost:3000/", "");
              }
            );
          }
        });
        return response;
      },
    }),
  }),
});

export const { useFetchNotificationQuery } = myNotificationsnAPI;

export default myNotificationsnAPI;
