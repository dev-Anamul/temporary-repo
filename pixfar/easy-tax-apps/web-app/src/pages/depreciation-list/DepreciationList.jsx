import HeaderModal from "../../components/header-modal/HeaderModal";
import Table from "./table/Table";
import useDepreciation from "./useDepreciation";

const DepreciationList = () => {
  const { depreciations, handleHeaderModalClose, headerModal } =
    useDepreciation();

  console.log("depreciations", depreciations);

  return (
    <div className="flex flex-col gap-6">
      <div>
        {headerModal && (
          <HeaderModal
            title="Depreciation List"
            handleClose={handleHeaderModalClose}
            isBack
          />
        )}
      </div>
      <div>
        <Table depreciation={depreciations} key="table_category" />
      </div>
    </div>
  );
};

export default DepreciationList;
