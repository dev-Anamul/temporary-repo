import React from "react";
import { ArrowLeftCircle, CheckCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateFiscalYearMutation } from "../../../features/fiscal-year/fiscal-year-api";
import { hideEditModal } from "../../../features/modal/modal-slice";
import Button from "../../form-element/Button";
import DatePicker from "../../form-element/DatePicker";
import Input from "../../form-element/input";
import Modal from "../Modal";

const EditFiscalYear = () => {
  const { editModal } = useSelector((state) => state?.modal);
  const [fiscalForm, setFiscalForm] = React.useState(
    {
      ...editModal?.data,
      fiscalYear: editModal?.data?.fiscalYear,
      startDate: editModal?.data?.startDate,
      endDate: editModal?.data?.endDate,
    } || {}
  );

  const dispatch = useDispatch();

  // api hooks
  const [editFiscalYear, { isLoading, isSuccess, isError, error, status }] =
    useUpdateFiscalYearMutation();

  const handleClose = () => {
    dispatch(hideEditModal());
  };

  const handleFiscalYearChange = (e) => {
    setFiscalForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editFiscalYear({
      id: fiscalForm._id,
      body: {
        ...editModal?.data,
        ...fiscalForm,
      },
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Fiscal Year updated successfully!");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(
        typeof error?.data?.message === "string"
          ? error?.data?.message
          : "Something went wrong!"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return (
    <Modal title="Update Fiscal Year" handleClose={handleClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 my-4 w-full">
          <div>
            <Input
              label="Fiscal Year"
              key="fiscalYear"
              name="fiscalYear"
              className="w-full"
              value={fiscalForm.fiscalYear}
              handleChange={handleFiscalYearChange}
            />
          </div>
          <div>
            <DatePicker
              label="Start Date"
              name="startDate"
              key="startDate"
              // isError={errors?.expenseDate}
              // errorMessage={errors?.expenseDate}
              value={
                fiscalForm.startDate ? new Date(fiscalForm.startDate) : null
              }
              handleChange={handleFiscalYearChange}
            />
          </div>
          <div>
            <DatePicker
              label="End Date"
              name="endDate"
              key="endDate"
              // isError={errors?.expenseDate}
              // errorMessage={errors?.expenseDate}
              value={fiscalForm.endDate ? new Date(fiscalForm.endDate) : null}
              handleChange={handleFiscalYearChange}
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
};

export default EditFiscalYear;
