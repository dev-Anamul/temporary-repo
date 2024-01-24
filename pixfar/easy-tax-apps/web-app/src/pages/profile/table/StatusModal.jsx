import PropTypes from "prop-types";
import { CheckCircle, XCircle } from "react-feather";
import Button from "../../../components/form-element/Button";
import Select from "../../../components/form-element/Select";

function StatusModal({ modalId }) {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-md header_bg dark:bg-slate-800">
          <h3 className="font-bold text-lg mb-5 text-center font-poppins">
            Change Status
          </h3>
          <div>
            <Select label="Status">
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Select>
          </div>
          <div className="modal-action">
            <Button text="Save" Icon={() => <CheckCircle size={18} />} />
            <label htmlFor={modalId} className="custom_btn">
              <XCircle size={18} /> Cancel
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
