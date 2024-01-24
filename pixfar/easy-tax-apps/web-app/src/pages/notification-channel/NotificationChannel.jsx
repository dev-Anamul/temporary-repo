import { useState } from "react";
import { ArrowLeft, PlusCircle } from "react-feather";
import { Outlet, useLocation } from "react-router-dom";
import ChannelItem from "../../components/channel-item/ChannelItem";
import Button from "../../components/form-element/Button";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import InfinityScroll from "../../components/infinity-scroll/InfinityScroll";
import useNotificationChannels from "../../hooks/useNotificationChannels";
import useWindowWidth from "../../hooks/useWindow";

function NotificationChannel() {
  const {
    handleHeaderModal,
    handlePageChange,
    handleSearch,
    headerModal,
    navigate,
    data: notificationsChannel,
    page,
  } = useNotificationChannels();
  const { pathname } = useLocation();
  const w1000 = useWindowWidth(1000);
  const w750 = useWindowWidth(750);
  const w700 = useWindowWidth(700);
  const w500 = useWindowWidth(500);

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div>
        {headerModal && (
          <HeaderModal
            title="Notification Channels"
            handleClose={handleHeaderModal}
          />
        )}
      </div>
      <div
        className={`flex ${
          w500 && "flex-col w-full"
        } gap-2 justify-between items-center w-full`}
      >
        {w500 && (
          <div className="flex items-center gap-5 w-full">
            {show && (
              <button
                onClick={() => setShow(false)}
                className="border h-[47px] w-[50px] mt-3 mb-1 rounded-md flex justify-center items-center "
              >
                <ArrowLeft size={15} />
              </button>
            )}

            <div className="w-full">
              <Button
                handler={() => navigate("/add-channel")}
                type="button"
                text="Add Channel"
                Icon={() => <PlusCircle size={18} />}
                className="mt-2 w-full"
              />
            </div>
          </div>
        )}
        <div className={w500 ? "w-full" : w750 ? "w-[60%]" : "w-1/5"}>
          <Search
            name="search"
            key="search"
            handleChange={(e) => handleSearch(e.target.value)}
            placeholder={"Search"}
          />
        </div>

        {!w500 && (
          <div>
            <Button
              handler={() => navigate("/add-channel")}
              type="button"
              text="Add Channel"
              Icon={() => <PlusCircle size={18} />}
              className="mt-2 w-[180px]"
            />
          </div>
        )}
      </div>

      <div className="flex justify-start gap-4 w-full">
        {!w700 && (
          <div
            id="fetch_more_channels"
            className={` ${
              w750 ? "w-[40%]" : w1000 ? "w-[30%]" : "w-[20%]"
            } header_bg dark:bg-slate-800 dark:border-slate-700 rounded-md border_stroke flex flex-col justify-start items-start alert overflow-y-auto ${
              headerModal ? "h-[72vh]" : "h-[78vh]"
            }`}
          >
            {notificationsChannel?.data?.length <= 0 ? (
              <>
                <h1 className="py-2 text-center bg-slate-200 text-black w-full rounded-md">
                  No Channel Here
                </h1>
              </>
            ) : (
              <InfinityScroll
                length={notificationsChannel?.data?.length}
                handlePageChange={handlePageChange}
                page={page}
                totalPages={notificationsChannel?.pagination?.totalPages}
                divId={"fetch_more_channels"}
              >
                {notificationsChannel?.data?.map((item) => (
                  <ChannelItem key={item?._id} channel={item} />
                ))}
              </InfinityScroll>
            )}
          </div>
        )}

        {w700 && !show && (
          <div
            id="fetch_more_channels"
            className={`w-[100%] header_bg dark:bg-slate-800 dark:border-slate-700 rounded-md border_stroke flex flex-col justify-start items-start alert overflow-y-auto ${
              headerModal ? "h-[72vh]" : "h-[78vh]"
            }`}
          >
            {notificationsChannel?.data?.length <= 0 ? (
              <>
                <h1 className="py-2 text-center bg-slate-200 text-black w-full rounded-md">
                  No Channel Here
                </h1>
              </>
            ) : (
              <InfinityScroll
                length={notificationsChannel?.data?.length}
                handlePageChange={handlePageChange}
                page={page}
                totalPages={notificationsChannel?.pagination?.totalPages}
                divId={"fetch_more_channels"}
              >
                {notificationsChannel?.data?.map((item) => (
                  <ChannelItem
                    key={item?._id}
                    channel={item}
                    setShow={setShow}
                  />
                ))}
              </InfinityScroll>
            )}
          </div>
        )}

        {w700 && show && (
          <div className="w-full">
            <Outlet />
          </div>
        )}
        {!w700 && (
          <div
            className={`self-start ${
              w750 ? "w-[60%]" : w1000 ? "w-[70%]" : "w-[80%]"
            } border p-5 rounded-md`}
          >
            {pathname !== "/notification-channel" && <Outlet />}
            {pathname === "/notification-channel" && (
              <div className="flex justify-center items-center h-[500px] ">
                <div>
                  <h2 className="text-2xl text-center font-semibold text-gray-800 dark:text-gray-200 ">
                    Notifications Channel
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Click on the notification Channel List
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationChannel;
