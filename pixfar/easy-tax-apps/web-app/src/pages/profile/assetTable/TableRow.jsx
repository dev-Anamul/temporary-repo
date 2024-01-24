import { format } from "date-fns";
import { Eye } from "react-feather";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function TableRow({ item, index = 0 }) {
  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200 py-4`}
    >
      <td>{index + 1}</td>
      <td>{item?.category?.name}</td>
      <td>{format(new Date(item?.purchaseDate), "dd-MMM-yyyy")}</td>
      <td>${item?.purchasePrice?.toFixed(2)}</td>
      <td>{item?.category?.depreciationRate * 100}%</td>
      <td>
        <Link
          to={`/depreciation/${item._id}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          <Eye size={18} />
        </Link>
      </td>
    </tr>
  );
}

export default TableRow;
