import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ fiscalYears }) {
  return (
    <div className="overflow-y-auto">
      <table className="table rounded-md overflow-hidden min-w-[800px]">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {fiscalYears?.map((fiscalYear, index) => (
            <TableRow
              key={fiscalYear._id}
              index={index}
              fiscalYear={fiscalYear}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
Table.propTypes = {
  fiscalYears: PropTypes.array.isRequired,
};

export default Table;
