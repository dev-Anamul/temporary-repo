import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {navigate} from '../../components/navigation-ref/navigation';
import {setData} from '../../utils/local-storage/local-storage';
import {apiSlice} from '../api/api-slice';
import {logOutState, loginState} from '../check-login/check-login-slice';

export const loginSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Login
    login: builder.mutation({
      query: data => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: [
        'Expense',
        'BarChart',
        'LineChart',
        'Dashboard',
        'Pie',
        '7daysIncome',
        '30daysIncome',
        'Income',
        'DExpense',
        'DIncome',
      ],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          if (result.data?.data?.user?.status === 'pending') {
            setData('user', result.data?.data?.user);
            navigate('NoAccess');

            // ! Update Local Storage
            setData('5daysList', 'true');
            setData('incomeChart', 'true');
            setData('overview7Days', 'true');
          } else {
            dispatch(
              loginState({
                token: result.data?.data?.access_token,
                user: result.data?.data?.user,
              }),
            );
            navigate('Dashboard');
            setData('userToken', result.data?.data?.access_token);
            Toast.show({
              type: 'success',
              text1: 'Success',
              text2: 'Login Successful',
            });
          }
        } catch (error) {
          console.log(error?.error);
          Toast.show({
            type: 'error',
            text1: 'Opps, could not login',
            text2: error?.error?.data?.message,
          });
          dispatch(logOutState());
        }
      },
    }),

    // Forgot Password
    forgotPassword: builder.mutation({
      query: data => {
        return {
          url: '/auth/forgot-password',
          method: 'POST',
          body: data,
        };
      },
      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Please check your email',
          });
          console.log(result);
        } catch (error) {
          console.log(error?.error);
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: error?.data?.errors,
          });
        }
      },
    }),

    // Create a new account
    createUser: builder.mutation({
      query: data => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          navigate('Login');
          setData('user', result.data?.data?.user);
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Account Created',
          });
          console.log(result);
        } catch (err) {
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: err.error.data.message,
          });
          console.log(err);
        }
      },
    }),

    // Get User Data
    getUser: builder.query({
      query: () => ({
        url: '/auth/profile',

        method: 'GET',
      }),
      invalidatesTags: ['Dashboard', 'LineChart', 'BarChart', 'Pie'],
      providesTags: ['Profile'],
      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          dispatch(
            loginState({
              token: JSON.parse(await AsyncStorage.getItem('userToken')),
              user: result.data?.data?.user,
            }),
          );
          console.log('get profile response =>', result);
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // Update User Profile
    updateUserProfile: builder.mutation({
      query: data => ({
        url: '/auth/update-profile',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Profile'],

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          // navigate('Profile');

          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Account Updated',
          });
          console.log('update profile response =>', result);
        } catch (err) {
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: err.error.data.message,
          });
          console.log('update profile error =>', err);
        }
      },
    }),

    // Delete User Account
    deleteUserProfile: builder.mutation({
      query: () => ({
        url: '/auth/delete-profile',
        method: 'DELETE',
      }),

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          console.log(result);

          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Successful',
          });
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

    // Forgot Password throw email
    forgotPasswordWithEmail: builder.mutation({
      query: data => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          console.log(result);

          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Successful',
          });
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

    // Update password
    updatePassword: builder.mutation({
      query: data => ({
        url: '/auth/update-password',
        method: 'PATCH',
        body: data,
      }),

      async onQueryStarted(_data, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;
          // navigate('Profile');
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Password Update Success',
          });
          console.log(result);
        } catch (err) {
          Toast.show({
            type: 'error',
            text1: 'Opps',
            text2: err.error.data.message,
          });
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserProfileMutation,
  useUpdatePasswordMutation,
  useForgotPasswordWithEmailMutation,
  useDeleteUserProfileMutation,
} = loginSlice;
