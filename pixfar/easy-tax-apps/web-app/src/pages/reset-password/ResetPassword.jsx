import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/form-element/input";
import Password from "../../components/form-element/password";
import Logo from "../../components/logo/logo";
import { useResetPasswordMutation } from "../../features/auth/auth-api";
import { resetPasswordValidator } from "../../validators/reset-password";

const initialState = {
  token: "",
  email: "",
  newPassword: "",
  confirmPassword: "",
};

function ResetPassword() {
  const [formData, setFormData] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  // hooks
  const navigate = useNavigate();

  // api hooks
  const [resetPassword, { isLoading, error, isError, isSuccess, status }] =
    useResetPasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = resetPasswordValidator(formData);

    if (!isValid) return setErrors(errors);

    resetPassword({ data: formData });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Password reset successfully");
      setFormData(initialState);
      navigate("/login");
    }
  }, [isSuccess, status, navigate]);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center dark:bg-slate-700">
      <div>
        <Logo className="m-auto w-[250px]" />
        <form
          className="max-w-[450px] bg-white dark:text-white p-10 rounded-lg shadow-lg mt-5 dark:bg-slate-900"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-medium border-b mb-5 pb-1 text-black dark:text-white font-poppins">
            Reset Password
          </h1>
          <div className="flex flex-col gap-2">
            <Input
              label="Token"
              name="token"
              value={formData.token}
              placeholder={"token"}
              isError={errors?.token}
              errorMessage={errors?.token}
              handleChange={handleChange}
              className="dark:text-white"
            />
            <Input
              label="Email"
              name="email"
              value={formData.email}
              placeholder={"email"}
              isError={errors?.email}
              errorMessage={errors?.email}
              handleChange={handleChange}
              className="dark:text-white"
            />
            <Password
              label="Password"
              name="newPassword"
              value={formData.newPassword}
              isError={errors?.newPassword}
              errorMessage={errors?.newPassword}
              handleChange={handleChange}
            />
            <Password
              label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              isError={errors?.confirmPassword}
              errorMessage={errors?.confirmPassword}
              handleChange={handleChange}
            />
          </div>
          <button
            className="btn w-full rounded-md text-white"
            style={{ backgroundColor: "#1B5276" }}
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Loading..." : "Reset Password"}
          </button>
          <div className="flex justify-between">
            <div>
              {isError && (
                <p className="text-red-500 text-sm mt-2">
                  {error.data?.message || "Something went wrong"}
                </p>
              )}
            </div>
            <div>
              <Link to="/login" className="text-blue-500 text-sm mt-2">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* TOAST */}
      <Toaster />
    </div>
  );
}

export default ResetPassword;
