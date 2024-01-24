import { apiSlice } from "../api/api-slice";

const notificationChannelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotificationChannels: builder.query({
      query: ({ search }) => {
        let query = "/?";
        if (search) {
          query = query + "search=" + search;
        }
        return { url: "api/v1/notifications/channels" + query, method: "GET" };
      },
      providesTags: ["NotificationChannels"],
    }),

    getPagesNotificationChannels: builder.query({
      query: ({ page }) => {
        let query = "/?";
        if (page) {
          query = query + "page=" + page;
        }

        return { url: "api/v1/notifications/channels" + query, method: "GET" };
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

      providesTags: ["NotificationChannels"],
    }),

    getNotificationChannel: builder.query({
      query: (id) => `api/v1/notifications/channels/${id}`,
      providesTags: (result, error, id) => [
        { type: "NotificationChannels", id },
      ],
    }),
    createNotificationChannel: builder.mutation({
      query: (data) => ({
        url: "api/v1/notifications/channels",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["NotificationChannels"],
    }),
    updateNotificationChannel: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/notifications/channels/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "NotificationChannels", id },
        "NotificationChannels",
      ],
    }),
    deleteNotificationChannel: builder.mutation({
      query: (id) => ({
        url: `api/v1/notifications/channels/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        console.log("arg", _arg);
        try {
          await queryFulfilled;
          dispatch(
            notificationChannelApi.util.updateQueryData(
              "getPagesNotificationChannels",
              undefined,
              (draft) => {
                console.log("draf", draft?.data);

                draft.data = draft?.data?.filter(
                  (channel) => channel._id != _arg
                );
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    channelUsers: builder.query({
      query: (id) => `api/v1/notifications/channels/${id}/users`,
      providesTags: (result, error, id) => [{ type: "ChannelUsers", id }],
    }),
    notifyChannelUsers: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/v1/notifications/channels/${id}/notify`,
        method: "POST",
        body: data,
      }),
    }),
    addUsersToChannel: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `api/v1/notifications/channels/${id}/users`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ChannelUsers", id },
        "ChannelUsers",
      ],
    }),
    removeUsersFromChannel: builder.mutation({
      query: ({ id, userId }) => ({
        url: `api/v1/notifications/channels/${id}/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "ChannelUsers", id },
        "ChannelUsers",
      ],
    }),
  }),
});

export const {
  useGetNotificationChannelsQuery,
  useGetNotificationChannelQuery,
  useCreateNotificationChannelMutation,
  useUpdateNotificationChannelMutation,
  useDeleteNotificationChannelMutation,
  useChannelUsersQuery,
  useAddUsersToChannelMutation,
  useRemoveUsersFromChannelMutation,
  useNotifyChannelUsersMutation,
  useGetPagesNotificationChannelsQuery,
} = notificationChannelApi;
