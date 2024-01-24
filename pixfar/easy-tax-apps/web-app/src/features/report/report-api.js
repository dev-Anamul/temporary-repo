import { apiSlice } from "../api/api-slice";

export const reportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialReport: builder.query({
      query: ({ fiscalId, userId }) => {
        let query = "/?";

        if (userId) {
          query += `userId=${userId}`;
        }

        if (fiscalId) {
          query += `&fiscal=${fiscalId}`;
        }

        return {
          url: "api/v1/ocr-expenses/report" + query,
          method: "GET",
        };
      },
    }),
    getExpenseSummaries: builder.query({
      query: ({ userId, fiscalId }) => {
        let query = "/?";

        if (userId) {
          query += `userId=${userId}`;
        }

        if (fiscalId) {
          query += `&fiscal=${fiscalId}`;
        }
        return {
          url: "api/v1/ocr-expenses" + query,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetFinancialReportQuery, useGetExpenseSummariesQuery } =
  reportApi;
