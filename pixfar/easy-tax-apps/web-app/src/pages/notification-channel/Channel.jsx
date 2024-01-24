import { useEffect } from "react";
import { Bell, PlusCircle, Trash2 } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/form-element/Button";
import AddChannelMember from "../../components/modals/add-modal/AddChannelMember";
import NotifyMembers from "../../components/modals/notification/NotifyMembers";
import { notificationModalTypes } from "../../enum/modalTypes";
import { showNotificationModal } from "../../features/modal/modal-slice";
import {
  useChannelUsersQuery,
  useDeleteNotificationChannelMutation,
  useGetNotificationChannelQuery,
} from "../../features/notification-channels/channel-api";
import Table from "./table/Table";

function Channel() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: channel } = useGetNotificationChannelQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const { data: users } = useChannelUsersQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteChannel, { isSuccess, status, isError, isLoading, error }] =
    useDeleteNotificationChannelMutation();

  const { notificationModal } = useSelector((state) => state.modal);

  const { data } = channel || {};

  const notifyHandler = (id) => {
    dispatch(
      showNotificationModal({
        id: notificationModalTypes.NOTIFY_MEMBER,
        data: id,
      })
    );
  };

  const handleAddMembers = (id) => {
    dispatch(
      showNotificationModal({
        id: notificationModalTypes.ADD_MEMBER,
        data: id,
      })
    );
  };

  const handleDelete = (id) => {
    deleteChannel(id);
  };

  /// handle side effect
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      navigate("/notification-channel");
      toast.dismiss();
      toast.success("Channel Deleted Successfully");
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message || "Something went wrong");
    }
  }, [isSuccess, isError, status, error, navigate]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold font-poppins capitalize text-black dark:text-white">
          {data?.channel?.channelName}
        </h1>
        <div>
          <p className="text-justify font-poppins text-black dark:text-white">
            {data?.channel?.description}
          </p>
        </div>
      </div>
      <hr className="divide-x border-slate-700" />
      <div className=" mb-5 flex flex-col justify-between gap-2">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-4">
            <div>
              <Button
                text="Notify"
                Icon={() => <Bell size={18} />}
                handler={() => notifyHandler(id)}
                disabled={isLoading || status === "pending"}
              />
            </div>
            <div>
              <Button
                text="Add Member"
                Icon={() => <PlusCircle size={18} />}
                handler={() => handleAddMembers(id)}
                disabled={isLoading || status === "pending"}
              />
            </div>
          </div>
          <div className="flex gap-4">
            {/* <div>
              <Button
                text="Edit"
                Icon={() => <Edit size={18} />}
                handler={() => notifyHandler(id)}
                disabled={isLoading || status === "pending"}
              />
            </div> */}
            <div>
              <Button
                text="Delete"
                Icon={() => <Trash2 size={18} color="red" />}
                handler={() => handleDelete(id)}
                disabled={isLoading || status === "pending"}
              />
            </div>
          </div>
        </div>
        <div>
          <Table users={users?.data} />
        </div>
      </div>

      {/* NOTIFY MEMBERS */}
      {notificationModal?.show &&
        notificationModal?.id === notificationModalTypes.NOTIFY_MEMBER && (
          <NotifyMembers />
        )}

      {/* ADD MEMBERS MODAL */}
      {notificationModal?.show &&
        notificationModal?.id === notificationModalTypes.ADD_MEMBER && (
          <AddChannelMember />
        )}
    </div>
  );
}

export default Channel;
