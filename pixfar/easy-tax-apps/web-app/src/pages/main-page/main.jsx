/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import useWindowWidth from "../../hooks/useWindow";

function MainPage() {
  const [toggle, setToggle] = useState(true);
  const w1200 = useWindowWidth(1200);
  const ref = useRef();
  const router = useLocation();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (w1200) {
          setToggle(true);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, w1200]);

  useEffect(() => {
    if (w1200) {
      setToggle(true);
    }
  }, [router.pathname, w1200]);

  return (
    <>
      <div ref={ref}>
        <Header toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="flex justify-between h-[100%]">
        <div
          ref={ref}
          style={{
            width: toggle ? (!w1200 ? "270px" : "0") : "270px",
            transition: "0.3s",

            position: w1200 && "fixed",
          }}
          className={`overflow-y-auto header_bg z-40 dark:bg-slate-800`}
        >
          <Sidebar />
        </div>
        <div
          className="p-5 pt-[85px] h-[100vh] overflow-y-auto bg-white dark:bg-gray-800 "
          style={{
            width: "100%",
            transition: "0.3s",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainPage;
