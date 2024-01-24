import Toast from 'react-native-toast-message';
import {apiSlice} from '../api/api-slice';
import {navigate} from '../../components/navigation-ref/navigation';

export const supportSlices = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postSupport: builder.mutation({
      query: data => {
        return {
          url: '/support-messages',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: [],

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
  }),
});

export const {usePostSupportMutation} = supportSlices;
