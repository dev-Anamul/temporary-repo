import { defaultConfig } from "../../config/default";
import { apiSlice } from "../api/api-slice";

export const expenseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: ({ page }) => {
        let query = "/?";

        if (page) {
          query = query + "&page=" + page;
        }

        return {
          url: "api/v1/admin/expenses" + query,
          method: "GET",
          params: {
            expand: "userId,expenseType",
            limit: defaultConfig.limit,
          },
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

      providesTags: ["Expenses"],
    }),

    getSearchExpenses: builder.query({
      query: ({
        search,
        expenseType,
        status,
        isGSTClaimable,
        fiscalYear,
        page,
        limit,
      }) => {
        let query = "/?";

        if (search) {
          query = query + "search=" + search;
        }

        if (expenseType) {
          query = query + "&expenseType=" + expenseType;
        }

        if (status) {
          query = query + "&status=" + status;
        }

        if (isGSTClaimable) {
          query = query + "&isGSTClaimable=" + isGSTClaimable;
        }

        if (fiscalYear) {
          query = query + "&fiscalYear=" + fiscalYear;
        }

        if (page) {
          query = query + "&page=" + page;
        }

        if (limit) {
          query = query + "&limit=" + limit;
        }

        return {
          url: "api/v1/admin/expenses" + query,
          method: "GET",
          params: {
            expand: "userId,expenseType",
          },
        };
      },

      providesTags: ["Expenses"],
    }),

    getExpense: builder.query({
      query: (id) => `api/v1/expenses/${id}`,
      providesTags: (result, error, id) => [{ type: "Expenses", id }],
    }),

    createExpense: builder.mutation({
      query: (data) => ({
        url: "api/v1/expenses",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expenses"],

      // pessimistic cache update
      // todo: future implementation
      // async onQueryStarted(_data, { dispatch, queryFulfilled }) {
      //   try {
      //     const res = await queryFulfilled;
      //     dispatch(
      //       apiSlice.util.updateQueryData("getExpenses", undefined, (draft) => {
      //         draft?.data?.unshift(res.data?.data);
      //       })
      //     );
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
    }),
    updateExpense: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `api/v1/expenses/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [
        "Expenses",
        { type: "Expenses", id },
        "Notifications",
      ],

      // optimistic cache update
      // todo: future implementation
      // async onQueryStarted(_data, { dispatch, queryFulfilled }) {
      //   console.log(" _data", _data);

      //   // update cache
      //   const updateResult = dispatch(
      //     apiSlice.util.updateQueryData("getExpenses", undefined, (draft) => {
      //       const expense = draft?.data?.find(
      //         (expense) => expense.id == _data.id
      //       );
      //       if (expense) {
      //         Object.assign(expense, _data);
      //       }
      //     })
      //   );

      //   try {
      //     await queryFulfilled;
      //   } catch (error) {
      //     // undo optimistic cache update on error
      //     updateResult.undo();
      //   }
      // },
    }),
    deleteExpense: builder.mutation({
      query: (id) => ({
        url: `api/v1/expenses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expenses"],

      // todo: this is implemented with infinite scroll
      // pessimistic cache update
      /*
      async onQueryStarted(_data, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getExpenses", undefined, (draft) => {
              const index = draft?.data?.findIndex(
                (expense) => expense.id == _data
              );
              if (index !== -1) {
                draft?.data?.splice(index, 1);
              }
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    */
    }),
    downloadCsv: builder.query({
      query: () => {
        return {
          url: "api/v1/expenses/csv",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetExpenseQuery,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
  useDownloadCsvQuery,
  useGetSearchExpensesQuery,
} = expenseApi;
