import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useAddIncomeTypeMutation } from "../../../features/income-type/income-type-api";
import { hideAddModal } from "../../../features/modal/modal-slice";
import Button from "../../form-element/Button";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";
import Modal from "../Modal";

// initial state
const initialState = {
  name: "",
  description: "",
};

function AddIncomeTypeModal() {
  const [categoryForm, setCategoryForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  // hooks and variable
  const dispatch = useDispatch();

  // api hooks
  const [addIncomeType, { isLoading, isSuccess, isError, error, status }] =
    useAddIncomeTypeMutation();

  // handlers
  const handleModalClose = () => {
    dispatch(hideAddModal());
  };

  const handleChange = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryForm.name) {
      return setErrors((prev) => ({ ...prev, name: "Name is required" }));
    }

    // add category
    addIncomeType({
      ...categoryForm,
    });
  };

  // handle side effect
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      setCategoryForm(initialState);
      toast.dismiss();
      toast.success("Income type added successfully");
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
    <Modal title="Add Income Type" handleClose={handleModalClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 w-full">
          <div>
            <Input
              label="Income Type"
              name="name"
              key="name"
              placeholder={"Income Type"}
              isError={errors?.name}
              errorMessage={errors?.name}
              value={categoryForm.name}
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

export default AddIncomeTypeModal;
