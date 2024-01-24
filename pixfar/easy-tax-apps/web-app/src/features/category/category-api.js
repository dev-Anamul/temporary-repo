import { apiSlice } from "../api/api-slice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ search, page, limit }) => {
        let query = "/?";
        if (search) {
          query = query + "search=" + search;
        }

        if (page) {
          query = query + "&page=" + page;
        }

        if (limit) {
          query = query + "&limit=" + limit;
        }

        return { url: "api/v1/categories" + query, method: "GET" };
      },

      providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (id) => `api/v1/categories/${id}`,
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "api/v1/categories",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Category"],

      // pessimistic cache update
      // async onQueryStarted(_data, { dispatch, queryFulfilled }) {
      //   try {
      //     const res = await queryFulfilled;
      //     console.log(res);
      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getCategories",
      //         undefined,
      //         (draft) => {
      //           draft?.data?.unshift(res.data?.data);
      //         }
      //       )
      //     );
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/categories/${id}`,
        method: "PATCH",
        body: patch,
      }),

      invalidatesTags: ["Category"],

      // async onQueryStarted(_data, { dispatch, queryFulfilled }) {
      //   // optimistic cache update
      //   const updateResult = dispatch(
      //     apiSlice.util.updateQueryData("getCategories", undefined, (draft) => {
      //       const category = draft?.data?.find(
      //         (category) => category.id == _data.id
      //       );
      //       if (category) {
      //         Object.assign(category, _data);
      //       }
      //     })
      //   );

      //   try {
      //     await queryFulfilled;
      //   } catch (error) {
      //     // undo optimistic cache update on error
      //     updateResult.undo();
      //   }
      // },
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `api/v1/categories/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Category"],

      // pessimistic cache update
      // async onQueryStarted(_data, { dispatch, queryFulfilled }) {
      //   try {
      //     await queryFulfilled;
      //     dispatch(
      //       apiSlice.util.updateQueryData(
      //         "getCategories",
      //         undefined,
      //         (draft) => {
      //           const index = draft?.data?.findIndex(
      //             (category) => category.id == _data
      //           );
      //           if (index !== undefined) {
      //             draft?.data?.splice(index, 1);
      //           }
      //         }
      //       )
      //     );
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
