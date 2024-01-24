import { apiSlice } from "../api/api-slice";

const taxSlabApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTaxSlabs: builder.query({
      query: () => {
        return {
          url: "api/v1/tax-slabs",
          method: "GET",
        };
      },
      providesTags: ["TaxSlabs"],
    }),
    getTaxSlab: builder.query({
      query: (id) => `api/v1/tax-slabs/${id}`,
      providesTags: (result, error, id) => [{ type: "TaxSlabs", id }],
    }),
    createTaxSlab: builder.mutation({
      query: (data) => ({
        url: "api/v1/tax-slabs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TaxSlabs"],
    }),
    updateTaxSlab: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/tax-slabs/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "TaxSlabs", id },
        "TaxSlabs",
      ],
    }),
    deleteTaxSlab: builder.mutation({
      query: (id) => ({
        url: `api/v1/tax-slabs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "TaxSlabs", id },
        "TaxSlabs",
      ],
    }),
  }),
});

export const {
  useGetTaxSlabsQuery,
  useGetTaxSlabQuery,
  useCreateTaxSlabMutation,
  useUpdateTaxSlabMutation,
  useDeleteTaxSlabMutation,
} = taxSlabApi;
