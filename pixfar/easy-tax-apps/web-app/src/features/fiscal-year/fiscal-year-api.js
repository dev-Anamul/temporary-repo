import { apiSlice } from "../api/api-slice";

export const fiscalYearApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFiscalYears: builder.query({
      query: () => ({
        url: "api/v1/fiscal-years",
        method: "GET",
      }),
      providesTags: ["FiscalYears"],
    }),
    getFiscalYear: builder.query({
      query: (id) => `api/v1/fiscal-years/${id}`,
      providesTags: (result, error, id) => [{ type: "FiscalYears", id }],
    }),
    createFiscalYear: builder.mutation({
      query: (data) => ({
        url: "api/v1/fiscal-years",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["FiscalYears"],
    }),
    updateFiscalYear: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/v1/fiscal-years/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "FiscalYears", id },
        "FiscalYears",
      ],
    }),
    deleteFiscalYear: builder.mutation({
      query: (id) => ({
        url: `api/v1/fiscal-years/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "FiscalYears", id },
        "FiscalYears",
      ],
    }),
  }),
});

export const {
  useGetFiscalYearsQuery,
  useGetFiscalYearQuery,
  useCreateFiscalYearMutation,
  useUpdateFiscalYearMutation,
  useDeleteFiscalYearMutation,
} = fiscalYearApi;
