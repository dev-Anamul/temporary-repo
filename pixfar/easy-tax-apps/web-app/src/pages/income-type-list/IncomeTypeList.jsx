import { PlusCircle } from "react-feather";
import Button from "../../components/form-element/Button";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import AddIncomeTypeModal from "../../components/modals/add-modal/AddIncomeTypeModal";
import IncomeTypeEditModal from "../../components/modals/edit-modal/EditIncomeType";
import { addModalTypes, modalTypes } from "../../enum/modalTypes";
import useIncomeTypeList from "../../hooks/useIncomeTypeList";
import useWindowWidth from "../../hooks/useWindow";
import Table from "./table/Table";

function IncomeTypeList() {
  const {
    editModal,
    handleAddCategory,
    handleHeaderModalClose,
    handleSearch,
    headerModal,
    page,
    handlePageChange,
    addModal,
    handleLimitChange,
    limit,
    incomeTypes,
  } = useIncomeTypeList();

  const w700 = useWindowWidth(700);
  const w500 = useWindowWidth(500);

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Income Type List"
            handleClose={handleHeaderModalClose}
          />
        )}
      </div>
      <div
        className={`flex ${
          w500 && "flex-col w-full"
        } justify-between items-center`}
      >
        <div
          className={`flex items-center gap-3 ${
            w500 ? "w-full" : w700 ? "w-[45%]" : "w-[30%]"
          }`}
        >
          <div className="w-full">
            <Button
              text="Add Income Type"
              Icon={() => <PlusCircle size={18} />}
              handler={handleAddCategory}
              className="w-full"
            />
          </div>
        </div>
        <div
          className={`flex items-center gap-3 ${
            w500 ? "w-full" : w700 ? "w-[45%]" : "w-[30%]"
          }`}
        >
          <div className="w-full">
            <Search
              name="search"
              key="search"
              placeholder="Search"
              handleChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <Table
          categories={incomeTypes}
          handlePageChange={handlePageChange}
          page={page}
          handleLimitChange={handleLimitChange}
          limit={limit}
          key="table_category"
        />
      </div>

      {/* ADD CATEGORY MODAL */}
      {addModal?.show && addModal?.id === addModalTypes.ADD_INCOME_TYPE && (
        <AddIncomeTypeModal />
      )}

      {/* EDIT CATEGORY MODAL */}
      {editModal?.show && editModal?.id === modalTypes.EDIT_INCOME_TYPE && (
        <IncomeTypeEditModal />
      )}
    </div>
  );
}

export default IncomeTypeList;
