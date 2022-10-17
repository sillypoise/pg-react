import { useAppDistpatch, useAppSelector } from "../reduxApp/hooks";
import {
  useFetchPostQuery,
  useFetchPostsQuery,
} from "../features/posts/postsAPISlice";
import { useState } from "react";

export function RTKQuery() {
  const [postId, setPostId] = useState(10);
  const { data = [], isFetching } = useFetchPostsQuery();
  const {
    data: post = [],
    isFetching: isFetchingPost,
    isLoading: isLoadingPost,
  } = useFetchPostQuery(postId);

  console.log(post[0]);

  return (
    <>
      <h2>RTK Query Example</h2>
      <p>Fetching Posts!</p>
      <p>Number of posts fetch:{data.length} </p>

      <div>
        <p>Selected Post to fetch: {postId}</p>
        <select
          value={postId}
          onChange={(e) => setPostId(Number(e.target.value))}
        >
          {[...Array(100)].map((_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      {isFetchingPost ? (
        <p>Loading...⏰</p>
      ) : (
        <div>
          <h3>{post[0]?.title}</h3>
          <p>Written by user: {post[0]?.userId}</p>
          <p>{post[0]?.body}</p>
        </div>
      )}
      <br />
      <h2>All Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.userId}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
