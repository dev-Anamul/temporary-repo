import { apiSlice } from "../api/api-slice";

const taxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserTax: builder.query({
      query: ({ id }) => `api/v1/tax/users/${id}`,
    }),
  }),
});

export const { useGetUserTaxQuery } = taxApi;
