import React from "react";
import { ArrowLeftCircle, CheckCircle } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { expenseStatus } from "../../../enum/status";
import { useGetCategoriesQuery } from "../../../features/category/category-api";
import { useUpdateExpenseMutation } from "../../../features/expense/expense-api";
import { hideEditModal } from "../../../features/modal/modal-slice";
import Button from "../../form-element/Button";
import DatePicker from "../../form-element/DatePicker";
import Select from "../../form-element/Select";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";
import Modal from "../Modal";

function ExpenseEditModal() {
  const { editModal } = useSelector((state) => state?.modal);
  const [expenseForm, setExpenseForm] = React.useState(
    { ...editModal?.data, expenseType: editModal?.data?.expenseType?._id } || {}
  );

  // api queries
  const { data: categories } = useGetCategoriesQuery({});
  const [updateExpense, { isLoading, isError, error, status, isSuccess }] =
    useUpdateExpenseMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setExpenseForm({ ...expenseForm, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name) => {
    setExpenseForm((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleClose = () => {
    dispatch(hideEditModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExpense({
      ...expenseForm,
      totalAmount: Number(expenseForm.totalAmount),
      expenseDate: expenseForm.expenseDate?.split("T")[0],
    });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Expense updated successfully!");
      dispatch(hideEditModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message);
      console.log(error);
    }
  }, [isSuccess, isError, error, status, navigate, dispatch]);

  return (
    <Modal title="Update Expense" handleClose={handleClose}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2  gap-4 w-full">
          <div>
            <Input
              label="Expense Name"
              name="expenseName"
              key="expenseName"
              value={expenseForm.expenseName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Select
              label="Expense Type"
              name="expenseType"
              key="expenseType"
              value={expenseForm.expenseType}
              handleChange={handleChange}
            >
              {categories?.data?.map((category) => (
                <option key={category.id} value={category.id}>
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
              value={expenseForm.totalAmount}
              handleChange={handleChange}
            />
          </div>

          <div>
            <DatePicker
              label="Expense Date"
              name="expenseDate"
              key="expenseDate"
              value={
                expenseForm.expenseDate
                  ? new Date(expenseForm.expenseDate)
                  : null
              }
              handleChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <Select
              label="Status"
              name="status"
              key="status"
              value={expenseForm.status}
              handleChange={handleChange}
            >
              {Object.keys(expenseStatus).map((key) => {
                return (
                  <option key={key} value={key} className="capitalize">
                    {expenseStatus[key]}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="col-span-2">
            <TextArea
              label="Description"
              name="description"
              key="description"
              value={expenseForm.description}
              handleChange={handleChange}
            />
          </div>
          <div className="flex col-span-2 justify-between items-center">
            <div>
              <label className="label cursor-pointer justify-start gap-4">
                <span className="label-text text-base font-poppins text-black dark:text-white">
                  Is GST Claimable
                </span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded checkbox-info"
                  checked={expenseForm.isGSTClaimable}
                  onChange={() => handleCheckboxChange("isGSTClaimable")}
                />
              </label>
            </div>
            <div>
              <label className="label cursor-pointer justify-start gap-4">
                <span className="label-text text-base font-poppins text-black dark:text-white">
                  Is Asset
                </span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded checkbox-info"
                  checked={expenseForm.isAsset}
                  onChange={() => handleCheckboxChange("isAsset")}
                />
              </label>
            </div>
            <div className="flex justify-end text-black text-base dark:text-white font-poppins ">
              <a
                href={expenseForm?.filePath}
                className="btn-link link-primary"
                target="_blank"
                rel="noreferrer"
              >
                View attachment
              </a>
            </div>
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

export default ExpenseEditModal;
