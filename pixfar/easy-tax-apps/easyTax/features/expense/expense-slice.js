import Toast from 'react-native-toast-message';
import {apiSlice} from '../api/api-slice';

export const expenseSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getExpenseList: builder.query({
      query: () => {
        return {
          url: '/expenses?page=1&limit=100&order=desc',
          method: 'GET',
        };
      }, // /expenses?page=1&limit=100&order=asc

      providesTags: ['Expense'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    expenseListForDashboard: builder.query({
      query: () => {
        return {
          url: '/expenses',
          method: 'GET',
        };
      },

      providesTags: ['DExpense'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    postExpense: builder.mutation({
      query: data => {
        return {
          url: '/expenses',
          method: 'POST',
          body: data,
          headers: 'multipart/form-data',
        };
      },
      invalidatesTags: [
        'Expense',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'DExpense',
        'FiscalYears',
        'taxData',
        'Assets',
      ],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Successful',
          });

          console.log(result);
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: error?.error?.data?.message,
          });
        }
      },
    }),

    // * Delete Expense
    deleteExpense: builder.mutation({
      query: id => {
        return {
          url: '/expenses/' + id,
          method: 'DELETE',
        };
      },
      invalidatesTags: [
        'Expense',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'DExpense',
        'FiscalYears',
        'taxData',
        'Assets',
      ],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Delete Success',
          });
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    // * Edit Expense
    editExpense: builder.mutation({
      query: obj => {
        return {
          url: '/expenses/' + obj.id,
          method: 'PATCH',
          body: obj.data,
        };
      },
      invalidatesTags: [
        'Expense',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'DExpense',
        'FiscalYears',
        'taxData',
        'Assets',
      ],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Edit Success',
          });
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    // * upload bulk expense
    bulkExpense: builder.mutation({
      query: data => {
        return {
          url: '/expenses/bulk',
          method: 'POST',
          body: data,
          headers: 'multipart/form-data',
        };
      },
      invalidatesTags: [
        'Expense',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'DExpense',
        'FiscalYears',
        'taxData',
        'Assets',
      ],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Successful',
          });

          console.log(result);
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: error?.error?.data?.message,
          });
        }
      },
    }),

    // * upload bulk expense
    getAsset: builder.query({
      query: () => {
        return {
          url: '/assets?order=desc',
          method: 'GET',
        };
      },

      providesTags: ['Assets'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    ///assets/{id}/depreciation
    getDepreciation: builder.query({
      query: id => {
        return {
          url: `/assets/${id}/depreciation`,
          method: 'GET',
        };
      },

      providesTags: ['Assets'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetExpenseListQuery,
  usePostExpenseMutation,
  useDeleteExpenseMutation,
  useExpenseListForDashboardQuery,
  useEditExpenseMutation,
  useBulkExpenseMutation,
  useGetAssetQuery,
  useGetDepreciationQuery,
} = expenseSlice;
