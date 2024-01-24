import {configureStore} from '@reduxjs/toolkit';
import checkLoginSlice from '../features/check-login/check-login-slice';
import reloadDataSlices from '../features/reload-data/reload-data-slices';
import {apiSlice} from '../features/api/api-slice';
import addExpenseSlices from '../features/expense/add-expense-slices';
import initialDataSlices from '../features/initial-data-slices/initial-data-slices';
import resetPasswordEmail from '../features/reset-password-email/reset-password-email';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    login: checkLoginSlice,
    reload: reloadDataSlices,
    expense: addExpenseSlices,
    initial: initialDataSlices,
    email: resetPasswordEmail,
  },
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
