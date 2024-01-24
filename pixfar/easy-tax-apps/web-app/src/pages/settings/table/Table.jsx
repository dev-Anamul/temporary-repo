import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ taxSlabs }) {
  return (
    <div className="overflow-y-auto">
      <table className="table rounded-md overflow-hidden min-w-[800px]">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {taxSlabs?.map((taxSlab, index) => (
            <TableRow key={taxSlab._id} index={index} taxSlab={taxSlab} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
Table.propTypes = {
  taxSlabs: PropTypes.array.isRequired,
};

export default Table;
