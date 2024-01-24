import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Abount from "./Abount";
import Contact from "./Contact";
import Blog from "./Blog";
import Post from "./Post";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={reactLogo}
              alt="React Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />{" "}
            React Router
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
