import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { modalTypes } from "../../../enum/modalTypes";
import { useDeleteExpenseMutation } from "../../../features/expense/expense-api";
import { showEditModal } from "../../../features/modal/modal-slice";
import { formatDate } from "../../../utils/date";
import { generateFullName } from "../../../utils/generate-full-name";

function TableRow({ index = 0, expense }) {
  // hooks
  const [deleteExpense, { isSuccess, isError, error, status }] =
    useDeleteExpenseMutation();

  const dispatch = useDispatch();

  // handlers
  const editHandler = () => {
    dispatch(showEditModal({ id: modalTypes.EDIT_EXPENSE, data: expense }));
  };

  const deleteHandler = (id) => {
    deleteExpense(id);
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      console.log("expense deleted successfully");
    } else if (
      isError &&
      status === "rejected" &&
      typeof error?.data?.errors === "string"
    ) {
      console.log(error);
    }
  }, [isSuccess, isError, error, status]);

  const fullName = generateFullName(
    expense?.userId?.firstName,
    expense?.userId?.middleName,
    expense?.userId?.lastName
  );

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200`}
    >
      <td>{index + 1}</td>
      {/* <td>{expense?.expenseName}</td> */}
      <td>{fullName || ""}</td>
      <td>{expense?.expenseType?.name}</td>
      <td>${expense?.totalAmount?.toFixed(2)}</td>
      <td>${expense?.gstAmount?.toFixed(2)}</td>
      <td>${expense?.claimableAmount?.toFixed(2)}</td>
      <td>{expense?.isGSTClaimable ? "Yes" : "No"}</td>
      <td>
        <div
          style={{
            // pending for slip
            backgroundColor:
              (expense?.status === "rejected" && "#00000040") ||
              (expense?.status === "approved" && "#46a05a40") ||
              (expense?.status === "pending for slip" && "#f5ffa9") ||
              (expense?.status === "pending" && "#cc541c40"),
            color:
              (expense?.status === "rejected" && "black") ||
              (expense?.status === "pending for slip" && "red") ||
              (expense?.status === "approved" && "#46a05a") ||
              (expense?.status === "pending" && "red"),
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            // textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          {expense?.status}
        </div>
      </td>
      <td>{formatDate(expense?.expenseDate)}</td>
      {/* <td>
        <div className="w-56 truncate">{expense?.description}</div>
      </td> */}
      <td className="flex justify-start">
        <ActionsDropdown
          index={index}
          actionId={expense?._id}
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
  expense: PropTypes.object.isRequired,
};

export default TableRow;
