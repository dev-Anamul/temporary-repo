import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-green-600 text-center">
      <ul className="flex justify-center items-center space-x-3">
        <li>
          <Link
            to={"/"}
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            Post
          </Link>
        </li>
        <li>
          <Link
            to={"/new-post"}
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            New Post
          </Link>
        </li>
        <li>
          <a
            href="/"
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            Author List
          </a>
        </li>
        <li>
          <a
            href="/"
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            New author
          </a>
        </li>
        <li>
          <a
            href="/"
            className="inline-block py-2 px-4 hover:bg-green-700 font-semibold text-white text-lg"
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
