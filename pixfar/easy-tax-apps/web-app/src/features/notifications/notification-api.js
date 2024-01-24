import { apiSlice } from "../api/api-slice";

export const notificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    notifyAll: builder.mutation({
      query: ({ data }) => ({
        url: "api/v1/notifications/users/all",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Notifications", "NotificationsAlert"],
    }),
    notifySingle: builder.mutation({
      query: ({ data, userId }) => ({
        url: "api/v1/notifications/users/" + userId,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notifications", "NotificationsAlert"],
    }),
    notifySelected: builder.mutation({
      query: ({ data }) => ({
        url: "api/v1/notifications/users/many",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notifications", "NotificationsAlert"],
    }),
    getNotifications: builder.query({
      query: ({ search }) => {
        let query = "/?";

        if (search) {
          query = query + "search=" + search;
        }
        return {
          url: "api/v1/admin/notifications" + query,
          method: "GET",
        };
      },
      providesTags: ["Notifications"],
    }),

    getNotificationsPage: builder.query({
      query: ({ page }) => {
        let query = "/?";

        if (page) {
          query = query + "page=" + page;
        }

        return {
          url: "api/v1/admin/notifications" + query,
          method: "GET",
        };
      },

      serializeQueryArgs: ({ queryArgs }) => {
        const newQueryArgs = { ...queryArgs };

        if (newQueryArgs.page) {
          delete newQueryArgs.page;
        }

        return newQueryArgs;
      },

      merge: (currentCache, newCache) => {
        return {
          ...currentCache,
          data: [...currentCache.data, ...newCache.data],
          links: newCache.links,
          pagination: newCache.pagination,
        };
      },

      providesTags: ["Notifications"],
    }),
    getNotificationsAlert: builder.query({
      query: () => {
        return {
          url: "api/v1/admin/notifications",
          method: "GET",
          params: {
            limit: 5,
            page: 1,
          },
        };
      },
      providesTags: ["NotificationsAlert"],
    }),
    getNotification: builder.query({
      query: (id) => `api/v1/admin/notifications/${id}`,
      providesTags: (result, error, id) => [{ type: "Notifications", id }],
    }),

    readNotification: builder.mutation({
      query: (id) => ({
        url: `api/v1/notifications/${id}/read`,
        method: "PATCH",
        body: {
          read: true,
        },
      }),

      // update notifications cache
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const updated = await queryFulfilled;

          dispatch(
            notificationApi.util.updateQueryData(
              "getNotificationsPage",
              undefined,
              (draft) => {
                draft.data = draft?.data?.map((notification) => {
                  if (
                    notification._id === updated?.data?.data?.notification?._id
                  ) {
                    console.log("notification", notification._id);
                    notification.read = true;
                  }
                  return notification;
                });
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: ["NotificationsAlert"],
    }),
  }),
});

export const {
  useNotifyAllMutation,
  useNotifySingleMutation,
  useNotifySelectedMutation,
  useGetNotificationsQuery,
  useGetNotificationQuery,
  useGetNotificationsPageQuery,
  useGetNotificationsAlertQuery,
  useReadNotificationMutation,
} = notificationApi;
