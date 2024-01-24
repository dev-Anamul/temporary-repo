import React from "react";
import PostWrapper from "../components/PostWrapper";

function Post() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/v1/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.posts);
      });
  }, []);
  console.log(posts);

  return <PostWrapper posts={posts} />;
}

export default Post;
