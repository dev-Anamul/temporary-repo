import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="my-3">{children}</main>
      <footer className="bg-gray-600 text-center py-2 text-white font-semibold text-lg">
        This is Footer
      </footer>
    </div>
  );
}

export default Layout;
