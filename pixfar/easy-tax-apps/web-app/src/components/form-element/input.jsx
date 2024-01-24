import PropTypes from "prop-types";
function Input({
  label,
  value,
  handleChange,
  name,
  isError,
  errorMessage,
  placeholder,
  className,
  type = "text",
}) {
  return (
    <label className={`block space-y-1.5 ${className}`}>
      <p className="pl-1.5 drop-shadow-sm text-black dark:text-white font-poppins">
        {label}
      </p>
      <input
        type={type}
        className="input border border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize"
        placeholder={`Type ${placeholder || label}`}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {isError && errorMessage && (
        <p className="pl-1.5 text-sm text-red-500">{errorMessage}</p>
      )}
    </label>
  );
}

// prop types validation
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
