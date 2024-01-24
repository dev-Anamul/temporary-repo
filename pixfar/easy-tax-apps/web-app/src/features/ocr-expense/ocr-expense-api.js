import { apiSlice } from "../api/api-slice";

export const ocrExpenseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOcrExpense: builder.query({
      query: ({ search }) => {
        let query = "/?";
        if (search) {
          query = query + "search=" + search;
        }

        return {
          url: "api/v1/admin/ocr-expenses" + query,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetOcrExpenseQuery } = ocrExpenseApi;
