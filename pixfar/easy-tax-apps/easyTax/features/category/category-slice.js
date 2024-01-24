import {apiSlice} from '../api/api-slice';

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // Get Expense Category
    getCategories: builder.query({
      query: () => {
        return {
          url: '/categories?page=1&limit=100&order=desc',
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
  }),
});

export const {useGetCategoriesQuery} = categorySlice;
