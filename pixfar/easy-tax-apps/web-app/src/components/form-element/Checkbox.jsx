import PropTypes from "prop-types";

function Checkbox({ label, name, value, handleChange }) {
  return (
    <label className="block space-y-1.5">
      <p className="pl-1.5 drop-shadow-sm font-semibold text-gray-600 dark:text-white">
        {label}
      </p>
      <input
        type="checkbox"
        className="input border border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white"
        placeholder={"Type something..."}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

// prop types validation
Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;
