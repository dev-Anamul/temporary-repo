import { apiSlice } from "../api/api-slice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query({
      query: () => "/api/v1/admin/dashboard",
    }),

    getDailyIncomeExpense: builder.query({
      query: () =>
        `/api/v1/admin/dashboard/daily-income-expense?numOfDays=7000`,
    }),
    monthlyIncomeExpense: builder.query({
      query: () =>
        `/api/v1/admin/dashboard/monthly-income-expense?numOfMonths=11`,
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetDailyIncomeExpenseQuery,
  useMonthlyIncomeExpenseQuery,
} = dashboardApi;
