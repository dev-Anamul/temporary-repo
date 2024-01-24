import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ users }) {
  console.log("channel users =>", users);
  return (
    <div className="">
      <table className="table overflow-hidden rounded-md">
        {/* head */}
        <TableHeader />
        <tbody className="text_heading">
          {users?.map((user, index) => (
            <TableRow key={index} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// props validation
Table.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Table;
