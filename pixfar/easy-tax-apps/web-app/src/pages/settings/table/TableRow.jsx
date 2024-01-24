import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import { taxSlabModalTypes } from "../../../enum/modalTypes";
import { showEditModal } from "../../../features/modal/modal-slice";
import { useDeleteTaxSlabMutation } from "../../../features/tax-slab/tax-slab-api";
function TableRow({ index, taxSlab }) {
  const [deleteSlab] = useDeleteTaxSlabMutation();

  // hooks and variables
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteSlab(id);
  };

  const editHandler = () => {
    console.log("handle edit");
    dispatch(
      showEditModal({
        id: taxSlabModalTypes.EDIT_TAX_SLAB,
        data: taxSlab,
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
      <td>{taxSlab?.range}</td>
      <td>{taxSlab?.min}</td>
      <td>{taxSlab?.max}</td>
      <td>{taxSlab?.rate * 100}%</td>
      <td className="flex justify-center">
        <ActionsDropdown
          index={index}
          actionId={taxSlab?._id}
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
  taxSlab: PropTypes.object.isRequired,
};

export default TableRow;
