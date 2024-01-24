import { PlusCircle, XCircle } from "react-feather";
import Button from "../../components/form-element/Button";
import ImageClickInput from "../../components/form-element/ImageClickInput";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import AddFiscalYear from "../../components/modals/add-modal/AddFiscalYear";
import EditFiscalYear from "../../components/modals/edit-modal/EditFiscalYear";
import AddTaxSlab from "../../components/modals/tax-slab/AddTaxSlab";
import EditTaxSlab from "../../components/modals/tax-slab/EditTaxSlab";
import { fiscalYearModalTypes, taxSlabModalTypes } from "../../enum/modalTypes";
import useSettings from "../../hooks/useSettings";
import useWindowWidth from "../../hooks/useWindow";
import FiscalTable from "./fiscal-table/Table";
import Table from "./table/Table";

function Settings() {
  const {
    editModal,
    formData,
    handleAddSlab,
    handleClearLogoAndFile,
    handleFormChange,
    handleHeaderModal,
    handleSetFevIcon,
    handleSetLogo,
    handleSetMobileLogo,
    handleUpdateSetting,
    headerModal,
    selectFevIconUrl,
    selectLogoUrl,
    selectMobileLogoUrl,
    taxSlab,
    settingData,
    isUpdate,
    handleAddFiscalYear,
    fiscalYears,
    addModal,
  } = useSettings();

  const w750 = useWindowWidth(750);
  const w700 = useWindowWidth(700);
  const w500 = useWindowWidth(500);

  return (
    <>
      {headerModal && (
        <HeaderModal title="Settings" handleClose={handleHeaderModal} />
      )}

      <div className="border rounded mt-5 p-5 dark:border-cyan-900">
        <div
          className={`flex ${
            w500 ? "flex-col" : "items-center"
          } justify-between  border-b dark:border-cyan-900 dark:text-gray-200 pb-2`}
        >
          <h1 className="text-xl text-black mb-2 dark:text-white font-poppins">
            General Setting
          </h1>
          <div className="flex gap-2">
            {isUpdate && (
              <>
                <Button
                  Icon={() => <PlusCircle size={18} />}
                  text="Update"
                  handler={handleUpdateSetting}
                />
                <Button
                  Icon={() => <XCircle size={18} />}
                  text="Clear"
                  handler={handleClearLogoAndFile}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex gap-5 flex-wrap mt-5 items-center">
          <div>
            <h1 className="text-black dark:text-white font-poppins">
              Web Logo
            </h1>
            <ImageClickInput
              label="Select Image"
              handleSetImage={handleSetLogo}
              selectUrl={selectLogoUrl}
              inputId="webLogo"
              defaultImage={settingData?.data?.webLogo || "./logo.png"}
              height={w750 && "h-[80px]"}
              width={w750 && "w-[140px]"}
            />
          </div>
          <div>
            <h1 className="text-black dark:text-white font-poppins">
              Apps Logo
            </h1>
            <ImageClickInput
              label="Select Image"
              handleSetImage={handleSetMobileLogo}
              selectUrl={selectMobileLogoUrl}
              inputId="mobileLogo"
              defaultImage={settingData?.data?.mobileLogo || "./logo.png"}
              height={w750 && "h-[80px]"}
              width={w750 && "w-[140px]"}
            />
          </div>

          <div>
            <h1 className="text-black dark:text-white font-poppins">
              Fev icon
            </h1>
            <ImageClickInput
              label="Select Image"
              handleSetImage={handleSetFevIcon}
              selectUrl={selectFevIconUrl}
              height={w750 ? "h-[50px]" : "h-[90px]"}
              width={w750 ? "w-[50px]" : "w-[90px]"}
              inputId="fevIcon"
              defaultImage={settingData?.data?.fevIcon || "./logo.png"}
            />
          </div>
        </div>

        <div
          className={`mt-5 grid ${
            w500 ? "grid-cols-1" : w700 ? "grid-cols-2" : "grid-cols-4"
          } gap-5`}
        >
          <Input
            label="Title"
            key="title"
            name="title"
            value={formData.title}
            handleChange={handleFormChange}
          />
          <Input
            label="Apps Title"
            key="appTitle"
            name="appsTitle"
            value={formData.appsTitle}
            handleChange={handleFormChange}
          />
        </div>

        <div>
          <div className="flex justify-between items-center border-b dark:border-cyan-900 dark:text-gray-200 pb-2 my-5">
            <h1 className="text-xl text-black dark:text-white font-poppins">
              Fiscal Year
            </h1>
            <Button
              text="Add Fiscal Year"
              Icon={() => <PlusCircle size={18} />}
              type="button"
              key="addFiscalYear"
              handler={handleAddFiscalYear}
            />
          </div>
          {/* <div className="flex gap-4 my-4 w-full">
            <div className="w-1/3">
              <Input
                label="Fiscal Year"
                key="fiscalYear"
                name="fiscalYear"
                className="w-full"
                value={fiscalForm.fiscalYear}
                handleChange={handleFiscalYearChange}
              />
            </div>
            <div className="w-1/3">
              <DatePicker
                label="Start Date"
                name="startDate"
                key="startDate"
                // isError={errors?.expenseDate}
                // errorMessage={errors?.expenseDate}
                value={fiscalForm.startDate}
                handleChange={handleFiscalYearChange}
              />
            </div>
            <div className="w-1/3">
              <DatePicker
                label="End Date"
                name="endDate"
                key="endDate"
                // isError={errors?.expenseDate}
                // errorMessage={errors?.expenseDate}
                value={fiscalForm.endDate}
                handleChange={handleFiscalYearChange}
              />
            </div>
          </div> */}
          {/* {isShowFiscalButton && (
            <div className="flex gap-4">
              <Button
                Icon={() => <PlusCircle size={15} />}
                text="Add"
                className="!btn-sm rounded"
                handler={handleAddFiscalYear}
              />
              <Button
                Icon={() => <XCircle size={15} />}
                text="Clear"
                className="!btn-sm rounded"
                handler={handleHideFiscalButton}
              />
            </div>
          )} */}
          <div className="mt-3">
            <FiscalTable fiscalYears={fiscalYears?.data} />
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xl border-b pb-2 dark:border-cyan-900 dark:text-gray-200 flex items-center justify-between">
            <div>
              <h1 className="text-black dark:text-white font-poppins">
                Tax Slab
              </h1>
            </div>
            <div>
              <Button
                Icon={() => <PlusCircle size={18} />}
                text="Add tax slab"
                handler={handleAddSlab}
              />
            </div>
          </div>
          <div className="mt-3">
            <Table taxSlabs={taxSlab?.data} />
          </div>
        </div>

        {/* ADD MODAL */}
        {editModal?.show &&
          editModal?.id === taxSlabModalTypes.ADD_TAX_SLAB && <AddTaxSlab />}

        {/* EDIT MODAL */}
        {editModal?.show &&
          editModal?.id === taxSlabModalTypes.EDIT_TAX_SLAB && <EditTaxSlab />}
      </div>

      {/* EDIT FISCAL YEAR */}
      {editModal?.show &&
        editModal?.id === fiscalYearModalTypes.EDIT_FISCAL_YEAR && (
          <EditFiscalYear />
        )}

      {/* ADD FISCAL YEAR */}
      {addModal?.show &&
        addModal?.id === fiscalYearModalTypes.ADD_FISCAL_YEAR && (
          <AddFiscalYear />
        )}
    </>
  );
}

export default Settings;
