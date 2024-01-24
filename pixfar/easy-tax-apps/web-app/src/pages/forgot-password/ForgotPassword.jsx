import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import validator from "validator";
import Input from "../../components/form-element/input";
import Logo from "../../components/logo/logo";
import { useForgotPasswordMutation } from "../../features/auth/auth-api";
import { AuthValidator } from "../../validators/auth";

function ForgotPassword() {
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  // api hooks
  const [forgotPassword, { isError, isLoading, error, isSuccess, status }] =
    useForgotPasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const forgotPasswordValidator = new AuthValidator(validator);
    const { isValid, errors } =
      forgotPasswordValidator.forgotPassword(formData);

    if (!isValid) return setErrors(errors);

    forgotPassword({ data: formData });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Reset link sent to your email successfully. Please check");
      setFormData({});
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error.data?.message || "Something went wrong");
    }
  }, [isSuccess, status, isError, error]);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center dark:bg-slate-700">
      <div>
        <Logo className="m-auto w-[250px]" />
        <form
          className="max-w-[450px] bg-white dark:text-white p-10 rounded-lg shadow-lg mt-5 dark:bg-slate-900"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-medium border-b mb-2 pb-1 text-black dark:text-white font-poppins">
            Forgot Password
          </h1>
          <div className="flex flex-col gap-2">
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
            <button
              className="btn w-full rounded-md text-white"
              style={{ backgroundColor: "#1B5276" }}
              disabled={isLoading}
              type="submit"
            >
              Send Reset Link
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {isError && (
                <p className="text-red-500 text-sm mt-2">
                  {error.data?.message || "Something went wrong"}
                </p>
              )}
            </div>
            <div>
              <Link
                to="/login"
                className="text-blue-500 text-sm mt-2 font-poppins"
              >
                Login?
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

export default ForgotPassword;
