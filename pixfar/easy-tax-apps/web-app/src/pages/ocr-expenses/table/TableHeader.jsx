import { useDispatch, useSelector } from "react-redux";
import { toggleHeaderSelected } from "../../../features/ocr-expense/ocr-expense-slice";

function TableHeader() {
  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { headerSelected } = useSelector((state) => state.ocrExpense);

  // handlers
  const handleHeaderSelect = (e) => {
    if (e.target.checked) dispatch(toggleHeaderSelected(true));
    else if (!e.target.checked) dispatch(toggleHeaderSelected(false));
  };
  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox  checkbox-info rounded-sm checkbox-xs"
              checked={headerSelected}
              onChange={handleHeaderSelect}
            />
          </label>
        </th>
        <th>No</th>
        <th>Title</th>
        <th>Image</th>
        <th>Description</th>
        <th>Status</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
