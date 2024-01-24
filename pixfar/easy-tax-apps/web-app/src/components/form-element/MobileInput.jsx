import PropTypes from "prop-types";

function MobileInput({
  className,
  label,
  type,
  placeholder,
  name,
  value,
  handleChange,
  isError,
  errorMessage,
}) {
  return (
    <label className={`block space-y-1.5 ${className}`}>
      <p className="pl-1.5 drop-shadow-sm text-black dark:text-white font-poppins">
        {label}
      </p>
      <div className="flex">
        <button
          type="button"
          onChange={() => {}}
          value={"+64"}
          className=" border border_stroke min-w-[60px] rounded-tr-none rounded-br-none dark:border-slate-700 rounded-md rounded-tl-none rounded-bl-none dark:bg-slate-900 bg-white placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize font-poppins text-base font-semibold"
        >
          +64{" "}
        </button>
        <input
          type={type}
          className="input border border_stroke dark:border-slate-700 rounded-md rounded-tl-none rounded-bl-none dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize"
          placeholder={`Type ${placeholder || label}`}
          name={name}
          value={value}
          onChange={handleChange}
          maxLength={9}
          minLength={9}
        />
      </div>
      {isError && errorMessage && (
        <p className="pl-1.5 text-sm text-red-500">{errorMessage}</p>
      )}
    </label>
  );
}

// prop types validation
MobileInput.propTypes = {
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

export default MobileInput;
