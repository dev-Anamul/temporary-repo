import React from "react";
import { ArrowLeftCircle, CheckCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateIncomeSourceMutation } from "../../../features/income-source/income-source-api";
import { hideEditModal } from "../../../features/modal/modal-slice";
import Button from "../../form-element/Button";
import DatePicker from "../../form-element/DatePicker";
import Select from "../../form-element/Select";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";
import Modal from "../Modal";

// initial state
const initialState = {
  incomeSource: "",
  incomeType: "",
  amount: "",
  incomeDate: "",
  status: "",
  description: "",
};

function IncomeEditModal() {
  // get modal data from the redux store
  const { editModal } = useSelector((state) => state?.modal);

  // api queries
  const [updateIncome, { isLoading, isError, error, status, isSuccess }] =
    useUpdateIncomeSourceMutation();

  // local state
  const [incomeForm, setIncomeForm] = React.useState(
    editModal?.data || initialState
  );
  const [errors, setErrors] = React.useState({});

  // hooks and variables
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideEditModal());
  };

  const handleChange = (e) => {
    setIncomeForm({ ...incomeForm, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateIncome({
      ...incomeForm,
      amount: Number(incomeForm.amount),
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(hideEditModal());
    } else if (
      isError &&
      status === "rejected" &&
      typeof error?.data?.errors === "string"
    ) {
      setErrors(error?.data?.errors);
    }
  }, [isSuccess, isError, error, status, dispatch]);

  return (
    <Modal title="Update Income" handleClose={handleClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div>
            <Input
              label="Income Name"
              name="expenseName"
              key="expenseName"
              value={incomeForm.incomeSource}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Amount"
              name="amount"
              key="amount"
              value={incomeForm.amount}
              handleChange={handleChange}
            />
          </div>
          <div>
            <DatePicker
              label="Income Date"
              name="incomeDate"
              key="incomeDate"
              value={
                incomeForm.incomeDate ? new Date(incomeForm.incomeDate) : null
              }
              handleChange={handleChange}
            />
          </div>
          <div>
            <Select
              label="Status"
              name="status"
              key="status"
              value={incomeForm?.status}
              handleChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </Select>
          </div>
          <div className="col-span-2">
            <TextArea
              label="Description"
              name="description"
              key="description"
              value={incomeForm.description}
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
            Icon={() => <ArrowLeftCircle size={18} />}
            handler={() => dispatch(hideEditModal())}
          />
        </div>
      </form>
    </Modal>
  );
}

export default IncomeEditModal;
