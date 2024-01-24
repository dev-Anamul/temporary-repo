import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/form-element/Button";
import TextArea from "../../components/form-element/TextArea";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import { useCreateCategoryMutation } from "../../features/category/category-api";
import { addCategoryValidator } from "../../validators/category";

// initial state
const initialState = {
  name: "",
  description: "",
  claimablePercentage: "",
};

function AddCategory() {
  const [categoryForm, setCategoryForm] = React.useState(initialState);
  const [headerModal, setHeaderModal] = React.useState(true);
  const [errors, setErrors] = React.useState({});

  // hooks
  const [addCategory, { isLoading, isError, error, status, isSuccess }] =
    useCreateCategoryMutation();

  const navigate = useNavigate();

  // handle change
  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } =
      addCategoryValidator(categoryForm);

    console.log(isValid, validationErrors);

    if (!isValid) {
      return setErrors(validationErrors);
    }

    // add category
    addCategory(categoryForm);
  };

  // set category form
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Category added successfully");
      setCategoryForm(initialState);
      navigate("/category-list");
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.errors || "Something went wrong");
    }
  }, [isSuccess, status, isError, error, navigate]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Add Expense Type"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-4  w-full">
            <div>
              <Input
                label="Category Name"
                name="name"
                key="name"
                isError={errors?.name}
                errorMessage={errors?.name}
                value={categoryForm.name}
                handleChange={handleChange}
              />
            </div>
            <div>
              <Input
                label="Claimable Percentage"
                name="claimablePercentage"
                key="claimablePercentage"
                isError={errors?.claimablePercentage}
                errorMessage={errors?.claimablePercentage}
                value={categoryForm.claimablePercentage}
                handleChange={handleChange}
              />
            </div>
            <div>
              <TextArea
                label="Description"
                name="description"
                key="description"
                isError={errors?.description}
                errorMessage={errors?.description}
                value={categoryForm.description}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-end mt-3 gap-4">
            <Button
              text="Save"
              type="submit"
              disabled={isLoading || status === "pending"}
              Icon={() => <CheckCircle size={18} />}
            />
            <Button
              text="Back"
              type="button"
              disabled={isLoading || status === "pending"}
              Icon={() => <XCircle size={18} />}
              handler={() => {
                window.history.back();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
