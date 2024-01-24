import {apiSlice} from '../api/api-slice';

export const dashboardSlices = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Get Expense Category

    getTotalOrTopExpense: builder.query({
      query: () => {
        return {
          url: '/dashboard',
          method: 'GET',
        };
      },
      providesTags: ['Dashboard'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    get7DaysData: builder.query({
      query: () => {
        return {
          url: '/dashboard/daily-expense',
          method: 'GET',
        };
      },

      providesTags: ['LineChart'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    getMonthlyExpense: builder.query({
      query: () => {
        return {
          url: '/dashboard/monthly-expense',
          method: 'GET',
        };
      },
      providesTags: ['BarChart'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    getAllCategoryExpense: builder.query({
      query: () => {
        return {
          url: '/expenses/total-by-category',
          method: 'GET',
        };
      },
      providesTags: ['Pie'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    get7DaysIncome: builder.query({
      query: () => {
        return {
          url: '/income-sources/daily-income',
          method: 'GET',
        };
      },
      providesTags: ['7daysIncome'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    get30DaysIncome: builder.query({
      query: () => {
        return {
          url: '/income-sources/monthly-income',
          method: 'GET',
        };
      },
      providesTags: ['30daysIncome'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    taxData: builder.query({
      query: id => {
        return {
          url: '/tax/users/' + id,
          method: 'GET',
        };
      },
      providesTags: ['taxData'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    getFiscalYears: builder.query({
      query: () => ({
        url: '/fiscal-years',
        method: 'GET',
      }),
      providesTags: ['FiscalYears'],
    }),

    getFinancialReport: builder.query({
      query: ({fiscalId, userId}) => {
        let query = '/?';

        if (fiscalId) {
          query += `&fiscal=${fiscalId}`;
        }

        if (userId) {
          query += `userId=${userId}`;
        }

        return {
          url: '/ocr-expenses/report' + query,
          method: 'GET',
        };
      },
    }),
    getExpenseSummaries: builder.query({
      query: ({userId, fiscalId}) => {
        let query = '/?';

        if (fiscalId) {
          query += `&fiscal=${fiscalId}`;
        }

        if (userId) {
          query += `userId=${userId}`;
        }

        return {
          url: '/ocr-expenses' + query,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetTotalOrTopExpenseQuery,
  useGet7DaysDataQuery,
  useGetMonthlyExpenseQuery,
  useGetAllCategoryExpenseQuery,
  useGet7DaysIncomeQuery,
  useGet30DaysIncomeQuery,
  useTaxDataQuery,
  useGetFinancialReportQuery,
  useGetExpenseSummariesQuery,
  useGetFiscalYearsQuery,
} = dashboardSlices;
