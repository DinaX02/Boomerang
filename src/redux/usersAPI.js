import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myUserAPI = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ username, password }) => ({
        url: "user/login",
        method: "POST",
        body: { username, password },
      }),
    }),

    regsiterUser: builder.mutation({
      query: ({ username, name, email, gender, password }) => ({
        url: "user/register",
        method: "POST",
        body: { username, name, email, gender, password },
      }),
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
    }),

    searchUser: builder.mutation({
      query: ({ username, page }) => ({
        url: "user/search",
        method: "GET",
        body: { username, page },
      }),
    }),

    searchUser: builder.mutation({
      query: ({ username, page }) => ({
        url: "user/search",
        method: "GET",
        body: { username, page },
      }),
    }),

    userSearch: builder.query({
      query: ({ username, page }) => ({
        url: "user/search",
        params: { username, page },
      }),
    }),
    seeUser: builder.query({
      query: ({ id }) => ({
        url: "user",
        params: { id },
      }),
    }),
    editUser: builder.mutation({
      query: ({ bio, username, name, email, gender }) => ({
        url: "user",
        method: "PUT",
        body: { bio, username, name, email, gender },
      }),
    }),

    editPassword: builder.mutation({
      query: ({ password, newPassword }) => ({
        url: "user",
        method: "PUT",
        body: { password, newPassword },
      }),
    }),

    deleteUser: builder.mutation({
      query: ({ password }) => ({
        url: "user",
        method: "DELETE",
        body: { password },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegsiterUserMutation,
  useLogoutUserMutation,
  useUserSearchQuery,
  useSeeUserQuery,
  useEditUserMutation,
  useDeleteUserMutation,
} = myUserAPI;

export default myUserAPI;
