/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Password({ label, value, handleChange, name, isError, errorMessage }) {
  const [show, setShow] = useState(false);
  return (
    <label className="mb-5 block text-black dark:text-white font-poppins">
      <p className="mb-2 ms-1">{label}</p>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="input border border_stroke rounded-md w-full bg-white dark:bg-slate-900 dark:border-slate-700 placeholder:text-black placeholder:opacity-50 placeholder:dark:text-white text-black dark:text-white placeholder:font-poppins placeholder:capitalize"
          placeholder={"Type " + label}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {isError && errorMessage && (
          <p className="pl-1.5 mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
        {!show && (
          <AiOutlineEye
            size={28}
            className="absolute top-[11px] right-2 cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
        {show && (
          <AiOutlineEyeInvisible
            size={28}
            className="absolute top-[11px] right-2 cursor-pointer"
            onClick={() => setShow(false)}
          />
        )}
      </div>
    </label>
  );
}

export default Password;
