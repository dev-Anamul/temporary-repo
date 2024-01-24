import PropTypes from "prop-types";
import CustomPagination from "../../../components/custom-pagination/custom-pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({
  incomeSources,
  page,
  handlePageChange,
  limit,
  handleLimitChange,
}) {
  return (
    <div>
      <div className="overflow-y-auto">
        <table className="table rounded-md overflow-hidden min-w-[1000px] ">
          {/* head */}
          <TableHeader />
          <tbody className="text_heading">
            {incomeSources?.data?.map((income, index) => (
              <TableRow
                key={income._id}
                income={income}
                index={(page - 1) * limit + index}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <CustomPagination
        currentPage={page}
        handlePageChange={handlePageChange}
        limit={limit}
        handleLimitChange={handleLimitChange}
        totalItems={incomeSources?.pagination?.totalItems || 0}
        totalPages={incomeSources?.pagination?.totalPages || 1}
        key="income-sources"
      />
    </div>
  );
}

// props validation
Table.propTypes = {
  incomeSources: PropTypes.object,
  page: PropTypes.number,
  handlePageChange: PropTypes.func,
  limit: PropTypes.number,
  handleLimitChange: PropTypes.func,
};

export default Table;
