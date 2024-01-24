import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useCreateCategoryMutation } from "../../../features/category/category-api";
import { hideAddModal } from "../../../features/modal/modal-slice";
import { floatAndIntegerNumber } from "../../../utils/number-validation";
import { addCategoryValidator } from "../../../validators/category";
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

function AddCategoryModal() {
  const [categoryForm, setCategoryForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  // hooks and variable
  const dispatch = useDispatch();

  // api hooks
  const [addCategory, { isLoading, isSuccess, isError, error, status }] =
    useCreateCategoryMutation();

  // handlers
  const handleModalClose = () => {
    dispatch(hideAddModal());
  };

  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors: validationErrors } =
      addCategoryValidator(categoryForm);

    console.log(isValid, validationErrors);

    if (!isValid) {
      return setErrors(validationErrors);
    }

    // add category
    addCategory({
      ...categoryForm,
      claimablePercentage: categoryForm.claimablePercentage / 100,
      depreciationRate: categoryForm.depreciationRate / 100,
    });
  };

  // handle side effect
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      setCategoryForm(initialState);
      toast.dismiss();
      toast.success("Expense type added successfully");
      dispatch(hideAddModal());
      return;
    }

    if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message);
      console.log(error);
    }
  }, [isSuccess, status, dispatch, isError, error]);

  return (
    <Modal title="Add Expense Type" handleClose={handleModalClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 w-full">
          <div>
            <Input
              label="Expense Type"
              name="name"
              key="name"
              placeholder={"Expense Type"}
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
              value={categoryForm.depreciationRate}
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
            handler={handleModalClose}
          />
        </div>
      </form>
    </Modal>
  );
}

export default AddCategoryModal;
