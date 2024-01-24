import PropTypes from "prop-types";
import CustomPagination from "../../../components/custom-pagination/custom-pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table({
  categories,
  page,
  handlePageChange,
  handleLimitChange,
  limit,
}) {
  return (
    <div id="fetch_more_categories" className="h-[72vh]">
      <div className="overflow-y-auto">
        <table className="table rounded-md overflow-hidden min-w-[900px]">
          <TableHeader />
          <tbody className="text_heading">
            {categories?.data?.map((category, index) => (
              <TableRow
                key={category.id}
                category={category}
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
        handleLimitChange={handleLimitChange}
        limit={limit}
        totalItems={categories?.pagination?.totalItems || 0}
        totalPages={categories?.pagination?.totalPages || 1}
        key={"category-list"}
      />
    </div>
  );
}

// props validation
Table.propTypes = {
  categories: PropTypes.object,
  page: PropTypes.number,
  handlePageChange: PropTypes.func,
  limit: PropTypes.number,
  handleLimitChange: PropTypes.func,
};

export default Table;
