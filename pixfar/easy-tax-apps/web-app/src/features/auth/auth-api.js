import { retrieveCookie } from "../../utils/manage-cookie";
import { apiSlice } from "../api/api-slice";
import { login, logout } from "./auth-slice";

const authAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "api/v1/auth/signup",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(login(result.data?.data));
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "api/v1/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(login(result.data?.data));
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      },
    }),

    getProfile: builder.query({
      query: () => ({
        url: "api/v1/auth/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${retrieveCookie("token")}`,
        },
      }),

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            login({
              access_token: retrieveCookie("token"),
              user: result.data?.data?.user,
            })
          );
        } catch (error) {
          dispatch(logout());
        }
      },
    }),

    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: `api/v1/auth/update-profile`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${retrieveCookie("token")}`,
        },
      }),

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            login({
              user: result.data?.data?.user,
              access_token: retrieveCookie("token"),
            })
          );
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      },
    }),

    updatePassword: builder.mutation({
      query: ({ data }) => ({
        url: `api/v1/auth/update-password`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${retrieveCookie("token")}`,
        },
      }),

      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      },
    }),

    forgotPassword: builder.mutation({
      query: ({ data }) => ({
        url: `api/v1/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ data }) => ({
        url: `api/v1/auth/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetProfileQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authAPI;
