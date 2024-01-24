import PropTypes from "prop-types";
function Select({
  label,
  name,
  children,
  value,
  handleChange,
  isError,
  errorMessage,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm text-gray-600 dark:text-gray-400 space-y-1.5"
      >
        <p className="pl-1.5  font-poppins text-black dark:text-white text-base ">
          {label}
        </p>
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className="select w-full border_stroke dark:border-slate-700 text-black dark:text-white dark:text-opacity-80 bg-white dark:bg-slate-900 text-base font-poppins"
        >
          <option>--Select--</option>
          {children}
        </select>
        {isError && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
      </label>
    </div>
  );
}

//  props type Validation
Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Select;
