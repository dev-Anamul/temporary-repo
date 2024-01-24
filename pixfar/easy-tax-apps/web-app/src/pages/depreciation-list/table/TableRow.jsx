import PropTypes from "prop-types";

function TableRow({ index = 0, depreciation }) {
  return (
    <tr
      className={`${
        index % 2 !== 0 ? "table_row_bg dark:bg-gray-900" : ""
      } dark:text-gray-200`}
    >
      <td>{index}</td>
      <td>{depreciation?.fiscalYear}</td>
      <td>${depreciation?.openingValue?.toFixed(2)}</td>
      <td>${depreciation?.depreciation?.toFixed(2)}</td>
      <td>{depreciation?.depreciationRate * 100} %</td>
      <td>${depreciation?.accumulatedDepreciation?.toFixed(2)}</td>
      <td>${depreciation?.endingValue?.toFixed(2)}</td>
    </tr>
  );
}

// prop types for TableRow
TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  depreciation: PropTypes.object.isRequired,
};

export default TableRow;
