import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideEditModal } from "../../../features/modal/modal-slice";
import { useCreateTaxSlabMutation } from "../../../features/tax-slab/tax-slab-api";
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

function AddTaxSlab() {
  // local state
  const [taxSlabForm, setTaxSlabForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  // api hooks
  const [addTaxSlab, { isLoading, status, isSuccess, isError, error }] =
    useCreateTaxSlabMutation();

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

    addTaxSlab({
      min: +taxSlabForm.min,
      max: +taxSlabForm.max,
      rate: +taxSlabForm.rate / 100,
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Tax slab added successfully!");
      setTaxSlabForm(initialState);
      dispatch(hideEditModal());
    } else if (status === "rejected" && isError) {
      toast.dismiss();
      toast.error(JSON.stringify(error?.data?.message));
    }
  }, [isSuccess, status, dispatch, isError, error]);

  return (
    <Modal title="Add tax slab" handleClose={handleModalClose}>
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
              placeholder={"rate in percentage (%)"}
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

export default AddTaxSlab;
