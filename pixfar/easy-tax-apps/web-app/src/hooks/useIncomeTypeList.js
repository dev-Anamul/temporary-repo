import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModalTypes } from "../enum/modalTypes";
import { useGetIncomeTypesQuery } from "../features/income-type/income-type-api";
import { showAddModal } from "../features/modal/modal-slice";
import { debounce } from "../utils/debounce";

function useIncomeTypeList() {
  // local state
  const [headerModal, setHeaderModal] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  // api hooks
  const { data: incomeTypes } = useGetIncomeTypesQuery(
    { search: searchTerm, page, limit },
    { refetchOnMountOrArgChange: true }
  );

  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { editModal, addModal } = useSelector((state) => state?.modal);

  // handler function
  const handleAddCategory = () => {
    dispatch(showAddModal({ id: addModalTypes.ADD_INCOME_TYPE }));
  };

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
    setPage(1);
  }, 1000);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  return {
    headerModal,
    incomeTypes,
    editModal,
    handleAddCategory,
    handleHeaderModalClose,
    handleSearch,
    handlePageChange,
    page,
    addModal,
    limit,
    handleLimitChange,
  };
}

export default useIncomeTypeList;
