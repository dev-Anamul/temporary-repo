import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import Input from "../../components/form-element/input";
import Password from "../../components/form-element/password";
import Logo from "../../components/logo/logo";
import { useLoginMutation } from "../../features/auth/auth-api";
import useWindowWidth from "../../hooks/useWindow";
import { saveCookie } from "../../utils/manage-cookie";
import { AuthValidator } from "../../validators/auth";

function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const w600 = useWindowWidth(600);

  // const isDarkTheme = useThemeDetector();
  const isDarkTheme = false;

  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginValidator = new AuthValidator(validator);
    const { isValid, errors } = loginValidator.validateLoginData(formData);

    if (!isValid) return setErrors(errors);

    // call login api
    login(formData);
  };

  React.useEffect(() => {
    if (!isLoading && isSuccess) {
      saveCookie("token", data?.data?.access_token);
      navigate("/");

      if (data?.data?.user?.role !== "admin") {
        toast.dismiss();
        toast.error("You you have no permission to access this page");
      }
    }
  }, [isSuccess, isLoading, navigate, data]);

  React.useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center dark:bg-slate-700">
      <div className={w600 && "px-5"}>
        <Logo className="m-auto w-[250px]" />
        <form
          className="max-w-[450px] bg-white dark:text-white p-10 rounded-lg shadow-lg mt-5 dark:bg-slate-900"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-medium border-b mb-5 pb-1 text-black dark:text-white font-poppins">
            Login
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
            <Password
              label="Password"
              name="password"
              value={formData.password}
              isError={errors?.password}
              errorMessage={errors?.password}
              handleChange={handleChange}
            />
          </div>
          <button
            className="btn w-full rounded-md text-white"
            style={{ backgroundColor: "#1B5276" }}
            disabled={isLoading}
            type="submit"
          >
            Login
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
              <Link
                to="/forgot-password"
                className="text-blue-500 text-sm mt-2 font-poppins"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>

        <Toaster />
      </div>
    </div>
  );
}

export default Login;
