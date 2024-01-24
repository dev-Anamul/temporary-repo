import PropTypes from "prop-types";

function StatusModal({ modalId }) {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-md">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label htmlFor={modalId} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

// prop types for StatusModal
StatusModal.propTypes = {
  modalId: PropTypes.string.isRequired,
};

export default StatusModal;
