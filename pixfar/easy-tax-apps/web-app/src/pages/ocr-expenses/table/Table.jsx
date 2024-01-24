import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ categories }) {
  return (
    <div className="">
      <table className="table overflow-hidden rounded-md">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {categories?.map((category, index) => (
            <TableRow key={category.id} category={category} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
Table.propTypes = {
  categories: PropTypes.array,
};

export default Table;
