import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { hideEditModal } from "../../../features/modal/modal-slice";
import { useUpdateUserMutation } from "../../../features/users/users-api";
import Button from "../../form-element/Button";
import DatePicker from "../../form-element/DatePicker";
import MobileInput from "../../form-element/MobileInput";
import Select from "../../form-element/Select";
import Input from "../../form-element/input";
import Loader from "../../ui/Loader";
import Modal from "../Modal";

function UserEditModal() {
  const { editModal } = useSelector((state) => state?.modal);

  const [userForm, setUserForm] = React.useState(
    {
      ...editModal?.data,
      mobile:
        editModal?.data?.mobile?.split(" ")[1] ||
        editModal?.data?.mobile?.split(" ")[0],
    } || {}
  );

  // query hooks
  const [updateUser, { isError, isLoading, isSuccess, error, status }] =
    useUpdateUserMutation();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(hideEditModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser({ ...userForm, mobile: userForm?.mobile });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("User updated successfully!");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message);
    }
  }, [isSuccess, status, dispatch, isError, error]);

  return isLoading ? (
    <Loader />
  ) : (
    <Modal title="Update User" handleClose={handleClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
          <div>
            <Input
              label="First Name"
              name="firstName"
              key="firstName"
              value={userForm?.firstName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Middle Name"
              name="middleName"
              key="middleName"
              value={userForm?.middleName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Last Name"
              name="lastName"
              key="lastName"
              value={userForm?.lastName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <MobileInput
              label="Mobile"
              name="mobile"
              value={userForm?.mobile}
              handleChange={handleChange}
            />
          </div>

          <div>
            <DatePicker
              label="Date of Birth"
              name="dateOfBirth"
              key="dateOfBirth"
              value={
                userForm?.dateOfBirth ? new Date(userForm?.dateOfBirth) : null
              }
              handleChange={handleChange}
            />
          </div>
          {/* <div>
            <Input
              label="Notification Token"
              name="notificationToken"
              key="notificationToken"
              value={userForm?.notificationToken}
              handleChange={handleChange}
            />
          </div> */}
          {/* <div>
            <Select
              label="Notification Type"
              name="notificationType"
              key="notificationType"
              value={userForm?.notificationType}
              handleChange={handleChange}
            >
              <option value="FCM">FCM</option>
              <option value="APNS">APNS</option>
            </Select>
          </div> */}
          <div>
            <Input
              label="Address"
              name="address"
              key="address"
              value={userForm?.address}
              handleChange={handleChange}
            />
          </div>
          {/* <div>
            <Input
              label="Employment Work Type"
              name="employmentWorkType"
              key="employmentWorkType"
              value={userForm?.employmentWorkType}
              handleChange={handleChange}
            />
          </div> */}
          <div>
            <Input
              label="Email"
              name="email"
              key="email"
              value={userForm?.email}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Select
              label="Role"
              name="role"
              key="role"
              value={userForm?.role}
              handleChange={handleChange}
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>
          </div>
          <div>
            <Select
              label="Status"
              name="status"
              key="status"
              value={userForm?.status}
              handleChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Select>
          </div>
        </div>
        <div className="flex justify-end mt-3 gap-4">
          <Button
            type="submit"
            text="Save"
            Icon={() => <CheckCircle size={18} />}
          />
          <Button
            type="button"
            text="Cancel"
            Icon={() => <XCircle size={18} />}
            handler={() => dispatch(hideEditModal())}
          />
        </div>
      </form>
    </Modal>
  );
}

export default UserEditModal;
