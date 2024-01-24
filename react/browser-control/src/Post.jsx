import React, { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    const handleBackButton = (event) => {
      // Your custom back button logic
      event.preventDefault();
      // Perform your custom action
      history.pushState(null, null, document.URL);
    };

    const handleReloadButton = (event) => {
      // Your custom reload button logic
      event.preventDefault();
      // Perform your custom action
      console.log("Custom reload button action");
      // You can reload the page programmatically
      window.location.reload();
    };

    // Attach custom event listeners
    window.addEventListener("popstate", handleBackButton);
    window.addEventListener("beforeunload", handleReloadButton);

    return () => {
      // Remove event listeners on component unmount
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("beforeunload", handleReloadButton);
    };
  }, []);
  return <div>Post</div>;
};

export default Post;
