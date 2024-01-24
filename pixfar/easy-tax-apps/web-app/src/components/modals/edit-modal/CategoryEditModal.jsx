import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateCategoryMutation } from "../../../features/category/category-api";
import { hideEditModal } from "../../../features/modal/modal-slice";
import { floatAndIntegerNumber } from "../../../utils/number-validation";
import { editCategoryValidator } from "../../../validators/category";
import Button from "../../form-element/Button";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";
import Modal from "../Modal";

// initial state
const initialState = {
  name: "",
  description: "",
  claimablePercentage: "",
  depreciationRate: "",
};

function CategoryEditModal() {
  const { editModal } = useSelector((state) => state?.modal);

  // hooks
  const [updateCategory, { isLoading, isSuccess, isError, error, status }] =
    useUpdateCategoryMutation();

  // local state

  const [categoryForm, setCategoryForm] = React.useState(
    {
      ...editModal?.data,
      claimablePercentage: editModal?.data?.claimablePercentage * 100,
      depreciationRate: editModal?.data?.depreciationRate * 100,
    } || initialState
  );
  const [errors, setErrors] = React.useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCategoryForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleClaimablePercentageChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || floatAndIntegerNumber(value)) {
      setCategoryForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDepreciationRateChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || floatAndIntegerNumber(value)) {
      setCategoryForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleModalClose = () => {
    dispatch(hideEditModal());
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } =
      editCategoryValidator(categoryForm);

    if (!isValid) {
      return setErrors(validationErrors);
    }

    // update category
    updateCategory({
      ...categoryForm,
      claimablePercentage: categoryForm.claimablePercentage / 100,
      depreciationRate: categoryForm.depreciationRate / 100,
    });
  };

  // handle response state
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Category updated successfully");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.errors || "Something went wrong");
    }
  }, [isSuccess, status, dispatch, isError, error]);

  // set category types

  return (
    <Modal title="Edit Expense Type" handleClose={handleModalClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 w-full">
          <div>
            <Input
              label="Expense Type"
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
              placeholder={"Claimable Percentage  % "}
              isError={errors?.claimablePercentage}
              errorMessage={errors?.claimablePercentage}
              value={categoryForm.claimablePercentage}
              handleChange={handleClaimablePercentageChange}
            />
          </div>
          <div>
            <Input
              label="Depreciation Rate"
              name="depreciationRate"
              key="depreciationRate"
              placeholder={"Depreciation rate  % "}
              isError={errors?.depreciationRate}
              errorMessage={errors?.depreciationRate}
              value={categoryForm?.depreciationRate}
              handleChange={handleDepreciationRateChange}
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
            disabled={isLoading}
            Icon={() => <CheckCircle size={18} />}
          />
          <Button
            text="Back"
            type="button"
            disabled={isLoading}
            Icon={() => <XCircle size={18} />}
            handler={() => {
              dispatch(hideEditModal());
            }}
          />
        </div>
      </form>
    </Modal>
  );
}

export default CategoryEditModal;
