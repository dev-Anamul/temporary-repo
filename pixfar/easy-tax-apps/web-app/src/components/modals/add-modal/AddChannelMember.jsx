/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { hideNotificationModal } from "../../../features/modal/modal-slice";
import { useAddUsersToChannelMutation } from "../../../features/notification-channels/channel-api";
import Button from "../../form-element/Button";
import SelectAndSearchUserList from "../../select-user-list/SelectAndSearchUserList";

function AddChannelMember() {
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  const [addUser, { isSuccess, status }] = useAddUsersToChannelMutation();

  const { notificationModal } = useSelector((state) => state.modal);

  console.log("channel", notificationModal);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideNotificationModal());
  };

  const handleSave = () => {
    addUser({
      id: notificationModal?.data,
      userIds: selectedUsers,
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      handleClose();
    }
  }, [isSuccess, status]);

  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle modal-open"
      >
        <div className={`modal-box !w-[500px] header_bg dark:bg-slate-800`}>
          <div>
            <h3 className="font-bold text-lg mb-5 font-poppins">Add Member</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          <div className="flex justify-center">
            <SelectAndSearchUserList
              handler={(users) => setSelectedUsers(users)}
              width="w-full"
            />
          </div>
          <div className="flex justify-end mt-3 gap-4">
            <Button
              text="Save"
              type="submit"
              Icon={() => <CheckCircle size={18} />}
              className="!btn-sm rounded"
              handler={handleSave}
            />
            <Button
              text="Cancel"
              type="button"
              Icon={() => <XCircle size={18} />}
              handler={handleClose}
              className="!btn-sm rounded"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddChannelMember;
