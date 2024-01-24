import React from "react";
import { Download, XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/form-element/Button";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import IncomeEditModal from "../../components/modals/edit-modal/IncomeEditModal";
import { modalTypes } from "../../enum/modalTypes";
import { incomeSourceTypes } from "../../enum/types";
import { useGetFiscalYearsQuery } from "../../features/fiscal-year/fiscal-year-api";
import {
  incomeSourceApi,
  useGetIncomeSourcesQuery,
} from "../../features/income-source/income-source-api";
import useWindowWidth from "../../hooks/useWindow";
import { debounce } from "../../utils/debounce";
import Table from "./table/Table";

function IncomeSources() {
  const [headerModal, setHeaderModal] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [filter, setFilter] = React.useState({
    incomeSource: "",
    incomeType: "",
    fiscalYear: "",
  });

  // api hooks
  const { data: incomeSources } = useGetIncomeSourcesQuery(
    {
      search: searchTerm,
      incomeSource: filter?.incomeSource,
      incomeType: filter?.incomeType,
      fiscalYear: filter?.fiscalYear,
      page,
      limit,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { data: fiscalYears } = useGetFiscalYearsQuery();
  // navigator
  const w550 = useWindowWidth(550);
  const dispatch = useDispatch();

  // hooks
  const incomeSourceRef = React.useRef(null);
  const incomeTypeRef = React.useRef(null);
  const fiscalYearRef = React.useRef(null);

  // get data from the redux store
  const { editModal } = useSelector((state) => state?.modal);

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleFilterChange = debounce((e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  }, 500);

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
    setPage(1);
  }, 500);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  const handleDownloadCSV = () => {
    dispatch(incomeSourceApi.endpoints.downloadIncomeCsv.initiate())
      .unwrap()
      .then((res) => {
        window.location.href = res?.data?.path;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClearFilter = () => {
    setFilter({
      incomeSource: "",
      incomeType: "",
      fiscalYear: "",
    });

    if (incomeSourceRef?.current) {
      incomeSourceRef.current.value = "";
    }

    if (incomeTypeRef?.current) {
      incomeTypeRef.current.value = "";
    }

    if (fiscalYearRef?.current) {
      fiscalYearRef.current.value = "";
    }
    setSearchTerm("");
  };

  let content = null;
  // if (isLoading || status === "pending") {
  //   content = <Loader />;
  // } else if (isError && status === "rejected") {
  //   content = <div>{JSON.stringify(error)}</div>;
  // } else if (isSuccess && status === "fulfilled") {
  content = (
    <Table
      incomeSources={incomeSources}
      handleLimitChange={handleLimitChange}
      limit={limit}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
  // }

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Income List"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className={`join bg-inherit `}>
          <div className="w-[33.3%]">
            <select
              className="w-full select select-bordered join-item bg-inherit border_stroke text-black dark:text-white capitalize font-poppins text-base"
              ref={incomeSourceRef}
              onChange={handleFilterChange}
              name="incomeSource"
            >
              <option value="">Income Source</option>
              <option value="manual">manual</option>
              <option value="IRD">IRD</option>
            </select>
          </div>
          <select
            className="w-[33.3%] select select-bordered join-item border_stroke text-base bg-inherit text-black dark:text-white capitalize font-poppins"
            ref={incomeTypeRef}
            onChange={handleFilterChange}
            name="incomeType"
          >
            <option value="">Income Type</option>
            {Object.keys(incomeSourceTypes).map((key) => {
              return (
                <option key={key} value={key}>
                  {incomeSourceTypes[key]}
                </option>
              );
            }) || []}
          </select>
          <div className="indicator w-[33.5%]">
            <select
              className="w-full select select-bordered join-item border_stroke text-base bg-inherit text-black dark:text-white capitalize font-poppins"
              ref={fiscalYearRef}
              onChange={handleFilterChange}
              name="fiscalYear"
            >
              <option value="">Fiscal Year</option>
              {fiscalYears?.data?.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.fiscalYear}
                  </option>
                );
              }) || []}
            </select>
          </div>
        </div>
        {!w550 && (
          <div>
            <Button
              text={"Clear"}
              Icon={() => <XCircle size={18} />}
              handler={handleClearFilter}
              className="w-[110px]"
            />
          </div>
        )}
      </div>
      <div className={`flex items-center gap-3 w-full`}>
        <div className="flex justify-between items-center w-full">
          <Search
            handleChange={(e) => handleSearch(e.target.value)}
            name="search"
            key="search"
            placeholder={"Search"}
          />
          <div>
            <Button
              text={w550 ? "" : "CSV Export"}
              Icon={() => <Download size={18} />}
              handler={handleDownloadCSV}
              className="ml-2 mt-2"
            />
          </div>
        </div>
        {w550 && (
          <div>
            <Button
              text=""
              Icon={() => <XCircle size={18} />}
              handler={handleClearFilter}
              className="w-[50px] mt-2"
            />
          </div>
        )}
      </div>
      <div>{content}</div>

      {/* Edit category modal */}
      {editModal?.show && editModal?.id === modalTypes.EDIT_INCOME && (
        <IncomeEditModal />
      )}
    </div>
  );
}

export default IncomeSources;
