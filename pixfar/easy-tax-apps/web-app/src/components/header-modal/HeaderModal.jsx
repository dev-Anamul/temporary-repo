import PropTypes from "prop-types";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

function HeaderModal({ handleClose = () => {}, title = "All User", isBack }) {
  const navigation = useNavigate();
  return (
    <div className="header_bg dark:bg-slate-800 dark:border-slate-700 rounded-md border_stroke flex justify-between alert">
      <span className="header_text text-xl flex items-center gap-5 font-semibold dark:text-white dark:text-opacity-70">
        {isBack && (
          <button onClick={() => navigation(-1)}>
            <ArrowLeft />
          </button>
        )}
        {title}
      </span>
      {/* <button className="" onClick={handleClose}>
        <X size={28} className="header_text font-semibold hover:text-sky-600" />
      </button> */}
    </div>
  );
}

//  props type Validation
HeaderModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default HeaderModal;
