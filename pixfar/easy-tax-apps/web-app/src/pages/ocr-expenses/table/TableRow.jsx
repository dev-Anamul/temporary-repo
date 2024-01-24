import PropTypes from "prop-types";
import { Cpu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import ActionsDropdown from "../../../components/action-dropdown/ActionsDropdown";
import ActionButton from "../../../components/buttons/ActionButton";
import {
  addSelectedItemIds,
  removeSelectedItemIds,
} from "../../../features/ocr-expense/ocr-expense-slice";
import { getTextColor } from "../../../utils/button-color";

function TableRow({ index, category }) {
  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { selectedItemIds } = useSelector((state) => state.ocrExpense);

  // handler functions
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(addSelectedItemIds(category?.id));
    } else if (!e.target.checked) {
      dispatch(removeSelectedItemIds(category?.id));
    }
  };

  const deleteHandler = () => {
    console.log("delete handler");
  };

  const editHandler = () => {
    console.log("edit handler");
  };

  const processHandler = () => {
    console.log("process handler");
  };

  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200`}
    >
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox  checkbox-info rounded-sm checkbox-xs"
            checked={selectedItemIds.includes(category?.id)}
            onChange={handleCheckboxChange}
          />
        </label>
      </th>
      <td>{index + 1}</td>
      <td>{category?.title}</td>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <img src={category?.imageUrl} />
          </div>
        </div>
      </td>
      <td>{category?.description}</td>
      <td>
        <div
          className={`font-semibold uppercase ${getTextColor(
            category?.status
          )}`}
        >
          {category?.status}
        </div>
      </td>
      <td className="flex justify-center">
        <ActionsDropdown
          actionId={category?._id}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
          index={index}
        >
          <ActionButton
            text="Process"
            Icon={() => <Cpu size={18} />}
            handleClick={processHandler}
          />
        </ActionsDropdown>
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
