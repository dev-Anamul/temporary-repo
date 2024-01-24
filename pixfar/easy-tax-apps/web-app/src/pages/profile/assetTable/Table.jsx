import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function AssetsTable({ data }) {
  return (
    <div className="min-w-[750px]">
      <table className="table overflow-hidden rounded-md">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {data?.map((item, index) => (
            <TableRow key={item._id} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
AssetsTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AssetsTable;
