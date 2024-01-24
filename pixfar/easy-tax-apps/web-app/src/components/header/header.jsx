/* eslint-disable react/prop-types */
import { useState } from "react";
import { AlignJustify, LogOut, Settings, User } from "react-feather";
import { Toaster } from "react-hot-toast";
import { FaBell, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/auth-slice";
import { useGetNotificationsAlertQuery } from "../../features/notifications/notification-api";
import useWindowWidth from "../../hooks/useWindow";
import { removeCookie } from "../../utils/manage-cookie";
import Logo from "../logo/logo";
import NotificationItems from "../notification-items/NotificationItems";

function Header({ toggle, setToggle }) {
  const [userMenu, setUserMenu] = useState(false);

  // get notifications
  const { data: notifications } = useGetNotificationsAlertQuery();

  // get data from redux store
  const { user } = useSelector((state) => state?.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const w1200 = useWindowWidth(1200);
  const w600 = useWindowWidth(600);

  const handleLogout = () => {
    removeCookie("token");
    dispatch(logout());
  };

  const handleProfileClick = () => {
    setUserMenu(false);
    navigate("/admin-profile");
  };

  return (
    <>
      <div className="py-2 px-5 header_bg dark:bg-slate-800 flex justify-between fixed top-0 w-full border-b border_stroke dark:border-gray-700 z-50 items-center">
        <div
          className={`flex items-center ${
            w600 ? "gap-5" : w1200 ? "gap-10" : "gap-24"
          }`}
        >
          <Logo className="w-[100px]" />
          {w1200 && toggle && (
            <AlignJustify
              size={22}
              className="cursor-pointer ml-3 header_text dark:text-white"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {w1200 && !toggle && (
            <FaTimes
              size={22}
              className="cursor-pointer ml-3 header_text dark:text-white"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        <div className="flex items-center gap-10">
          <div className="relative notification_bell">
            {notifications?.totalUnreadItems > 0 && (
              <div className="badge badge-error badge-xs absolute -top-3.5 -right-4 p-2">
                {notifications?.totalUnreadItems}
              </div>
            )}
            <FaBell
              size={25}
              className="text-base header_text cursor-pointer dark:text-white"
            />
            <div className="notification_box absolute top-auto right-0 border pb-3 w-[350px] mt-1 h-[400px] bg-white rounded  shadow-md translate-y-4">
              {notifications?.data?.length <= 0 && (
                <div className="flex justify-center items-center h-full w-full">
                  <div className="text-center">
                    <img
                      src="/notification-empty-state.svg"
                      className="w-[80px] m-auto"
                      alt=""
                    />
                    <b className="text-[#1b5276] mt-2 block">
                      No New Notifications
                    </b>
                    <p className="text-xs">
                      Looks like you haven’t received any notifications.
                    </p>
                  </div>
                </div>
              )}
              {notifications?.data?.length > 0 && (
                <>
                  <div className="h-[95%] overflow-auto">
                    <div className="p-3">
                      {notifications?.data?.map((item) => (
                        <NotificationItems
                          key={item.id}
                          notificationId={item._id}
                          notification={item}
                          setShowNotification={false}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-center pt-1">
                    <Link
                      to="/notifications"
                      className="text-sm text-green-500"
                    >
                      View All
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* <Swap /> */}
          <div className="relative">
            <img
              src={user?.avatar || "/icon-5359553_1280.webp"}
              className="h-[40px] w-[40px] rounded-full cursor-pointer border"
              alt=""
              onClick={() => setUserMenu(!userMenu)}
            />
            <div
              className={`w-[250px] border absolute right-0 mt-3 rounded transition-all duration-75  bg-white dark:bg-slate-800 shadow-lg dark:border-slate-700 ${
                userMenu
                  ? ""
                  : "mt-5 hidden opacity-0 transition-all duration-75"
              }`}
              style={{ transition: "1s" }}
            >
              <ul>
                <li>
                  <button
                    className="flex items-center gap-2 border-b p-4 dark:border-slate-700 text-black dark:text-white w-full"
                    onClick={handleProfileClick}
                  >
                    <User /> Profile
                  </button>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 border-b p-4 dark:border-slate-700 text-black dark:text-white"
                  >
                    <Settings /> Setting
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    to="/"
                    className="flex items-center gap-2 p-4 dark:border-slate-700 text-black dark:text-white"
                  >
                    <LogOut /> Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default Header;
