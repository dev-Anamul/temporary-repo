import PropTypes from "prop-types";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/bootstrap.css";

function CustomPagination({
  totalPages = 1,
  handlePageChange = () => {},
  currentPage = 1,
  limit = 10,
  handleLimitChange = () => {},
  totalItems = 0,
}) {
  let startItem = (currentPage - 1) * limit + 1;
  let endItem =
    currentPage * limit > totalItems ? totalItems : currentPage * limit;
  return (
    <div className="flex justify-between gap-5 border-t pt-2 mb-5 items-center">
      <select
        name=""
        id=""
        className="select w-[100px] select-sm bg-white border rounded-sm"
        value={limit}
        onChange={handleLimitChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <div className="border  px-2 rounded-md">
        <span className="font-semibold">{startItem || 0}</span> -
        <span className="font-semibold">{endItem || 0}</span> of total{" "}
        <span className="font-semibold">{totalItems}</span>
      </div>
      <div className="me-2">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

// props validation
CustomPagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  handleLimitChange: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default CustomPagination;
