import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FAKE_API_KEY = "fakeApiKey123";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders(headers) {
      headers.set("x-api-key", FAKE_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchPosts: builder.query<Post[], void>({
        query() {
          return "/posts";
        },
      }),
      fetchPost: builder.query<Post[], number | void>({
        query(postId = 10) {
          return `/posts?id=${postId}`;
        },
      }),
    };
  },
});

export const { useFetchPostsQuery, useFetchPostQuery } = apiSlice;
