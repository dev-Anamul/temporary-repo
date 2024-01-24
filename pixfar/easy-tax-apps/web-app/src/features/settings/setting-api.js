import { apiSlice } from "../api/api-slice";

export const settingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => "api/v1/settings",
      providesTags: ["Settings"],
    }),
    updateSettings: builder.mutation({
      query: (body) => ({
        url: `api/v1/settings/`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Settings"],
    }),
  }),
});

export const { useGetSettingsQuery, useUpdateSettingsMutation } = settingApi;
