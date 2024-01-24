import React from "react";

function PostCard({ post }) {
  return (
    <div className="shadow p-3 space-y-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <p>{post.description.substring(0, 400)}....</p>
      <div>
        <p>
          Posted by{" "}
          <span className="italic capitalize">
            {" "}
            {post?.author?.name || "Unknown author"}
          </span>{" "}
          , 34 minutes ago
        </p>
      </div>
    </div>
  );
}

export default PostCard;
