/* eslint-disable react/prop-types */
function TableRow({ tax, index = 0 }) {
  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200 py-4`}
    >
      <td>{index + 1}</td>
      <td>{tax?.fiscal_year}</td>
      <td>${tax?.income?.toFixed(2)}</td>
      <td>${tax?.expense?.toFixed(2)}</td>
      <td>${tax?.taxableIncome?.toFixed(2)}</td>
      <td>${tax?.tax?.toFixed(2)}</td>
    </tr>
  );
}

export default TableRow;
