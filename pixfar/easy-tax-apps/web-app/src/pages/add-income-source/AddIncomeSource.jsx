import React from "react";
import { ArrowLeftCircle, CheckCircle } from "react-feather";
import Button from "../../components/form-element/Button";
import DatePicker from "../../components/form-element/DatePicker";
import Select from "../../components/form-element/Select";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";

// initial state
const initialState = {};

function AddIncomeSource() {
  const [incomeForm, setIncomeForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [headerModal, setHeaderModal] = React.useState(true);

  // hooks and variables
  // todo: should delete later
  const isLoading = false;

  // handlers
  const handleChange = (e) => {
    setIncomeForm({ ...incomeForm, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleCheckboxChange = () => {
    setIncomeForm((prev) => ({
      ...prev,
      termsAndConditions: !prev.termsAndConditions,
    }));
  };

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Add Income"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div>
              <Input
                label="First Name"
                name="firstName"
                key="firstName"
                isError={errors.firstName}
                errorMessage={errors.firstName}
                value={incomeForm.firstName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Middle Name"
                name="middleName"
                key="middleName"
                isError={errors.middleName}
                errorMessage={errors.middleName}
                value={incomeForm.middleName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Last Name"
                name="lastName"
                key="lastName"
                isError={errors.lastName}
                errorMessage={errors.lastName}
                value={incomeForm.lastName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Mobile"
                name="mobile"
                key="mobile"
                isError={errors.mobile}
                errorMessage={errors.mobile}
                value={incomeForm.mobile}
                handleChange={handleChange}
              />
            </div>
            <div>
              <DatePicker
                label="Date of Birth"
                name="dateOfBirth"
                key="dateOfBirth"
                value={incomeForm.dateOfBirth}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Notification Token"
                name="notificationToken"
                key="notificationToken"
                isError={errors.notificationToken}
                errorMessage={errors.notificationToken}
                value={incomeForm.notificationToken}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Select
                label="Notification Type"
                name="notificationType"
                key="notificationType"
                isError={errors.notificationType}
                errorMessage={errors.notificationType}
                value={incomeForm.notificationType}
                handleChange={handleChange}
              >
                <option value="FCM">FCM</option>
                <option value="APNS">APNS</option>
              </Select>
            </div>
            <div>
              <Input
                label="Address"
                name="address"
                key="address"
                isError={errors.address}
                errorMessage={errors.address}
                value={incomeForm.address}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Employment Work Type"
                name="employmentWorkType"
                key="employmentWorkType"
                isError={errors.employmentWorkType}
                errorMessage={errors.employmentWorkType}
                value={incomeForm.employmentWorkType}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Email"
                name="email"
                key="email"
                isError={errors.email}
                errorMessage={errors.email}
                value={incomeForm.email}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Password"
                name="password"
                key="password"
                isError={errors.password}
                errorMessage={errors.password}
                value={incomeForm.password}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Select
                label="Role"
                name="role"
                key="role"
                isError={errors.role}
                errorMessage={errors.role}
                value={incomeForm.role}
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
                isError={errors.status}
                errorMessage={errors.status}
                value={incomeForm.status}
                handleChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Select>
            </div>
            <div className="self-center inline-block">
              <label className="label cursor-pointer justify-start gap-4 mt-4">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={incomeForm.termsAndConditions}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-start mt-8 gap-4">
            <Button
              text="Back"
              type="button"
              disabled={isLoading}
              Icon={() => <ArrowLeftCircle size={18} />}
              handler={() => {
                window.history.back();
              }}
            />
            <Button
              text="Save"
              type="submit"
              disabled={isLoading}
              Icon={() => <CheckCircle size={18} />}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddIncomeSource;
