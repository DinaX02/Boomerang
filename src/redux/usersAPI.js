import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myUserAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ username, password }) => ({
        url: "user/login",
        method: "POST",
        body: { username, password },
      }),
      // transformResponse: (response) => {
      //   return {response};
      // },
    }),

    registerUser: builder.mutation({
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

    searchUser: builder.query({
      query: ({ username, page }) => ({
        url: "user/search",
        method: "GET",
        params: { username, page },
      }),
    }),

    seeUser: builder.query({
      query: ({ id } = {}) => ({
        url: `user${id ? `?id=${id}` : ''}`, 
        method: "GET",
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
  useRegisterUserMutation,
  useLogoutUserMutation,
  useSearchUserQuery,
  useSeeUserQuery,
  useEditUserMutation,
  useEditPasswordMutation,
  useDeleteUserMutation,
} = myUserAPI;

export default myUserAPI;