/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

function PostList({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, [userId]);

  return (
    <div className="post_list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
