import PropTypes from "prop-types";

const ProfileInput = ({ handleChange, value, type = "text", name }) => {
  return (
    <p className="dark:text-gray-400 flex items-center">
      <span>: &nbsp;</span>
      <input
        type={type}
        className="input-sm border focus-visible:outline-none  border_stroke dark:border-slate-700 rounded dark:bg-slate-900 bg-white placeholder:text-black placeholder:opacity-50  placeholder:dark:text-white w-64 text-base dark:text-white"
        placeholder={"Type something..."}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </p>
  );
};

// prop types validation
ProfileInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ProfileInput;
