import React from "react";
import { ArrowLeftCircle, CheckCircle, Eye } from "react-feather";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/form-element/Button";
import DatePicker from "../../components/form-element/DatePicker";
import ImageInput from "../../components/form-element/ImageInput";
import Select from "../../components/form-element/Select";
import TextArea from "../../components/form-element/TextArea";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import { useGetCategoriesQuery } from "../../features/category/category-api";
import { useCreateExpenseMutation } from "../../features/expense/expense-api";
import { useGetUsersQuery } from "../../features/users/users-api";
import useWindowWidth from "../../hooks/useWindow";
import { createExpenseValidator } from "../../validators/expense";

// initial state
const initialState = {
  expenseName: "",
  expenseType: "",
  totalAmount: "",
  expenseDate: null,
  isGSTClaimable: false,
  description: "",
  userId: "",
};

function AddExpense() {
  const [errors, setErrors] = React.useState({});
  const [image, setImage] = React.useState(null);
  const [imageName, setImageName] = React.useState(null);

  const { data: categories } = useGetCategoriesQuery({});
  const [addExpense, { isLoading, isError, isSuccess, error, status }] =
    useCreateExpenseMutation();
  const { data: users } = useGetUsersQuery({});

  // local state
  const [expenseForm, setExpenseForm] = React.useState(initialState);
  const [headerModal, setHeaderModal] = React.useState(true);

  // utility hooks
  const navigate = useNavigate();
  const w600 = useWindowWidth(600);

  // handle change
  const handleChange = (e) => {
    setExpenseForm({ ...expenseForm, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // handle checkbox change
  const handleCheckboxChange = () => {
    setExpenseForm((prev) => ({
      ...prev,
      isGSTClaimable: !prev.isGSTClaimable,
    }));
  };

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = createExpenseValidator({
      ...expenseForm,
      filePath: image,
    });

    if (!isValid) return setErrors(errors);

    const form = new FormData();

    form.append("expenseName", expenseForm.expenseName);
    form.append("expenseType", expenseForm.expenseType);
    form.append("totalAmount", +expenseForm.totalAmount);
    form.append("expenseDate", expenseForm.expenseDate);
    form.append("isGSTClaimable", expenseForm.isGSTClaimable);
    form.append("description", expenseForm.description);
    form.append("userId", expenseForm.userId);
    form.append("filePath", image);

    addExpense(form);
  };

  const handleImageChange = (file) => {
    setErrors((prev) => ({ ...prev, filePath: "" }));
    setImage(file);
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Expense added successfully");
      navigate("/expense-list");
    } else if (isError && status === "rejected") {
      toast.dismiss();
      if (typeof error?.data?.message === "string") {
        toast.error(error?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }, [isSuccess, isError, error, status, navigate]);

  const handleImageShow = () => {
    Swal.fire({
      imageUrl: imageName?.link,
      imageWidth: 400,
      imageAlt: "Expense Image",
      confirmButtonText: "Close",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Create Expense"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div className="flex justify-between items-center w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <div
            className={` ${
              w600 ? "flex flex-col" : "grid grid-cols-2"
            } gap-4 w-full`}
          >
            <div>
              <Input
                label="Expense Name"
                name="expenseName"
                key="expenseName"
                isError={errors?.expenseName}
                errorMessage={errors?.expenseName}
                value={expenseForm.expenseName}
                handleChange={handleChange}
                placeholder={"Expense Name"}
              />
            </div>
            <div>
              <Select
                label="Expense Type"
                name="expenseType"
                key="expenseType"
                isError={errors?.expenseType}
                errorMessage={errors?.expenseType}
                value={expenseForm.expenseType}
                handleChange={handleChange}
              >
                {categories?.data?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Input
                label="Total Amount"
                name="totalAmount"
                key="totalAmount"
                isError={errors?.totalAmount}
                errorMessage={errors?.totalAmount}
                value={expenseForm.totalAmount}
                handleChange={handleChange}
                placeholder={"Total Amount"}
              />
            </div>

            <div className="w-full">
              <DatePicker
                label="Expense Date"
                name="expenseDate"
                key="expenseDate"
                isError={errors?.expenseDate}
                errorMessage={errors?.expenseDate}
                value={expenseForm.expenseDate}
                handleChange={handleChange}
              />
            </div>
            <div className=" w-full ">
              <span className="label-text pl-1.5 text-black text-base font-poppins dark:text-white">
                Slip Image
              </span>
              <div className="flex items-center gap-5 ">
                <label
                  htmlFor="imageInput"
                  className={`my- w-full block relative border p-4 cursor-pointer rounded-md py-[11px] mt-1 text-slate-600`}
                >
                  {imageName?.name ? imageName?.name : "Choose Image"}
                  {imageName?.link && (
                    <button
                      onClick={handleImageShow}
                      className=" absolute right-3"
                      type="button"
                    >
                      <Eye />
                    </button>
                  )}
                </label>
              </div>
            </div>
            <div className="">
              <Select
                label="User"
                name="userId"
                key="userId"
                isError={errors?.userId}
                errorMessage={errors?.userId}
                value={expenseForm.userId}
                handleChange={handleChange}
              >
                {users?.data?.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.fullName}
                  </option>
                ))}
              </Select>
            </div>
            <div className="col-span-2 mt-[-25px]">
              <TextArea
                label="Description"
                name="description"
                key="description"
                value={expenseForm.description}
                handleChange={handleChange}
              />
            </div>
            <div>
              <div className="flex items-center gap-6">
                <label className="label cursor-pointer justify-start gap-2 mt-[-15px]">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs rounded-sm checkbox-info"
                    value={expenseForm.isGSTClaimable}
                    onChange={handleCheckboxChange}
                  />
                  <span className="label-text text-black dark:text-white font-poppins text-base ">
                    Is GST Claimable
                  </span>
                </label>
                {/* <div className=" mt-4">
                  <ImageInput
                    label="Choose File"
                    side="bottom"
                    handleChange={handleImageChange}
                    className="!btn-sm rounded !my-0 !text-xs !font-normal"
                  />
                </div> */}
              </div>
            </div>
            <div className=" mt-4">
              <ImageInput
                label="Choose File"
                side="bottom"
                handleChange={handleImageChange}
                className="!btn-sm rounded !my-0 !text-xs !font-normal"
                setImageName={setImageName}
                notImage
              />
              {errors?.filePath && (
                <div className="text-sm text-red-500">{errors?.filePath}</div>
              )}
            </div>
          </div>
          <div
            className={`flex ${
              w600 ? "justify-between" : "justify-end"
            }  mt-3 gap-4`}
          >
            <Button
              text="Save"
              type="submit"
              disabled={isLoading}
              Icon={() => <CheckCircle size={18} />}
              className={w600 && "w-[40%]"}
            />
            <Button
              text="Back"
              type="button"
              disabled={isLoading}
              Icon={() => <ArrowLeftCircle size={18} />}
              handler={() => window.history.back()}
              className={w600 && "w-[40%]"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
