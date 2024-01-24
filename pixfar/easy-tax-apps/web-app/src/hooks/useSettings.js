import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fiscalYearModalTypes, taxSlabModalTypes } from "../enum/modalTypes";
import { useGetFiscalYearsQuery } from "../features/fiscal-year/fiscal-year-api";
import { showAddModal, showEditModal } from "../features/modal/modal-slice";
import {
  useGetSettingsQuery,
  useUpdateSettingsMutation,
} from "../features/settings/setting-api";
import { useGetTaxSlabsQuery } from "../features/tax-slab/tax-slab-api";

const initialState = {
  title: "",
  appsTitle: "",
  fiscalYearStart: 3,
  fiscalYearEnd: 2,
};

function useSettings() {
  const [headerModal, setHeaderModal] = React.useState(true);
  const [selectLogoUrl, setSelectLogoUrl] = React.useState(null);
  const [selectMobileLogoUrl, setSelectMobileLogoUrl] = React.useState(null);
  const [selectFevIconUrl, setSelectFevIconUrl] = React.useState(null);
  const [selectLogoFile, setSelectLogoFile] = React.useState(null);
  const [selectMobileLogoFile, setSelectMobileLogoFile] = React.useState(null);
  const [selectFevIconFile, setSelectFevIconFile] = React.useState(null);
  const [formData, setFormData] = React.useState(initialState);
  const [isUpdate, setIsUpdate] = React.useState(false);

  // api hooka
  const { data: taxSlab } = useGetTaxSlabsQuery();
  const { data: settingData, isLoading, status } = useGetSettingsQuery();
  const { data: fiscalYears } = useGetFiscalYearsQuery();
  const [AddOrUpdateSetting, { isSuccess, status: settingStatus }] =
    useUpdateSettingsMutation();

  // hooks
  const dispatch = useDispatch();

  const { editModal, addModal } = useSelector((state) => state?.modal);

  // handlers
  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleSetLogo = (file, url) => {
    setIsUpdate(true);
    setSelectLogoFile(file);
    setSelectLogoUrl(url);
  };

  const handleSetMobileLogo = (file, url) => {
    setIsUpdate(true);
    setSelectMobileLogoFile(file);
    setSelectMobileLogoUrl(url);
  };

  const handleSetFevIcon = (file, url) => {
    setIsUpdate(true);
    setSelectFevIconFile(file);
    setSelectFevIconUrl(url);
  };

  const handleFormChange = (e) => {
    setIsUpdate(true);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClearLogoAndFile = () => {
    setSelectLogoFile(null);
    setSelectLogoUrl(null);
    setSelectFevIconFile(null);
    setSelectFevIconUrl(null);
    setSelectMobileLogoFile(null);
    setSelectMobileLogoUrl(null);
    setFormData({
      title: settingData?.data?.title,
      appsTitle: settingData?.data?.appTitle,
      fiscalYearStart: settingData?.data?.fiscalStartMonth,
      fiscalYearEnd: settingData?.data?.fiscalEndMonth,
    });

    setIsUpdate(false);
  };

  const handleAddSlab = () => {
    dispatch(
      showEditModal({
        id: taxSlabModalTypes.ADD_TAX_SLAB,
        data: {},
      })
    );
  };

  const handleUpdateSetting = () => {
    const form = new FormData();

    form.append("title", formData.title);
    form.append("appTitle", formData.appsTitle);
    form.append("fiscalStartMonth", +formData.fiscalYearStart);
    form.append("fiscalEndMonth", +formData.fiscalYearEnd);
    form.append("webLogo", selectLogoFile);
    form.append("mobileLogo", selectMobileLogoFile);
    form.append("fevIcon", selectFevIconFile);

    AddOrUpdateSetting(form);
  };

  const handleAddFiscalYear = () => {
    dispatch(
      showAddModal({
        id: fiscalYearModalTypes.ADD_FISCAL_YEAR,
        data: "addFiscalYear",
      })
    );
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && settingStatus === "fulfilled") {
      toast.dismiss();
      toast.success("Setting updated successfully");
      setIsUpdate(false);
    }
  }, [isSuccess, settingStatus]);

  React.useEffect(() => {
    if (!isLoading && status === "fulfilled") {
      setFormData((prev) => ({
        ...prev,
        title: settingData?.data?.title,
        appsTitle: settingData?.data?.appTitle,
        fiscalYearStart: settingData?.data?.fiscalStartMonth,
        fiscalYearEnd: settingData?.data?.fiscalEndMonth,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, status]);

  return {
    headerModal,
    handleHeaderModal,
    selectLogoUrl,
    selectMobileLogoUrl,
    selectFevIconUrl,
    handleSetLogo,
    handleSetMobileLogo,
    handleSetFevIcon,
    handleClearLogoAndFile,
    handleFormChange,
    handleAddSlab,
    handleUpdateSetting,
    formData,
    taxSlab,
    editModal,
    settingData,
    isUpdate,
    handleAddFiscalYear,
    fiscalYears,
    addModal,
  };
}

export default useSettings;
