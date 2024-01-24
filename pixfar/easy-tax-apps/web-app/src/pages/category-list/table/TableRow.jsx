import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { modalTypes } from "../../../enum/modalTypes";
import { useDeleteCategoryMutation } from "../../../features/category/category-api";
import { showEditModal } from "../../../features/modal/modal-slice";
import { formatDate } from "../../../utils/date";

function TableRow({ index = 0, category }) {
  // hooks
  const [deleteCategory, { isSuccess, isError, error, status }] =
    useDeleteCategoryMutation();
  const dispatch = useDispatch();

  // handlers
  const editHandler = () => {
    dispatch(showEditModal({ id: modalTypes.EDIT_CATEGORY, data: category }));
  };

  const deleteHandler = (id) => {
    deleteCategory(id);
  };

  // handle response state
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      console.log("category deleted successfully");
    } else if (isError && status === "rejected") {
      console.log(error);
    }
  }, [isSuccess, isError, error, status]);

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200`}
    >
      <td>{index + 1}</td>
      {/* <td>{category?.type}</td> */}
      <td>{category?.name}</td>
      <td>{category?.claimablePercentage * 100} %</td>
      <td>{category?.depreciationRate * 100} %</td>
      <td className="truncate">{category?.description}</td>
      <td>{formatDate(category?.createdAt)}</td>
      <td className="flex justify-center">
        <ActionsDropdown
          index={index}
          actionId={category?._id}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </td>
    </tr>
  );
}

// prop types for TableRow
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
};

export default TableRow;
