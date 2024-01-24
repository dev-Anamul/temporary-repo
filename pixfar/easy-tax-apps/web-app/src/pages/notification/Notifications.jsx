import { useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../../components/form-element/Button";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import InfinityScroll from "../../components/infinity-scroll/InfinityScroll";
import NotificationItems from "../../components/notification-items/NotificationItems";
import useNotifications from "../../hooks/useNotifications";
import useWindowWidth from "../../hooks/useWindow";

function Notifications() {
  const {
    handleHeaderModalClose,
    handlePageChange,
    handleSearch,
    isHeaderModalOpen,
    navigate,
    data: notifications,
    page,
  } = useNotifications();
  const { pathname } = useLocation();
  const [showNotification, setShowNotification] = useState(false);

  const w1550 = useWindowWidth(1550);
  const w1450 = useWindowWidth(1450);
  const w800 = useWindowWidth(800);
  const w650 = useWindowWidth(650);

  // notification card
  const content =
    notifications?.data?.length > 0 &&
    notifications?.data?.map((item) => (
      <NotificationItems
        key={item.id}
        notificationId={item._id}
        notification={item}
        setShowNotification={setShowNotification}
      />
    ));

  return (
    <div className="flex flex-col gap-3">
      <div>
        {isHeaderModalOpen && (
          <HeaderModal
            title="Notifications"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div
        className={`flex justify-between items-center w-full ${
          w650 && "flex-col"
        }`}
      >
        {w800 && (
          <div className="flex gap-5">
            {showNotification && (
              <Button
                text="Back"
                Icon={() => <ArrowLeftCircle size={18} />}
                handler={() => setShowNotification(false)}
                className="mt-2"
              />
            )}
            {w650 && (
              <div>
                <Button
                  text="Channel"
                  Icon={() => <ArrowRightCircle size={18} />}
                  handler={() => navigate("/notification-channel")}
                  className="mt-2"
                />
              </div>
            )}
          </div>
        )}
        {/* {showNotification && w650 && (
          <Button
            text="Back"
            Icon={() => <ArrowLeftCircle size={18} />}
            handler={() => setShowNotification(false)}
            className="mt-1"
          />
        )} */}
        <div className={w650 ? "w-full" : w800 ? "w-[60%]" : "w-1/4"}>
          <Search
            name="search"
            key="notification_search"
            handleChange={(e) => handleSearch(e.target.value)}
            placeholder={"Search"}
          />
        </div>
        {!w650 && (
          <div>
            <Button
              text="Channel"
              Icon={() => <ArrowRightCircle size={18} />}
              handler={() => navigate("/notification-channel")}
              className="mt-2"
            />
          </div>
        )}
      </div>
      <div className="flex justify-start gap-4 w-full">
        {!showNotification && w800 && (
          <div
            id="fetch_more_notifications"
            className={`${
              w800
                ? "w-full"
                : w1450
                ? "w-[40%]"
                : w1550
                ? "w-[30%]"
                : "w-[25%]"
            } header_bg dark:bg-slate-800 dark:border-slate-700 rounded-md border_stroke   overflow-x-auto ${
              isHeaderModalOpen ? "h-[73vh]" : "h-[78vh]"
            }`}
          >
            {notifications?.data?.length > 0 && (
              <InfinityScroll
                length={notifications?.data?.length}
                handlePageChange={handlePageChange}
                totalPages={notifications?.pagination?.totalPages}
                page={page}
                divId={"fetch_more_notifications"}
                key={"fetch_more_notifications"}
              >
                {content}
              </InfinityScroll>
            )}
            {notifications?.data?.length <= 0 && (
              <div className="flex justify-center w-full">
                <p className="text-white text-center bg-slate-500 py-3 w-full rounded">
                  Notification Not Found
                </p>
              </div>
            )}
          </div>
        )}
        {!w800 && (
          <div
            id="fetch_more_notifications"
            className={`${
              w1450 ? "w-[40%]" : w1550 ? "w-[30%]" : "w-[25%]"
            } header_bg dark:bg-slate-800 dark:border-slate-700 rounded-md border_stroke flex flex-col justify-start items-start alert overflow-y-auto ${
              isHeaderModalOpen ? "h-[73vh]" : "h-[78vh]"
            }`}
          >
            {notifications?.data?.length > 0 && (
              <InfinityScroll
                length={notifications?.data?.length}
                handlePageChange={handlePageChange}
                totalPages={notifications?.pagination?.totalPages}
                page={page}
                divId={"fetch_more_notifications"}
                key={"fetch_more_notifications"}
              >
                {content}
              </InfinityScroll>
            )}
            {notifications?.data?.length <= 0 && (
              <div className="flex justify-center w-full">
                <p className="text-white text-center bg-slate-500 py-3 w-full rounded">
                  Notification Not Found
                </p>
              </div>
            )}
          </div>
        )}

        {!w800 && (
          <div
            className={`self-start ${
              w1450 ? "w-[55%]" : w1550 ? "w-[65%]" : "w-[70%]"
            }`}
          >
            {pathname === "/notifications" ? (
              <div className="flex justify-center items-center h-[600px] border rounded-lg border-dashed ">
                <div>
                  <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 ">
                    Notifications
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Click on the notification to view details
                  </p>
                </div>
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        )}
        {w800 && showNotification && (
          <div className={`self-start w-full`}>
            {pathname === "/notifications" ? (
              <div className="flex justify-center items-center h-[600px] border rounded-lg border-dashed ">
                <div>
                  <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 ">
                    Notifications
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Click on the notification to view details
                  </p>
                </div>
              </div>
            ) : (
              <Outlet />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
