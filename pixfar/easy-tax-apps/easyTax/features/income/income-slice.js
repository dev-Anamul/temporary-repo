import Toast from 'react-native-toast-message';
import {apiSlice} from '../api/api-slice';

export const incomeSlices = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postIncome: builder.mutation({
      query: data => {
        return {
          url: '/income-sources',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: [
        'Income',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'DIncome',
        'FiscalYears',
        'taxData',
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
          console.log(error?.error?.data);
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: error?.error?.data?.message,
          });
        }
      },
    }),

    // Get Income List
    getIncomeList: builder.query({
      query: () => {
        return {
          url: '/income-sources?page=1&limit=100&order=desc',
          method: 'GET',
        };
      },
      providesTags: ['Income'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (error) {
          console.log(error?.error?.data);
        }
      },
    }),

    deleteIncomeSource: builder.mutation({
      query: id => {
        return {
          url: '/income-sources/' + id,
          method: 'DELETE',
        };
      },
      invalidatesTags: [
        'Income',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        'DIncome',
        'FiscalYears',
        'taxData',
      ],
      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (error) {
          console.log(error?.error?.data);
        }
      },
    }),

    getDashboardIncomeList: builder.query({
      query: () => {
        return {
          url: '/income-sources',
          method: 'GET',
        };
      },
      providesTags: ['DIncome'],
      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (error) {
          console.log(error?.error?.data);
        }
      },
    }),

    getIncomeType: builder.query({
      query: () => {
        return {
          url: '/income-types?order=asc',
          method: 'GET',
        };
      },
      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (error) {
          console.log(error?.error?.data);
        }
      },
    }),
  }),
});

export const {
  usePostIncomeMutation,
  useGetIncomeListQuery,
  useGetDashboardIncomeListQuery,
  useDeleteIncomeSourceMutation,
  useGetIncomeTypeQuery,
} = incomeSlices;
