import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { modalTypes } from "../../../enum/modalTypes";
import { incomeSourceTypes } from "../../../enum/types";
import { useDeleteExpenseMutation } from "../../../features/expense/expense-api";
import { showEditModal } from "../../../features/modal/modal-slice";
import { formatDate } from "../../../utils/date";

function TableRow({ index = 0, income }) {
  // hooks
  const [deleteExpense, { isSuccess, isError, error, status }] =
    useDeleteExpenseMutation();

  const dispatch = useDispatch();

  // handlers
  const editHandler = () => {
    dispatch(showEditModal({ id: modalTypes.EDIT_INCOME, data: income }));
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

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200`}
    >
      <td>{index + 1}</td>
      <td>{income?.userId?.fullName}</td>
      <td className="capitalize">{income?.incomeSource}</td>
      <td>{incomeSourceTypes[+income?.incomeType]}</td>
      <td>${income?.amount}</td>
      <td>{formatDate(income?.incomeDate)}</td>
      <td className="truncate">
        <div
          style={{
            backgroundColor:
              (income?.status === "rejected" && "#00000040") ||
              (income?.status === "approved" && "#46a05a40") ||
              (income?.status === "pending" && "#cc541c40"),
            color:
              (income?.status === "rejected" && "black") ||
              (income?.status === "approved" && "#46a05a") ||
              (income?.status === "pending" && "red"),
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            // textTransform: "capitalize",
            textAlign: "center",
          }}
        >
          {income?.status}
        </div>
      </td>
      <td className="flex justify-center">
        {income?.incomeSource?.toLowerCase() === "manual" ? (
          <ActionsDropdown
            index={index}
            actionId={income?._id}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            isShowDelete={false}
          />
        ) : // <MoreHorizontal className="text_heading" />
        null}
      </td>
    </tr>
  );
}

// prop types for TableRow
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  income: PropTypes.object.isRequired,
};

export default TableRow;
