import { apiSlice } from "../api/api-slice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ search, status, page, limit }) => {
        let query = "/?";
        if (search) {
          query = query + "search=" + search;
        }

        if (status) {
          query = query + "&status=" + status;
        }

        if (page) {
          query = query + "&page=" + page;
        }

        if (limit) {
          query = query + "&limit=" + limit;
        }

        return {
          url: "api/v1/admin/users" + query,
          method: "GET",
        };
      },
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `api/v1/admin/users/${id}`,
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "api/v1/admin/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/admin/users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Users", id },
        "Users",
      ],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `api/v1/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Users", id }, "Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
