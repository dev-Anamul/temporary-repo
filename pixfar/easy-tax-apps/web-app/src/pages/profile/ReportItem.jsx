import PropTypes from "prop-types";
import { Download } from "react-feather";

function ReportItem({ title, clickHandler }) {
  return (
    <div className="flex items-center bg-gray-100 hover:bg-gray-200 transition py-2 px-3 justify-between rounded text-black dark:text-white font-poppins cursor-pointer my-3">
      <p>{title}</p>
      <button
        className="btn btn-sm btn-outline btn-accent rounded"
        onClick={clickHandler}
      >
        <Download size={20} />
      </button>
    </div>
  );
}

// prop types for ReportItem
ReportItem.propTypes = {
  title: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default ReportItem;
