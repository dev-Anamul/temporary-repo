import React from "react";
import { Download, PlusCircle, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/form-element/Button";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import ExpenseEditModal from "../../components/modals/edit-modal/ExpenseEditModal";
import { modalTypes } from "../../enum/modalTypes";
import { GSTClaimable, expenseStatus } from "../../enum/status";
import { useGetCategoriesQuery } from "../../features/category/category-api";
import {
  expenseApi,
  useGetSearchExpensesQuery,
} from "../../features/expense/expense-api";
import { useGetFiscalYearsQuery } from "../../features/fiscal-year/fiscal-year-api";
import useWindowWidth from "../../hooks/useWindow";
import { debounce } from "../../utils/debounce";
import Table from "./table/Table";

function ExpenseList() {
  // local state
  const [headerModal, setHeaderModal] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [filter, setFilter] = React.useState({
    expenseType: "",
    isGSTClaimable: "",
    status: "",
    fiscalYear: "",
  });

  const { data: searchExpenses } = useGetSearchExpensesQuery(
    {
      search: searchTerm,
      expenseType: filter?.expenseType,
      status: filter?.status,
      isGSTClaimable: filter?.isGSTClaimable,
      fiscalYear: filter?.fiscalYear,
      page,
      limit,
    },
    { refetchOnMountOrArgChange: true }
  );
  const { data: fiscalYears } = useGetFiscalYearsQuery();

  const w1000 = useWindowWidth(1000);
  const w680 = useWindowWidth(680);
  const w600 = useWindowWidth(600);

  const { data: expenseType } = useGetCategoriesQuery({});

  // navigator
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expTypeRef = React.useRef(null);
  const statusRef = React.useRef(null);
  const gstRef = React.useRef(null);
  const fiscalRef = React.useRef(null);

  // get data from redux store
  const { editModal } = useSelector((state) => state?.modal);

  // handler function
  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
    setPage(1);
  }, 400);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  const handleFilterChange = debounce((e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  }, 400);

  const handleDownloadCSV = () => {
    dispatch(expenseApi.endpoints.downloadCsv.initiate())
      .unwrap()
      .then((res) => {
        window.open(res?.data?.path, "_blank");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClearFilter = () => {
    setFilter({
      expenseType: "",
      isGSTClaimable: "",
      status: "",
    });

    if (expTypeRef.current) {
      expTypeRef.current.value = "";
    }

    if (statusRef.current) {
      statusRef.current.value = "";
    }

    if (gstRef.current) {
      gstRef.current.value = "";
    }

    if (fiscalRef.current) {
      fiscalRef.current.value = "";
    }
  };

  // generate filter options
  const generateExpenseTypeOptions = () => {
    return expenseType?.data?.map((option) => {
      return (
        <option key={option?._id} value={option?._id}>
          {option?.name}
        </option>
      );
    });
  };

  const generateGSTClaimableOptions = () => {
    return Object.keys(GSTClaimable).map((key) => {
      return (
        <option key={key} value={key}>
          {GSTClaimable[key]}
        </option>
      );
    });
  };

  const generateStatusOptions = () => {
    return Object.keys(expenseStatus).map((key) => {
      return (
        <option key={key} value={key}>
          {key}
        </option>
      );
    });
  };

  const generateFiscalYearOptions = () => {
    return fiscalYears?.data?.map((item) => {
      return (
        <option key={item._id} value={item._id}>
          {item.fiscalYear}
        </option>
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Expense List"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div
        className={`flex justify-between items-center ${w1000 && "flex-col"}`}
      >
        <div className="flex items-center gap-3 w-full">
          <div className={`${w600 ? "" : "join"} bg-inherit `}>
            <div className={w600 ? "w-full mb-2" : "w-[33.3%]"}>
              <select
                className="w-full select select-bordered join-item bg-inherit border_stroke text-black dark:text-white capitalize font-poppins text-base"
                ref={expTypeRef}
                onChange={handleFilterChange}
                name="expenseType"
              >
                <option value="">Expense Type</option>
                {generateExpenseTypeOptions() || []}
              </select>
            </div>
            <select
              className={`${
                w600 ? "w-full mb-2" : "w-[33.3%]"
              } select select-bordered join-item border_stroke text-base bg-inherit text-black dark:text-white capitalize font-poppins`}
              ref={gstRef}
              onChange={handleFilterChange}
              name="isGSTClaimable"
            >
              <option value="">GST Claimable</option>
              {generateGSTClaimableOptions() || []}
            </select>
            <div className={`indicator ${w600 ? "w-full mb-2" : "w-[33.3%]"}`}>
              <select
                className="w-full select select-bordered join-item border_stroke text-base bg-inherit text-black dark:text-white capitalize font-poppins"
                ref={statusRef}
                onChange={handleFilterChange}
                name="status"
              >
                <option value="">Status</option>
                {generateStatusOptions() || []}
              </select>
            </div>
            <div className={`indicator ${w600 ? "w-full mb-2" : "w-[33.3%]"}`}>
              <select
                className="w-full select select-bordered join-item border_stroke text-base bg-inherit text-black dark:text-white capitalize font-poppins"
                ref={fiscalRef}
                onChange={handleFilterChange}
                name="fiscalYear"
              >
                <option value="">Fiscal Year</option>
                {generateFiscalYearOptions() || []}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mb-1 flex  ${
          w600 && "flex-col mt-[-30px]"
        } items-center w-full justify-between gap-3`}
      >
        <Search
          handleChange={(e) => handleSearch(e.target.value)}
          name="search"
          key="search"
          placeholder={"Search"}
          className={w600 && "w-full"}
        />

        <div className={" mt-2 gap-2 flex"}>
          <Button
            // className={w1000 && "w-full"}
            text="Add Expense"
            Icon={() => <PlusCircle size={18} />}
            handler={() => navigate("/add-expense")}
          />
          <div>
            <Button
              text="Clear"
              Icon={() => <XCircle size={18} />}
              handler={handleClearFilter}
              className="w-[110px]"
            />
          </div>
          <div>
            <Button
              text={w680 ? "" : "CSV Export"}
              Icon={() => <Download size={18} />}
              handler={handleDownloadCSV}
              // className="w-[150px]"
            />
          </div>
        </div>
      </div>
      <div>
        <Table
          expenses={searchExpenses}
          page={page}
          handlePageChange={handlePageChange}
          limit={limit}
          handleLimitChange={handleLimitChange}
        />
        {/* <div>
          <div>
            <span>Total Item</span>
            <span>{expenses?.pagination?.totalItems}</span>
          </div>
          <div></div>
        </div> */}
      </div>

      {/* Edit category modal */}
      {editModal?.show && editModal?.id === modalTypes.EDIT_EXPENSE && (
        <ExpenseEditModal />
      )}
    </div>
  );
}

export default ExpenseList;
