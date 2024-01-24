/* eslint-disable react/prop-types */

import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

function SidebarList({
  children,
  icon,
  title,
  id,
  link,
  selectId,
  handleOpen,
}) {
  if (children && id) {
    return (
      <li>
        <label
          className="flex justify-between hover:bg-slate-300 dark:hover:bg-slate-700 text-black dark:text-white"
          htmlFor={id}
          onClick={() => handleOpen(id)}
        >
          <p className="flex gap-2">
            {icon} {title}
          </p>
          <BiChevronDown size={25} />
        </label>
        <input type="radio" id={id} name="sidebar" checked={id === selectId} />
        {children}
      </li>
    );
  }
  if (!children) {
    return (
      <>
        <li>
          <Link
            to={link || "/"}
            className="flex items-center gap-2 hover:bg-slate-300 dark:hover:bg-slate-700 text-black dark:text-white"
          >
            {icon}
            {title}
          </Link>
        </li>
      </>
    );
  }
}

export default SidebarList;
