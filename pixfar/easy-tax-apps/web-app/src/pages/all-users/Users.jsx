import { CheckCircle } from "react-feather";
import Button from "../../components/form-element/Button";
import Select from "../../components/form-element/Select";
import Search from "../../components/form-element/search";
import HeaderModal from "../../components/header-modal/HeaderModal";
import UserEditModal from "../../components/modals/edit-modal/UserEditModal";
import AllNotification from "../../components/modals/notification/AllNotification";
import SelectedNotification from "../../components/modals/notification/SelectedNotification";
import SingleNotification from "../../components/modals/notification/SingleNotification";
import { modalTypes, notificationModalTypes } from "../../enum/modalTypes";
import useUserList from "../../hooks/useUserList";
import useWindowWidth from "../../hooks/useWindow";
import Table from "./table/Table";

function Users() {
  const w700 = useWindowWidth(700);
  const {
    applyStatus,
    debounceSearch,
    editModal,
    handleApplyStatusChange,
    handleHeaderModal,
    handlePageChange,
    handleStatusClick,
    headerModal,
    notificationModal,
    page,
    users,
    handleStatusChange,
    limit,
    handleLimitChange,
  } = useUserList();

  return (
    <div className="flex flex-col gap-5">
      <div>
        {headerModal && (
          <HeaderModal title="All Users" handleClose={handleHeaderModal} />
        )}
      </div>
      <div
        className={`flex ${w700 && "flex-col"} justify-between items-center`}
      >
        <div
          className={`flex items-center justify-between gap-3 ${
            w700 ? "w-full" : "w-[40%]"
          }`}
        >
          <div className="w-[70%]">
            <Select
              handleChange={handleApplyStatusChange}
              name="applyStatus"
              value={applyStatus}
            >
              <option value={notificationModalTypes.NOTIFY_ALL}>
                Notify All
              </option>
              <option value={notificationModalTypes.NOTIFY_SELECTED}>
                Notify Selected
              </option>
            </Select>
          </div>
          <div className="w-[30%]">
            <Button
              handler={handleStatusClick}
              type="button"
              text="Apply"
              className="w-full min-w-[100px]"
              Icon={() => <CheckCircle size={18} />}
            />
          </div>
        </div>

        <div
          className={`mb-2 gap-2 flex items-center justify-end ${
            w700 ? "w-full" : "w-[40%]"
          }`}
        >
          <div className="mt-2">
            <select
              name="status"
              key="status"
              onChange={handleStatusChange}
              className="custom_input"
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <Search
            name="search"
            key="search"
            handleChange={(e) => debounceSearch(e.target.value)}
            placeholder={"Search"}
          />
        </div>
      </div>
      <div>
        <Table
          users={users}
          key="user_table"
          page={page}
          handlePageChange={handlePageChange}
          limit={limit}
          handleLimitChange={handleLimitChange}
        />
      </div>

      {/* edit modal */}
      {editModal?.show && editModal?.id === modalTypes.EDIT_USER && (
        <UserEditModal />
      )}

      {/* ALL NOTIFICATION MODAL */}
      {notificationModal?.show &&
        notificationModal?.id === notificationModalTypes.NOTIFY_ALL && (
          <AllNotification />
        )}

      {/* SELECTED NOTIFICATION MODAL */}
      {notificationModal?.show &&
        notificationModal?.id === notificationModalTypes.NOTIFY_SELECTED && (
          <SelectedNotification />
        )}

      {/* SINGLE NOTIFICATION MODAL */}
      {notificationModal?.show &&
        notificationModal?.id === notificationModalTypes.NOTIFY_SINGLE && (
          <SingleNotification />
        )}
    </div>
  );
}

export default Users;
