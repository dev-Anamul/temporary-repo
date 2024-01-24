import PropTypes from "prop-types";
import ReactDatePicker from "react-datepicker";

function CDatePicker({
  label,
  name,
  value = null,
  handleChange,
  errorMessage,
  isError,
}) {
  return (
    <label className="block space-y-1.5 w-full">
      <p className="pl-1.5 text-black dark:text-white text-base font-poppins">
        {label}
      </p>
      <ReactDatePicker
        type="date"
        className="input border text-black dark:text-white text-base font-poppins border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white "
        selected={value}
        dateFormat={"dd/MM/yyyy"}
        placeholderText="dd/mm/yyyy"
        onChange={(date) => handleChange({ target: { name, value: date } })}
      />
      {isError && errorMessage && (
        <p className="pl-1.5 text-sm text-red-500">{errorMessage}</p>
      )}
    </label>
  );
}

// prop types validation
CDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
};

export default CDatePicker;
