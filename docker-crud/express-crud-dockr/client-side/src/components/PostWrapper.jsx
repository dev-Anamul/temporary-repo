import React from "react";
import PostCard from "./PostCard";

function PostWrapper({ posts }) {
  return (
    <div className="w-1/2 mx-auto space-y-5">
      {posts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostWrapper;
