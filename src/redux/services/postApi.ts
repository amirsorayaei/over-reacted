import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Post } from "@/src/types/types";

/**
 * Create APIs for posts
 */
export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
