import React from "react";
import { Minus, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <nav className="w-full draggable h-12 bg-gray-700" />
      <div className="absolute top-2 left-3 no-drag">
        <h1 className="text-lg">Logo</h1>
      </div>
      <div className="flex gap-1 absolute top-3.5 right-3 z-50 no-drag">
        <div className="p-1 w-5 h-5 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all cursor-pointer">
          <Minus size={13} />
        </div>
        <div className="p-1 w-5 h-5 rounded-full flex justify-center items-center hover:bg-gray-500 transition-all cursor-pointer">
          <X size={20} />
        </div>
      </div>
      <div className="mt-3">
        <ul className="flex gap-3 px-2">
          <Link
            to="/"
            className="bg-slate-700 rounded-sm px-4 py-1 inline-block cursor-pointer hover:bg-slate-600 text-sm"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-slate-700 rounded-sm px-4 py-1 inline-block cursor-pointer hover:bg-slate-600 text-sm"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="bg-slate-700 rounded-sm px-4 py-1 inline-block cursor-pointer hover:bg-slate-600 text-sm"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="bg-slate-700 rounded-sm px-4 py-1 inline-block cursor-pointer hover:bg-slate-600 text-sm"
          >
            Blog
          </Link>
          <button
            onClick={handleButtonClicked}
            className="bg-slate-700 rounded-sm px-4 py-1 inline-block cursor-pointer hover:bg-slate-600 text-sm"
          >
            Dashboard
          </button>
        </ul>
      </div>

      {children}
    </>
  );
};

export default Layout;
