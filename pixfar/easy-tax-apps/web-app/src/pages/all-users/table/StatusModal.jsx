import PropTypes from "prop-types";
import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import Button from "../../../components/form-element/Button";
import Select from "../../../components/form-element/Select";
import { useUpdateUserMutation } from "../../../features/users/users-api";

function StatusModal({ modalId, userId, currentStatus }) {
  const [status, setStatus] = React.useState(currentStatus);
  const [
    updateStatus,
    { isLoading: isUpdating, isError, isSuccess, error, status: reqStatus },
  ] = useUpdateUserMutation(userId);

  const modalRef = React.useRef();

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    updateStatus({ status, id: userId });
  };

  React.useEffect(() => {
    if (isSuccess && reqStatus === "fulfilled") {
      if (modalRef?.current) modalRef.current.checked = false;
      toast.success("Status updated successfully");
    } else if (isError && reqStatus === "rejected") {
      toast.error(JSON.stringify(error?.message));
    }
  }, [isSuccess, reqStatus, isError, error?.message]);

  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={modalId}
        className="modal-toggle"
        ref={modalRef}
      />
      <div className="modal">
        <div className="modal-box rounded-md header_bg dark:bg-slate-800">
          <h3 className="font-bold text-lg mb-5 text-center font-poppins">
            Change Status
          </h3>
          <div>
            <Select
              label="Status"
              value={status}
              handleChange={handleStatusChange}
              name="status"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Select>
          </div>
          <div className="modal-action">
            <Button
              text="Save"
              Icon={() => <CheckCircle size={18} />}
              handler={handleSubmit}
              disabled={isUpdating}
            />
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
  userId: PropTypes.string.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

export default StatusModal;
