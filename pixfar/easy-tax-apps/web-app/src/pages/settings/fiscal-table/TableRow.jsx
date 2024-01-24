import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { fiscalYearModalTypes } from "../../../enum/modalTypes";
import { useDeleteFiscalYearMutation } from "../../../features/fiscal-year/fiscal-year-api";
import { showEditModal } from "../../../features/modal/modal-slice";
import { formatDate } from "../../../utils/date";

function TableRow({ index, fiscalYear }) {
  const [deleteFiscalYear] = useDeleteFiscalYearMutation();

  // hooks and variables
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteFiscalYear(id);
  };

  const editHandler = () => {
    console.log("handle edit");
    dispatch(
      showEditModal({
        id: fiscalYearModalTypes.EDIT_FISCAL_YEAR,
        data: fiscalYear,
      })
    );
  };

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200 py-4`}
    >
      <td>{index + 1}</td>
      <td>{fiscalYear?.fiscalYear}</td>
      <td>{formatDate(fiscalYear?.startDate)}</td>
      <td>{formatDate(fiscalYear?.endDate)}</td>
      <td className="text-center">
        <ActionsDropdown
          actionId={fiscalYear?._id}
          deleteHandler={handleDelete}
          editHandler={editHandler}
        />
      </td>
    </tr>
  );
}

// prop types for TableRow
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  fiscalYear: PropTypes.object.isRequired,
};

export default TableRow;
