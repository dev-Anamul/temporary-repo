import PropTypes from "prop-types";
import CustomPagination from "../../../components/custom-pagination/custom-pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({ expenses, page, handlePageChange, handleLimitChange, limit }) {
  return (
    <div id="fetch_more" className="h-[72vh]">
      <div className="overflow-y-auto">
        <table
          id="fetch_more"
          className="table rounded-md overflow-hidden min-w-[1000px]"
        >
          <TableHeader />
          <tbody className="text_heading">
            {expenses?.data?.map((expense, i) => (
              <TableRow
                key={expense._id}
                expense={expense}
                index={(page - 1) * limit + i}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CustomPagination
        currentPage={page}
        handlePageChange={handlePageChange}
        totalPages={expenses?.pagination?.totalPages || 1}
        key="expense-list"
        limit={limit}
        handleLimitChange={handleLimitChange}
        totalItems={expenses?.pagination?.totalItems || 0}
      />
    </div>
  );
}

// props validation
Table.propTypes = {
  expenses: PropTypes.object,
  page: PropTypes.number,
  handlePageChange: PropTypes.func,
  limit: PropTypes.number,
  handleLimitChange: PropTypes.func,
};

export default Table;
