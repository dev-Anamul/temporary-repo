import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {getData} from '../../utils/local-storage/local-storage';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: async (headers, {getState, endpoint}) => {
      headers.set(
        'Authorization',
        `Bearer ${JSON.parse(await getData('userToken'))}`,
      );
      return headers;
    },
  }),
  tagTypes: [
    'Profile',
    'Expense',
    'Dashboard',
    'LineChart',
    'BarChart',
    'Pie',
    'Notification',
    'singleNotification',
    'Income',
    '7daysIncome',
    '30daysIncome',
    'DIncome',
    'DExpense',
    'FiscalYears',
    'taxData',
    'Assets',
  ],
  endpoints: builder => ({}),
});
