import { apiSlice } from "../api/api-slice";

const incomeTypeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomeTypes: builder.query({
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

        return {
          url: "api/v1/income-types" + query,
          method: "GET",
        };
      },

      providesTags: ["IncomeTypes"],
    }),
    getIncomeType: builder.query({
      query: (id) => `api/v1/income-types/${id}`,
    }),
    addIncomeType: builder.mutation({
      query: (body) => ({
        url: "api/v1/income-types",
        method: "POST",
        body,
      }),
      invalidatesTags: ["IncomeTypes"],
    }),
    updateIncomeType: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/v1/income-types/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["IncomeTypes"],
    }),
    deleteIncomeType: builder.mutation({
      query: (id) => ({
        url: `api/v1/income-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["IncomeTypes"],
    }),
  }),
});

export const {
  useGetIncomeTypesQuery,
  useGetIncomeTypeQuery,
  useAddIncomeTypeMutation,
  useUpdateIncomeTypeMutation,
  useDeleteIncomeTypeMutation,
} = incomeTypeApi;
