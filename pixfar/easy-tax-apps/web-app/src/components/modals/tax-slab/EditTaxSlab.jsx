import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { hideEditModal } from "../../../features/modal/modal-slice";
import { useUpdateTaxSlabMutation } from "../../../features/tax-slab/tax-slab-api";
import {
  floatAndIntegerNumber,
  onlyNumber,
} from "../../../utils/number-validation";
import { taxSlabValidator } from "../../../validators/taxslab";
import Button from "../../form-element/Button";
import Input from "../../form-element/input";
import Modal from "../Modal";

// initial state
const initialState = {
  min: "",
  max: "",
  rate: "",
};

function EditTaxSlab() {
  const { editModal } = useSelector((state) => state?.modal);
  // local state
  const [taxSlabForm, setTaxSlabForm] = React.useState(
    { ...editModal?.data, rate: +editModal?.data?.rate * 100 } || initialState
  );
  const [errors, setErrors] = React.useState({});

  console.log("editModal => ", editModal.rate);
  // api hooks
  const [updateTaxSlab, { isLoading, isSuccess, status, isError, error }] =
    useUpdateTaxSlabMutation();

  const dispatch = useDispatch();

  const handleMinMaxChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || onlyNumber(value)) {
      setTaxSlabForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRateChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || floatAndIntegerNumber(value)) {
      setTaxSlabForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleModalClose = () => {
    dispatch(hideEditModal());
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors: validationErrors, isValid } = taxSlabValidator(taxSlabForm);

    if (!isValid) {
      return setErrors(validationErrors);
    }

    updateTaxSlab({
      id: editModal?.data?._id,
      min: +taxSlabForm.min,
      max: +taxSlabForm.max,
      rate: +taxSlabForm.rate * 0.01,
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Tax slab updated successfully!");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message);
      console.log(error);
    }
  }, [isSuccess, isError, error, status, dispatch]);

  return (
    <Modal title="Edit tax slab" handleClose={handleModalClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 w-full">
          <div>
            <Input
              label="Minimum"
              name="min"
              value={taxSlabForm.min}
              isError={errors?.min}
              errorMessage={errors?.min}
              handleChange={handleMinMaxChange}
            />
          </div>
          <div>
            <Input
              label="Maximum"
              name="max"
              value={taxSlabForm.max}
              isError={errors?.max}
              errorMessage={errors?.max}
              handleChange={handleMinMaxChange}
            />
          </div>
          <div>
            <Input
              label="Tax rate (%)"
              name="rate"
              value={taxSlabForm.rate}
              isError={errors?.rate}
              errorMessage={errors?.rate}
              handleChange={handleRateChange}
              placeholder="rate in percentage (%)"
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

export default EditTaxSlab;
