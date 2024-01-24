import { apiSlice } from "../api/api-slice";

export const supportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSupport: builder.query({
      query: ({ type }) => {
        let query = "/?";

        if (type) {
          query += `type=${type}`;
        }

        return {
          url: "/api/v1/support-messages" + query,
          method: "GET",
        };
      },
      providesTags: ["Support"],
    }),

    sendReply: builder.mutation({
      query: ({ id, reply }) => ({
        url: `/api/v1/support-messages/${id}/reply`,
        method: "POST",
        body: reply,
      }),
      invalidatesTags: ["Support"],
    }),

    marksAsRead: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/support-messages/${id}/read`,
        method: "POST",
      }),
      invalidatesTags: ["Support"],
    }),

    makeFeatured: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/support-messages/${id}/featured`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Support"],
    }),
  }),
});

export const {
  useGetSupportQuery,
  useSendReplyMutation,
  useMakeFeaturedMutation,
  useMarksAsReadMutation,
} = supportApi;
