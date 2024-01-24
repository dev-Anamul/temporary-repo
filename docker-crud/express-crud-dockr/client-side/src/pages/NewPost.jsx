import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

function NewPost() {
  const [post, setPost] = React.useState({
    title: "",
    description: "",
    author: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/");
        setPost({
          title: "",
          description: "",
          author: "",
        });
      });
  };

  return (
    <div>
      <PostForm
        post={post}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewPost;
