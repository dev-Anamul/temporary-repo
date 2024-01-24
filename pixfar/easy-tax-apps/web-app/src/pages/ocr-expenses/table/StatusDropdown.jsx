import { MoreHorizontal } from "react-feather";

function StatusDropdown() {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <label
        tabIndex={0}
        className="btn m-1 btn-xs bg-inherit border-none hover:bg-inherit"
      >
        <MoreHorizontal className="text_heading" />
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-52 p-2 table_header_bg shadow-lg dark:bg-slate-900 text-primary-content rounded"
      >
        <div className="card-body">
          <h3 className="card-title">Card title!</h3>
          <p>you can us</p>
        </div>
      </div>
    </div>
  );
}

export default StatusDropdown;
