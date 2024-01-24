import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { retrieveCookie } from "../../utils/manage-cookie";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = retrieveCookie("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Users",
    "Expenses",
    "TaxSlabs",
    "NotificationChannels",
    "ChannelUsers",
    "Settings",
    "Support",
    "IncomeSources",
    "Notifications",
    "NotificationsAlert",
    "IncomeTypes",
  ],
});
