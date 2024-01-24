import React from "react";

import { format } from "date-fns";
import PropTypes from "prop-types";
import {
  ArrowLeftCircle,
  CheckCircle,
  RefreshCcw,
  Upload,
} from "react-feather";
import { BiReset } from "react-icons/bi";
import { useSelector } from "react-redux";
import Button from "../../components/form-element/Button";
import ImageClickInput from "../../components/form-element/ImageClickInput";
import ProfileInput from "../../components/form-element/ProfileInput";
import ProfilePassword from "../../components/form-element/ProfilePassword";
import HeaderModal from "../../components/header-modal/HeaderModal";
import {
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "../../features/auth/auth-api";

// password state
const passwordState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};
function AdminProfile() {
  const { user: profile } = useSelector((state) => state?.auth) || {};

  const [isUpdateInfo, setIsUpdateInfo] = React.useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = React.useState(false);
  const [headerModal, setHeaderModal] = React.useState(true);
  const [selectedProfileUrl, setSelectedProfileUrl] = React.useState(null);
  const [selectedProfileFile, setSelectedProfileFile] = React.useState(null);
  const [passwordData, setPasswordData] = React.useState(passwordState); // {oldPassword, newPassword, confirmPassword}
  const [profileInfo, setProfileInfo] = React.useState(
    {
      firstName: profile.firstName,
      middleName: profile.middleName,
      lastName: profile.lastName,
      email: profile.email,
      mobile: profile.mobile,
      dateOfBirth: profile.dateOfBirth?.split("T")[0],
      address: profile.address,
    } || {}
  );

  // api hooks
  const [updatePassword] = useUpdatePasswordMutation();
  const [updateProfile, { isSuccess, status }] = useUpdateProfileMutation();

  // handle change
  const handleChange = (e) => {
    setIsUpdateInfo(true);
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    setIsUpdatePassword(true);
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const resetInfo = () => {
    setProfileInfo({
      firstName: profile.firstName,
      middleName: profile.middleName,
      lastName: profile.lastName,
      email: profile.email,
      mobile: profile.mobile,
      dateOfBirth: profile.dateOfBirth?.split("T")[0],
      address: profile.address,
    });
    setIsUpdateInfo(false);
  };

  const resetPassword = () => {
    setPasswordData(passwordState);
    setIsUpdatePassword(false);
  };

  const handleProfileImageChange = (file, url) => {
    setSelectedProfileFile(file);
    setSelectedProfileUrl(url);
  };

  const handleClearProfileImage = () => {
    setSelectedProfileFile(null);
    setSelectedProfileUrl(null);
  };

  const handleGoBack = () => {
    window.history.back();
  };
  const handleUserInfoSubmit = () => {
    const form = new FormData();
    form.append("firstName", profileInfo.firstName);
    form.append("middleName", profileInfo.middleName);
    form.append("lastName", profileInfo.lastName);
    form.append("email", profileInfo.email);
    form.append("mobile", profileInfo.mobile);
    form.append("dateOfBirth", profileInfo.dateOfBirth);
    form.append("address", profileInfo.address);

    updateProfile({ data: form });
  };

  const handlePasswordSubmit = () => {
    updatePassword({ data: passwordData });
  };

  const handleProfileImageSubmit = () => {
    const form = new FormData();
    form.append("avatar", selectedProfileFile);
    updateProfile({ data: form });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      setIsUpdateInfo(false);
      setSelectedProfileFile(null);
      setSelectedProfileUrl(null);
    }
  }, [isSuccess, status]);

  console.log(profile?.dateOfBirth?.split("T")[0].split("-"), "PPPP");

  return (
    <>
      {headerModal && (
        <HeaderModal title="Profile" handleClose={handleHeaderModal} />
      )}
      <div className="border mt-5 p-4 rounded  dark:border-cyan-900 w-full">
        <div className="flex  gap-10  mb-5 w-full">
          <div className="flex flex-col w-1/3 header_bg dark:bg-gray-900 items-center py-5 gap-4">
            <ImageClickInput
              handleSetImage={handleProfileImageChange}
              selectUrl={selectedProfileUrl}
              inputId="mobileLogo"
              defaultImage={profile.avatar || "/icon-5359553_1280.webp"}
              height={"h-[160px]"}
              width={"w-[160px]"}
            />
            <div className="flex flex-col justify-center items-center text-black dark:text-white">
              <h1 className="dark:text-white font-bold capitalize text-xl font-poppins">
                {profile?.fullName}
              </h1>
              <h1 className="uppercase dark:text-white font-semibold font-poppins">
                {profile?.role}
              </h1>
            </div>
            <div className="text-center text-black dark:text-white">
              <div>
                <p className="dark:text-white font-poppins text-base">
                  {profile?.email}
                </p>
                <p className="dark:text-white font-poppins text-base">
                  {profile?.mobile}
                </p>
                <p className="dark:text-white font-poppins text-base">
                  {format(new Date(profile?.dateOfBirth), "PPPP")}
                </p>
                <p className="dark:text-white font-poppins text-base">
                  {profile?.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                text="Go Back"
                Icon={() => <ArrowLeftCircle size={16} />}
                className="btn-sm rounded"
                handler={handleGoBack}
              />
              {selectedProfileFile && selectedProfileUrl && (
                <>
                  <Button
                    text="Update"
                    Icon={() => <Upload size={16} />}
                    className="btn-sm rounded"
                    handler={handleProfileImageSubmit}
                  />
                  <Button
                    text="Clear"
                    Icon={() => <RefreshCcw size={16} />}
                    className="btn-sm rounded"
                    handler={handleClearProfileImage}
                  />
                </>
              )}
            </div>
          </div>

          <div className="flex gap-5 flex-col w-2/3">
            <div className="dark:bg-gray-900 header_bg pb-4 pl-10 text-black dark:text-white">
              <h1 className="text-2xl mt-5 dark:text-gray-200 mb-3">
                Update Info
              </h1>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[100px] dark:text-gray-200">First Name</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.firstName}
                  name="firstName"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[100px] dark:text-gray-200">Middle Name</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.middleName}
                  name="middleName"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[100px] dark:text-gray-200">Last Name</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.lastName}
                  name="lastName"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[100px] dark:text-gray-200">Email</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.email}
                  name="email"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[100px] dark:text-gray-200">Phone</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.mobile}
                  name="mobile"
                />
              </div>
              <div className="flex gap-20 mb-3">
                <p className="w-[100px] dark:text-gray-200">Date of Birth</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.dateOfBirth}
                  type="date"
                  name="dateOfBirth"
                />
              </div>
              <div className="flex gap-20 mb-3">
                <p className="w-[100px] dark:text-gray-200">Address</p>
                <ProfileInput
                  handleChange={handleChange}
                  value={profileInfo.address}
                  name="address"
                />
              </div>
              {isUpdateInfo && (
                <div className="flex gap-4 mt-6 w-1/2 justify-center">
                  <button
                    className="custom_btn !btn-sm rounded"
                    onClick={handleUserInfoSubmit}
                  >
                    <CheckCircle size={18} /> Save
                  </button>
                  <button
                    className="custom_btn !btn-sm rounded"
                    onClick={resetInfo}
                  >
                    <BiReset size={18} /> Reset
                  </button>
                </div>
              )}
            </div>
            <div className="mt-3 dark:bg-gray-900 header_bg pl-10 pb-4 text-black dark:text-white">
              <h1 className="text-2xl mt-5 dark:text-gray-200 mb-3">
                Update Password
              </h1>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[150px] dark:text-gray-200">Current Password</p>
                <ProfilePassword
                  handleChange={handlePasswordChange}
                  value={passwordData.oldPassword}
                  name="oldPassword"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[150px] dark:text-gray-200">New Password</p>
                <ProfilePassword
                  handleChange={handlePasswordChange}
                  value={passwordData.newPassword}
                  name="newPassword"
                />
              </div>
              <div className="flex gap-20 mb-3 items-center">
                <p className="w-[150px] dark:text-gray-200">Confirm Password</p>
                <ProfilePassword
                  handleChange={handlePasswordChange}
                  value={passwordData.confirmPassword}
                  name="confirmPassword"
                />
              </div>
              {isUpdatePassword && (
                <div className="flex gap-4 mt-6 w-1/2 justify-center">
                  <button
                    className="custom_btn !btn-sm rounded"
                    onClick={handlePasswordSubmit}
                  >
                    <CheckCircle size={18} /> Save
                  </button>
                  <button
                    className="custom_btn !btn-sm rounded"
                    onClick={resetPassword}
                  >
                    <BiReset size={18} /> Reset
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// prop types validation
AdminProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AdminProfile;
