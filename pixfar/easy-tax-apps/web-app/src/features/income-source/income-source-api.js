import { apiSlice } from "../api/api-slice";

export const incomeSourceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomeSources: builder.query({
      query: ({
        search,
        incomeSource,
        incomeType,
        fiscalYear,
        page,
        limit,
      }) => {
        let queryStr = "/?";

        if (search) {
          queryStr += `search=${search}`;
        }

        if (incomeSource) {
          queryStr += `&incomeSource=${incomeSource}`;
        }

        if (incomeType) {
          queryStr += `&incomeType=${incomeType}`;
        }

        if (fiscalYear) {
          queryStr += `&fiscalYear=${fiscalYear}`;
        }

        if (page) {
          queryStr += `&page=${page}`;
        }

        if (limit) {
          queryStr += `&limit=${limit}`;
        }

        return {
          url: "api/v1/admin/income-sources" + queryStr,
          method: "GET",
        };
      },
      providesTags: ["IncomeSources"],
    }),

    // todo: not used
    getIncomeSource: builder.query({
      query: (id) => `api/v1/income-sources/${id}`,
    }),
    createIncomeSource: builder.mutation({
      query: (data) => ({
        url: "api/v1/income-sources",
        method: "POST",
        body: data,
      }),
    }),
    updateIncomeSource: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/income-sources/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "IncomeSources", id },
        "IncomeSources",
        "Notifications",
      ],
    }),
    deleteIncomeSource: builder.mutation({
      query: (id) => ({
        url: `api/v1/income-sources/${id}`,
        method: "DELETE",
      }),
    }),
    downloadIncomeCsv: builder.query({
      query: () => ({
        url: `api/v1/income-sources/csv`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetIncomeSourcesQuery,
  useGetIncomeSourceQuery,
  useCreateIncomeSourceMutation,
  useUpdateIncomeSourceMutation,
  useDeleteIncomeSourceMutation,
  useDownloadCsvQuery,
} = incomeSourceApi;
