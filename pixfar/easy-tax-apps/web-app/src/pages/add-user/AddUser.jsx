import React from "react";
import { ArrowLeftCircle, CheckCircle } from "react-feather";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Button from "../../components/form-element/Button";
import DatePicker from "../../components/form-element/DatePicker";
import MobileInput from "../../components/form-element/MobileInput";
import Select from "../../components/form-element/Select";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import { useCreateUserMutation } from "../../features/users/users-api";
import useWindowWidth from "../../hooks/useWindow";
import { UserValidator } from "../../validators/user";

// initial state
const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  mobile: "",
  dateOfBirth: null,
  address: "",
  email: "",
  password: "",
  role: "",
  status: "",
  termsAndConditions: true,
};

function AddUser() {
  // local state
  const [userForm, setUserForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [headerModal, setHeaderModal] = React.useState(true);
  const w750 = useWindowWidth(750);
  const w600 = useWindowWidth(600);

  // hooks
  const [addUser, { isLoading, isError, error, status, isSuccess }] =
    useCreateUserMutation();
  const navigate = useNavigate();

  // handle change
  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // // handle checkbox change
  // const handleCheckboxChange = (e) => {
  //   const { checked } = e.target;

  //   if (checked) setErrors((prev) => ({ ...prev, termsAndConditions: "" }));

  //   setUserForm((prev) => ({
  //     ...prev,
  //     termsAndConditions: !prev.termsAndConditions,
  //   }));
  // };

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate user form
    const userValidator = new UserValidator(validator);
    const { errors, isValid } = userValidator.userCreateValidator(userForm);

    // if not valid then set errors
    if (!isValid) return setErrors(errors);

    // if valid then add user
    addUser({ ...userForm, mobile: userForm.mobile });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      setUserForm(initialState);
      navigate("/users");
    } else if (isError && status === "rejected" && error?.data?.message) {
      toast.dismiss();
      toast.error(error?.data?.message);
    } else if (
      isError &&
      status === "rejected" &&
      Array.isArray(error?.data?.errors)
    ) {
      const transformedErrors = error.data.errors.reduce((acc, item) => {
        acc[item?.path] = item.message;
        return acc;
      }, {});
      setErrors(transformedErrors);
    }
  }, [status, isSuccess, navigate, isError, error]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Create User"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>

      <div className="flex justify-between items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div
            className={`grid ${
              w600 ? "grid-cols-1" : "grid-cols-2"
            } gap-4 w-full`}
          >
            <div>
              <Input
                label="First Name"
                name="firstName"
                key="firstName"
                placeholder={"First Name"}
                isError={errors.firstName}
                errorMessage={errors.firstName}
                value={userForm.firstName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Middle Name"
                name="middleName"
                key="middleName"
                placeholder={"Middle Name"}
                isError={errors.middleName}
                errorMessage={errors.middleName}
                value={userForm.middleName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Last Name"
                name="lastName"
                key="lastName"
                placeholder={"Last Name"}
                isError={errors.lastName}
                errorMessage={errors.lastName}
                value={userForm.lastName}
                handleChange={handleChange}
              />
            </div>
            <div>
              <MobileInput
                label="Mobile"
                name="mobile"
                key="mobile"
                placeholder={"Mobile"}
                isError={errors.mobile}
                errorMessage={errors.mobile}
                value={userForm.mobile}
                handleChange={handleChange}
              />
            </div>
            <div>
              <DatePicker
                label="Date of Birth"
                name="dateOfBirth"
                key="dateOfBirth"
                errorMessage={errors.dateOfBirth}
                isError={errors.dateOfBirth}
                value={userForm.dateOfBirth}
                handleChange={handleChange}
              />
            </div>

            <div>
              <Input
                label="Address"
                name="address"
                key="address"
                isError={errors.address}
                errorMessage={errors.address}
                value={userForm.address}
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
                value={userForm.email}
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
                value={userForm.password}
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
                value={userForm.role}
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
                value={userForm.status}
                handleChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Select>
            </div>
            {/* <div className="self-center inline-block mt-[-20px]">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-sm checkbox-info focus:ring-0"
                  checked={userForm.termsAndConditions}
                  onChange={handleCheckboxChange}
                />
                <span className="label-text text-base text-black dark:text-white">
                  Terms and Condition
                </span>
              </label>
              {errors.termsAndConditions && (
                <span className="text-sm text-red-500">
                  {errors.termsAndConditions}
                </span>
              )}
            </div> */}
          </div>

          <div
            className={
              w750 ? "grid grid-cols-2 gap-4" : "flex justify-end gap-4"
            }
          >
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

export default AddUser;
