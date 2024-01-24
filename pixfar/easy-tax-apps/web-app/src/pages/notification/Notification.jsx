import { useParams } from "react-router-dom";
import { useGetNotificationQuery } from "../../features/notifications/notification-api";

function Notification() {
  const { id } = useParams();

  const { data: notification } = useGetNotificationQuery(id);

  return (
    <div className="w-full flex  text-black dark:text-gray-200 font-poppins text-justify border rounded">
      <div className="card w-full">
        <div className="card-body px-0 space-y-4">
          <h2 className="card-title border-b pb-6 block w-full px-5">
            {notification?.data?.title}
          </h2>

          <div className="px-5">
            {console.log("image URL", notification?.data)}
            {notification?.data?.imageUrl && (
              <figure className="!justify-start">
                <img src={notification?.data?.imageUrl} alt="Shoes" />
              </figure>
            )}
            <p className="mt-5">{notification?.data?.body}</p>
          </div>

          {/* {isError && status === "rejected" && (
            <div className="text-red-500">{JSON.stringify(error)}</div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Notification;
