import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { useRemoveUsersFromChannelMutation } from "../../../features/notification-channels/channel-api";
import { generateFullName } from "../../../utils/generate-full-name";
import { formatDate } from "../../../utils/date";
function TableRow({ index, user }) {
  const [removeUser] = useRemoveUsersFromChannelMutation();

  const { id } = useParams();

  const handleRemoveUser = (userId) => {
    removeUser({ id, userId });
  };
  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200 py-4`}
    >
      <td>{index + 1}</td>
      <td>
        {generateFullName(user?.firstName, user?.middleName, user?.lastName)}
      </td>
      <td>{user?.email}</td>
      <td>{user?.address}</td>
      <td>{formatDate(user?.dateOfBirth)}</td>
      <td>
        <ActionsDropdown
          index={index}
          actionId={user?._id}
          deleteHandler={handleRemoveUser}
        />
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
