import PropTypes from "prop-types";

function Modal({ children, title = "Modal Title", handleClose }) {
  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle modal-open "
      >
        <div className={`modal-box !max-w-5xl header_bg dark:bg-slate-800`}>
          <div>
            <h3 className="font-bold text-lg mb-5 font-poppins text-black dark:text-white">
              {title}
            </h3>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>

          {children}
        </div>
      </dialog>
    </>
  );
}

// props validation
Modal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  width: PropTypes.number,
};

export default Modal;
