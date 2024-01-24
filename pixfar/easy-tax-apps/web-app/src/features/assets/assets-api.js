import { apiSlice } from "../api/api-slice";

const assetsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: (userId) => `api/v1/assets?expand=category&userId=${userId}`,
    }),
    getDepreciation: builder.query({
      query: (assetId) => `api/v1/assets/${assetId}/depreciation`,
    }),
  }),
});

export const { useGetAssetsQuery, useGetDepreciationQuery } = assetsApi;
