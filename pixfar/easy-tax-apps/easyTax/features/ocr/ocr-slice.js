import Toast from 'react-native-toast-message';
import {apiSlice} from '../api/api-slice';

export const ocrSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getOcr: builder.query({
      query: () => {
        return {
          url: '/ocr-expenses',
          method: 'GET',
        };
      },

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          console.log(result);
        } catch (err) {
          console.log(err);
        }
      },
    }),

    postOcr: builder.mutation({
      query: data => {
        return {
          url: '/ocr-expenses',
          method: 'POST',
          body: data,
        };
      },

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          console.log(result);
        } catch (error) {
          console.log(error?.error);
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: error?.error?.data?.message,
          });
        }
      },
    }),
  }),
});

export const {useGetOcrQuery, usePostOcrMutation} = ocrSlice;
