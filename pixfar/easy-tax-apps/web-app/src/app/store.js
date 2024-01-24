import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/api-slice";
import authReducer from "../features/auth/auth-slice";
import modalReducer from "../features/modal/modal-slice";
import ocrReducer from "../features/ocr-expense/ocr-expense-slice";
import supportSlice from "../features/support/support-slice";
import userReducer from "../features/users/users-slice";

export const store = configureStore({
  // Add the api reducer.
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    modal: modalReducer,
    ocrExpense: ocrReducer,
    user: userReducer,
    support: supportSlice,
  },

  // Enable Redux DevTools in development mode.
  devTools: import.meta.env.NODE_ENV !== "production",

  // Add the api middleware.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
