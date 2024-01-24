import PropTypes from "prop-types";
import React from "react";
import { Bell, User } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import ActionButton from "../../../components/buttons/ActionButton";
import { modalTypes, notificationModalTypes } from "../../../enum/modalTypes";
import {
  showEditModal,
  showNotificationModal,
} from "../../../features/modal/modal-slice";
import { useDeleteUserMutation } from "../../../features/users/users-api";
import {
  addSelectedUserIds,
  removeSelectedUserIds,
} from "../../../features/users/users-slice";
import { getButtonColor } from "../../../utils/button-color";
import { formatDate } from "../../../utils/date";
import { generateFullName } from "../../../utils/generate-full-name";
import StatusModal from "./StatusModal";

function TableRow({ index, user }) {
  // api hooks
  const [deleteUser, { isSuccess, isError, error, status }] =
    useDeleteUserMutation();

  // hooks and variables
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalId = "status_modal" + index;

  // get data from redux store
  const { selectedUserIds } = useSelector((state) => state?.user);

  // handlers
  const notifyHandler = (id) => {
    dispatch(
      showNotificationModal({
        id: notificationModalTypes.NOTIFY_SINGLE,
        data: id,
      })
    );
  };

  const editHandler = () => {
    dispatch(showEditModal({ id: modalTypes.EDIT_USER, data: user }));
  };

  const deleteHandler = (id) => {
    deleteUser(id);
  };

  const handleProfile = (id) => {
    navigate("/user-profile/" + id);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      dispatch(addSelectedUserIds(id));
    } else if (!e.target.checked) {
      dispatch(removeSelectedUserIds(id));
    }
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      console.log("user deleted successfully");
    } else if (
      isError &&
      status === "rejected" &&
      typeof error?.data?.errors === "string"
    ) {
      console.log(error);
    }
  }, [isSuccess, isError, error, status]);

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200 py-4`}
    >
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox  checkbox-info rounded-sm checkbox-xs"
            checked={selectedUserIds.includes(user?._id)}
            onChange={(e) => handleCheckboxChange(e, user?._id)}
          />
        </label>
      </th>
      <td>{index + 1}</td>
      <td>
        <Link to={"/user-profile/" + user?._id}>
          {generateFullName(user?.firstName, user?.middleName, user?.lastName)}
        </Link>
      </td>
      <td>{user?.email}</td>
      <td>{user?.address}</td>
      <td>{formatDate(user?.dateOfBirth)}</td>
      <td>+64 {user?.mobile}</td>
      <td>{user?.role}</td>
      <td>
        <div>
          <label
            htmlFor={modalId}
            className={`btn btn-xs rounded-sm text-white w-20 border-0 ${getButtonColor(
              user?.status
            )} `}
            style={{
              backgroundColor:
                (user?.status === "rejected" && "#00000040") ||
                (user?.status === "approved" && "#46a05a40") ||
                (user?.status === "pending" && "#cc541c40"),
              color:
                (user?.status === "rejected" && "black") ||
                (user?.status === "approved" && "#46a05a") ||
                (user?.status === "pending" && "red"),
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              // textTransform: "capitalize",
              textAlign: "center",
            }}
          >
            {user?.status}
          </label>
        </div>
        <StatusModal
          modalId={modalId}
          userId={user?._id}
          currentStatus={user?.status}
        />
      </td>
      <td className="flex justify-center">
        <ActionsDropdown
          index={index}
          actionId={user?._id}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        >
          <ActionButton
            Icon={() => <User size={18} className="text-green-600" />}
            text={"Profile"}
            handleClick={() => handleProfile(user?._id)}
          />
          <ActionButton
            Icon={() => <Bell size={18} className="text-green-600" />}
            text={"Notify"}
            handleClick={() => notifyHandler(user?._id)}
          />
        </ActionsDropdown>
      </td>
    </tr>
  );
}

// prop types for TableRow
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default TableRow;
