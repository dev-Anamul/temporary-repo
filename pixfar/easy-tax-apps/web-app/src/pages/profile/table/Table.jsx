import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ taxes }) {
  return (
    <div className="min-w-[750px]">
      <table className="table overflow-hidden rounded-md">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {taxes?.data?.map((tax, index) => (
            <TableRow key={tax.fiscal_year} tax={tax} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
Table.propTypes = {
  taxes: PropTypes.object.isRequired,
};

export default Table;
