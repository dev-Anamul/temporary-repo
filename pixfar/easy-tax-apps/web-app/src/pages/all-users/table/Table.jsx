import PropTypes from "prop-types";
import CustomPagination from "../../../components/custom-pagination/custom-pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ users, page, handlePageChange, handleLimitChange, limit }) {
  return (
    <div id="fetch_more_users" className=" h-[72vh]">
      <div className="overflow-y-auto">
        <table className="table rounded-md overflow-hidden min-w-[1500px]">
          <TableHeader />
          <tbody className="text_heading">
            {users?.data?.map((user, i) => (
              <TableRow
                key={user.id}
                user={user}
                index={(page - 1) * limit + i}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CustomPagination
        currentPage={page}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        limit={limit}
        totalItems={users?.pagination?.totalItems || 0}
        totalPages={users?.pagination?.totalPages || 1}
        key={"user-list"}
      />
    </div>
  );
}

// props validation
Table.propTypes = {
  users: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  handleLimitChange: PropTypes.func.isRequired,
};

export default Table;
