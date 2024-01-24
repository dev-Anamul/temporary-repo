import { useDispatch, useSelector } from "react-redux";
import { toggleHeaderCheckbox } from "../../../features/users/users-slice";

function TableHeader() {
  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { headerCheckbox } = useSelector((state) => state?.user);

  // handlers
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(toggleHeaderCheckbox(true));
    } else if (!e.target.checked) {
      dispatch(toggleHeaderCheckbox(false));
    }
  };

  return (
    <thead className="table_header_bg text_heading dark:text-sky-600  dark:bg-slate-900 text-[14px] font-poppins border-none">
      <tr>
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox  checkbox-info rounded-sm checkbox-xs"
              checked={headerCheckbox}
              onChange={(e) => handleCheckboxChange(e)}
            />
          </label>
        </th>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Date of Birth</th>
        <th>Mobile Number</th>
        <th>Role</th>
        <th>Status</th>
        <th className="text-center">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
