import PropTypes from "prop-types";
import React from "react";
import { Eye, EyeOff } from "react-feather";

function ProfilePassword({ value, handleChange, name }) {
  const [show, setShow] = React.useState(false);

  return (
    <p className="dark:text-gray-400 flex items-center">
      <span>: &nbsp;</span>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="input-sm border focus-visible:outline-none  border_stroke dark:border-slate-700 rounded dark:bg-slate-900 bg-white placeholder:text-black placeholder:opacity-50  placeholder:dark:text-white w-64 text-black dark:text-white"
          placeholder={"type password"}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {!show && (
          <Eye
            size={20}
            className="absolute top-[7px] right-2 cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
        {show && (
          <EyeOff
            size={20}
            className="absolute top-[7px] right-2 cursor-pointer"
            onClick={() => setShow(false)}
          />
        )}
      </div>
    </p>
  );
}

// prop types validation
ProfilePassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default ProfilePassword;
