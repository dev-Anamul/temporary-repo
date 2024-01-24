import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/form-element/Button";
import Select from "../../components/form-element/Select";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import Loader from "../../components/ui/Loader";
import { useGetOcrExpenseQuery } from "../../features/ocr-expense/ocr-expense-api";
import {
  setSelectedItemIds,
  toggleHeaderSelected,
} from "../../features/ocr-expense/ocr-expense-slice";
import { debounce } from "../../utils/debounce";
import Table from "./table/Table";

function OCRExpenses() {
  // local state
  const [headerModal, setHeaderModal] = React.useState(true);
  const [bulkAction, setBulkAction] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");

  // api hooks
  const {
    data: ocrExpenses,
    isLoading,
    isError,
    error,
    status,
    isSuccess,
  } = useGetOcrExpenseQuery({ search: searchTerm });

  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { headerSelected, selectedItemIds } = useSelector(
    (state) => state.ocrExpense
  );

  console.log("ocrExpenses =>", ocrExpenses);

  // handlers
  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleBulkActionChange = (e) => {
    setBulkAction(e.target.value);
  };

  const debounceSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
  }, 1000);

  // handle bulk actions
  const handleBulkAction = () => {
    if (bulkAction === "process-selected") {
      if (selectedItemIds.length === 0)
        return toast.error("Please select at least one item");
      // todo: implement process selected
      console.log("process selected");
    }
  };
  // handle side effects
  React.useEffect(() => {
    if (headerSelected) {
      const itemIds = ocrExpenses?.data?.map((item) => item.id);
      dispatch(setSelectedItemIds(itemIds));
    } else if (!headerSelected) {
      dispatch(setSelectedItemIds([]));
    }
  }, [headerSelected, dispatch]);

  // track selected item ids
  React.useEffect(() => {
    if (selectedItemIds.length === ocrExpenses?.data?.length)
      dispatch(toggleHeaderSelected(true));
    else if (selectedItemIds.length !== ocrExpenses?.data?.length)
      dispatch(toggleHeaderSelected(false));
  }, [selectedItemIds, dispatch]);

  // decide what to render based on the state of the request
  let content = null;
  if (isLoading || status === "pending") content = <Loader />;
  else if (isError && status === "rejected")
    content = <p>{error?.data?.message}</p>;
  else if (isSuccess && status === "fulfilled")
    content = <Table categories={ocrExpenses?.data} />;
  else content = <p>Something went wrong</p>;

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal title="OCR Expenses" handleClose={handleHeaderModal} />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div>
            <Select
              key="ocr_bulk"
              name="ocr_bulk"
              value={bulkAction}
              handleChange={handleBulkActionChange}
            >
              <option value="process-selected">Process Selected</option>
            </Select>
          </div>
          <div>
            <Button
              type="button"
              handler={handleBulkAction}
              text="apply"
              key="ocr_apply"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <Input
              handleChange={(e) => debounceSearch(e.target.value)}
              name="search"
              placeholder="Search"
            />
          </div>
          {/* <div className="header_bg py-2.5 px-3 rounded-md dark:bg-slate-900 dark:border-slate-700 cursor-pointer">
            <SearchIcon size={28} />
          </div> */}
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default OCRExpenses;
