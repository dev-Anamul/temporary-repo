import PropTypes from "prop-types";
import { Bell } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useReadNotificationMutation } from "../../features/notifications/notification-api";
import getLastActiveTime from "../../utils/active-time";

function NotificationItems({
  notificationId,
  notification,
  setShowNotification,
}) {
  // hooks and variables
  const navigate = useNavigate();
  const date = notification?.createdAt
    ?.split("T")?.[0]
    ?.split("-")
    ?.map((item) => Number(item));

  // decrement month by 1 because month starts from 0
  date[1] = date[1] - 1;

  // api hooks
  const [readNotification] = useReadNotificationMutation();

  // handlers
  const handleItemClick = () => {
    readNotification(notificationId);
    navigate(`/notifications/${notificationId}`);
    setShowNotification(true);
  };

  return (
    <div
      className={`flex justify-between w-[100%] overflow-hidden text-black dark:text-gray-200 rounded-md border border_stroke dark:border-slate-700 py-3 px-2 items-center cursor-pointer my-1.5 ${
        !notification?.read && "bg-blue-100"
      }`}
      onClick={handleItemClick}
    >
      <div className={`flex  w-[65%] ${!notification?.read && "font-medium"}`}>
        <div className="border border_stroke dark:border-slate-700 flex justify-center items-center rounded-full w-[40px] h-[40px]">
          <Bell />
        </div>
        <div className=" pl-2 w-[80%]">
          <h3 className="truncate font-poppins text_short">
            {notification?.title}
          </h3>
          <p className="text-xs font-poppins text_short">
            {notification?.body}
          </p>
        </div>
      </div>
      <div className="text-right font-poppins text-xs  min-w-[100px]">
        {/* {formatDistanceToNow(new Date(notification?.createdAt), {
          addSuffix: true,
        })} */}
        {getLastActiveTime(notification?.createdAt)}
      </div>
    </div>
  );
}

// props validation
NotificationItems.propTypes = {
  notificationId: PropTypes.string.isRequired,
  notification: PropTypes.object.isRequired,
  setShowNotification: PropTypes.func,
};

export default NotificationItems;
