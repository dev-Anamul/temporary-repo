import PropTypes from "prop-types";
import { Edit2, MoreHorizontal, Trash2 } from "react-feather";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import ActionButton from "../buttons/ActionButton";

function ActionsDropdown({
  actionId,
  editHandler,
  deleteHandler,
  children,
  isShowDelete = true,
}) {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Don't save`,
      customClass: {
        confirmButton: "bg-white",
        cancelButton: "bg-white",
      },
    }).then((result) => {
      if (result.isConfirmed) deleteHandler(actionId);
    });
  };

  return (
    <div className={`relative action_parent`}>
      <label
        tabIndex={0}
        className="btn m-1 btn-xs bg-inherit border-none hover:bg-inherit "
      >
        <MoreHorizontal className="text_heading" />
      </label>
      <div
        tabIndex={0}
        className=" z-[1] action_hover absolute right-[40px] bottom-[0] justify-end flex items-center table_header_bg dark:bg-slate-800 text-primary-content rounded shadow-lg"
      >
        <div className="">
          <div className="flex justify-end">
            {editHandler ? (
              <ActionButton
                Icon={() => <Edit2 size={18} className="text-warning" />}
                text={"Edit"}
                handleClick={() => editHandler(actionId)}
              />
            ) : null}

            {isShowDelete ? (
              <ActionButton
                Icon={() => <Trash2 size={18} className="text-red-600" />}
                text={"Delete"}
                handleClick={handleDelete}
              />
            ) : null}

            {children ? children : null}
          </div>
        </div>
      </div>
    </div>
  );
}

// prop types for StatusDropdown
ActionsDropdown.propTypes = {
  index: PropTypes.number.isRequired,
  actionId: PropTypes.string.isRequired,
  editHandler: PropTypes.func,
  deleteHandler: PropTypes.func.isRequired,
  children: PropTypes.node,
  isShowDelete: PropTypes.bool,
};

export default ActionsDropdown;
