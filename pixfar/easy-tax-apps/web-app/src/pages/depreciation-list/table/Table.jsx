import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ depreciation }) {
  return (
    <div id="fetch_more_categories" className="h-[72vh]">
      <div className="overflow-y-auto">
        <table className="table rounded-md overflow-hidden min-w-[900px]">
          <TableHeader />
          <tbody className="text_heading">
            {depreciation?.data?.map((category, index) => (
              <TableRow
                key={category.id}
                depreciation={category}
                index={1 + index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// props validation
Table.propTypes = {
  depreciation: PropTypes.object,
};

export default Table;
