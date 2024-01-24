import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateIncomeTypeMutation } from "../../../features/income-type/income-type-api";
import { hideEditModal } from "../../../features/modal/modal-slice";
import Button from "../../form-element/Button";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";
import Modal from "../Modal";

// initial state
const initialState = {
  name: "",
  description: "",
};

function IncomeTypeEditModal() {
  const { editModal } = useSelector((state) => state?.modal);

  // hooks
  const [updateIncomeType, { isLoading, isSuccess, isError, error, status }] =
    useUpdateIncomeTypeMutation();

  // local state

  const [categoryForm, setCategoryForm] = React.useState(
    {
      ...editModal?.data,
    } || initialState
  );
  const [errors, setErrors] = React.useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCategoryForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleModalClose = () => {
    dispatch(hideEditModal());
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryForm.name) return setErrors({ name: "Name is required" });

    // update category
    updateIncomeType({
      id: categoryForm.id,
      body: { ...categoryForm },
    });
  };

  // handle response state
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Income type updated successfully");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.errors || "Something went wrong");
    }
  }, [isSuccess, status, dispatch, isError, error]);

  // set category types

  return (
    <Modal title="Edit Income Type" handleClose={handleModalClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 w-full">
          <div>
            <Input
              label="Income Type"
              name="name"
              key="name"
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
            handler={() => {
              dispatch(hideEditModal());
            }}
          />
        </div>
      </form>
    </Modal>
  );
}

export default IncomeTypeEditModal;
