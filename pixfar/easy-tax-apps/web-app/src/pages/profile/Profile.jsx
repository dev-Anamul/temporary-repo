import React from "react";
import { ArrowLeftCircle, Bell } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HeaderModal from "../../components/header-modal/HeaderModal";
import SingleNotification from "../../components/modals/notification/SingleNotification";
import Loader from "../../components/ui/Loader";
import { notificationModalTypes } from "../../enum/modalTypes";
import { useGetAssetsQuery } from "../../features/assets/assets-api";
import { showNotificationModal } from "../../features/modal/modal-slice";
import { useGetUserTaxQuery } from "../../features/tax/tax-api";
import { useGetUserQuery } from "../../features/users/users-api";
import useWindowWidth from "../../hooks/useWindow";
import { formatDate } from "../../utils/date";
import { generateFullName } from "../../utils/generate-full-name";
import ReportCard from "./ReportCard";
import AssetsTable from "./assetTable/Table";
import Table from "./table/Table";

function Profile() {
  const { id } = useParams() || {};
  const dispatch = useDispatch();
  const { notificationModal } = useSelector((state) => state?.modal);
  const w830 = useWindowWidth(830);
  const w750 = useWindowWidth(750);

  // local state
  const [headerModal, setHeaderModal] = React.useState(true);

  const {
    data: user,
    isLoading,
    isError,
    error,
    isSuccess,
    status,
  } = useGetUserQuery(id, { refetchOnMountOrArgChange: true });

  const { data: userTax } = useGetUserTaxQuery(
    { id },
    { refetchOnMountOrArgChange: true }
  );

  const { data: assets } = useGetAssetsQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const notifyHandler = () => {
    dispatch(
      showNotificationModal({
        id: notificationModalTypes.NOTIFY_SINGLE,
        data: id,
      })
    );
  };

  // decide what to render
  let content = null;

  if (isLoading && status === "pending") {
    content = <Loader />;
  } else if (isError && status === "rejected") {
    content = (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-red-600 dark:text-red-400">
          {JSON.stringify(error?.message)}
        </p>
      </div>
    );
  } else if (isSuccess && status === "fulfilled") {
    content = (
      <div className="border mt-5 p-5 rounded dark:border-cyan-900">
        <div className={w750 ? "block" : "flex gap-10 items-center mb-5"}>
          <div className="text-center">
            <img
              src={user?.data?.avatar || "/icon-5359553_1280.webp"}
              alt="user-image"
              className="h-[200px] w-[200px] rounded-full"
            />
            <div className="space-x-2 text-left">
              <Link to="/users" className="mt-5 !btn-sm rounded custom_btn">
                <ArrowLeftCircle size={18} /> Go Back
              </Link>
              <button
                className="!btn-sm custom_btn rounded"
                onClick={notifyHandler}
              >
                <Bell size={18} /> Notify
              </button>
            </div>
          </div>

          <div className="mt-3 text-black dark:text-white text-base font-poppins">
            <h1 className="text-2xl mt-5 dark:text-gray-200 mb-3">
              {generateFullName(
                user?.data?.firstName,
                user?.data?.middleName,
                user?.data?.lastName
              )}
            </h1>
            <div className={`flex ${w750 ? "gap-5" : "gap-20"} mb-3`}>
              <p className={`${"w-[100px]"} dark:text-gray-200`}>Email</p>
              <p className="dark:text-gray-400">: &nbsp; {user?.data?.email}</p>
            </div>
            <div className={`flex ${w750 ? "gap-5" : "gap-20"} mb-3`}>
              <p className={`${"w-[100px]"} dark:text-gray-200`}>Phone</p>
              <p className="dark:text-gray-400">
                : &nbsp; {user?.data?.mobile}
              </p>
            </div>
            <div className={`flex ${w750 ? "gap-5" : "gap-20"} mb-3`}>
              <p className={`${"w-[100px]"} dark:text-gray-200`}>Role</p>
              <p className="dark:text-gray-400">: &nbsp; {user?.data?.role}</p>
            </div>
            <div className={`flex ${w750 ? "gap-5" : "gap-20"} mb-3`}>
              <p className={`${"w-[100px]"} dark:text-gray-200`}>
                Date of Birth
              </p>
              <p className="dark:text-gray-400">
                : &nbsp; {formatDate(user?.data?.dateOfBirth)}
              </p>
            </div>
            <div className={`flex ${w750 ? "gap-5" : "gap-20"} mb-3`}>
              <p className={`${"w-[100px]"} dark:text-gray-200`}>Address</p>
              <p className="dark:text-gray-400">
                : &nbsp; {user?.data?.address}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${
            w830 ? "block" : "flex justify-between gap-4"
          }  border my-4 py-4 px-5`}
        >
          <div className={w830 ? "mb-5" : "border-r pr-5 w-full"}>
            <ReportCard title="Financial Statements" type="statement" />
          </div>
          <div className="w-full">
            <ReportCard title="Expenses Summaries" type="summary" />
          </div>
        </div>
        <h2 className="text-xl border-b text-black border-b-gray-300 mb-3">
          Tax Data
        </h2>
        <div className="overflow-x-auto">
          <Table taxes={userTax} />
        </div>

        <div className="mt-5">
          <h2 className="text-xl border-b text-black border-b-gray-300 mb-3">
            Assets Register
          </h2>
          <div className="overflow-x-auto">
            <AssetsTable data={assets?.data} />
          </div>
        </div>

        {/* SINGLE NOTIFICATION MODAL */}
        {notificationModal?.show &&
          notificationModal?.id === notificationModalTypes.NOTIFY_SINGLE && (
            <SingleNotification />
          )}
      </div>
    );
  }

  return (
    <>
      {headerModal && (
        <HeaderModal title="Profile" handleClose={handleHeaderModal} />
      )}
      {content}
      {/* <div className="border mt-5 p-10 rounded dark:border-cyan-900">
        <div className="flex gap-10 items-center mb-5">
          <div className="text-center">
            <img
              src={user?.data?.avatar || "/icon-5359553_1280.webp"}
              alt="user-image"
              className="h-[200px] w-[200px] rounded-full"
            />
            <Link to="/users" className="btn mt-5">
              Go Back
            </Link>
          </div>

          <div className="mt-3">
            <h1 className="text-2xl mt-5 dark:text-gray-200 mb-3">
              {generateFullName(
                user?.data?.firstName,
                user?.data?.middleName,
                user?.data?.lastName
              )}
            </h1>
            <div className={`flex ${w750 ? 'gap-5' :'gap-20'} mb-3`}>
              <p className="w-[100px] dark:text-gray-200">Email</p>
              <p className="dark:text-gray-400">: &nbsp; {user?.data?.email}</p>
            </div>
            <div className={`flex ${w750 ? 'gap-5' :'gap-20'} mb-3`}>
              <p className="w-[100px] dark:text-gray-200">Phone</p>
              <p className="dark:text-gray-400">
                : &nbsp; {user?.data?.mobile}
              </p>
            </div>
            <div className={`flex ${w750 ? 'gap-5' :'gap-20'} mb-3`}>
              <p className="w-[100px] dark:text-gray-200">Role</p>
              <p className="dark:text-gray-400">: &nbsp; {user?.data?.role}</p>
            </div>
            <div className={`flex ${w750 ? 'gap-5' :'gap-20'} mb-3`}>
              <p className="w-[100px] dark:text-gray-200">Date of Birth</p>
              <p className="dark:text-gray-400">
                : &nbsp; {user?.data?.dateOfBirth}
              </p>
            </div>
            <div className={`flex ${w750 ? 'gap-5' :'gap-20'} mb-3`}>
              <p className="w-[100px] dark:text-gray-200">Address</p>
              <p className="dark:text-gray-400">
                : &nbsp; {user?.data?.address}
              </p>
            </div>
          </div>
        </div>
        <Table />
      </div> */}
    </>
  );
}

export default Profile;
