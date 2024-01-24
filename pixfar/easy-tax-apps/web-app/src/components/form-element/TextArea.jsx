import PropTypes from "prop-types";

function TextArea({ label, name, value, handleChange, isError, errorMessage }) {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text pl-1.5  text-black text-base font-poppins dark:text-white">
            {label}
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered h-32 border border_stroke dark:border-slate-700 rounded-md dark:bg-slate-900 bg-white w-full placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize placeholder:text-base text-base font-poppins"
          placeholder={"Type" + " " + label}
          name={name}
          value={value}
          onChange={handleChange}
        ></textarea>
        {isError && errorMessage && (
          <p className="text-sm text-red-500 pl-1.5">{errorMessage} message</p>
        )}
      </div>
    </>
  );
}

// prop types validation
TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default TextArea;
