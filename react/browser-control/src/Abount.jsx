import React, { useEffect } from "react";

const Abount = () => {
  useEffect(() => {
    const handleBackButton = (event) => {
      // Your custom back button logic
      event.preventDefault();
      // Perform your custom action
      console.log("Custom back button action");
      alert("Custom back button action");
      // You can navigate programmatically using window.location or react-router-dom
    };

    const handleReloadButton = (event) => {
      // Your custom reload button logic
      event.preventDefault();
      // Perform your custom action
      console.log("Custom reload button action");
      // You can reload the page programmatically
      window.location.reload();
    };

    // window.history.forward();

    // Attach custom event listeners
    window.addEventListener("popstate", handleBackButton);
    window.addEventListener("beforeunload", handleReloadButton);

    return () => {
      // Remove event listeners on component unmount
      window.removeEventListener("popstate", handleBackButton);
      window.removeEventListener("beforeunload", handleReloadButton);
    };
  }, []);
  return <div>Abount</div>;
};

export default Abount;
