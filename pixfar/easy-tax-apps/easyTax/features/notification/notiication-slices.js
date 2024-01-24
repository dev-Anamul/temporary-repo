import {apiSlice} from '../api/api-slice';

export const notificationSlices = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getNotifications: builder.query({
      query: page => {
        return {
          url: `/notifications?page=1&limit=${page}&order=dsc`,
          method: 'GET',
        };
      },
      providesTags: ['Notification'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    readNotification: builder.mutation({
      query: data => {
        return {
          url: `/notifications/${data?.id}/read`,
          method: 'PATCH',
          body: {read: data?.read},
        };
      },
      invalidatesTags: ['Notification'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log('Notification Read =>', result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    singleNotification: builder.query({
      query: id => {
        return {
          url: `/notifications/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['singleNotification'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log('Notification Read =>', result);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useReadNotificationMutation,
  useSingleNotificationQuery,
} = notificationSlices;
