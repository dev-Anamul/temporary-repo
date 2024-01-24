import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { notificationModalTypes } from "../enum/modalTypes";
import {
  hideNotificationModal,
  showNotificationModal,
} from "../features/modal/modal-slice";
import { useGetUsersQuery } from "../features/users/users-api";
import {
  setSelectedUserIds,
  toggleHeaderCheckbox,
} from "../features/users/users-slice";
import { debounce } from "../utils/debounce";

export default function useUserList() {
  // local state
  const [headerModal, setHeaderModal] = React.useState(true);
  const [applyStatus, setApplyStatus] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [status, setStatus] = React.useState("");

  // api hooks
  const { data: users } = useGetUsersQuery(
    { search: searchTerm, status, page, limit },
    { refetchOnMountOrArgChange: true }
  );

  // hooks
  const dispatch = useDispatch();

  // get data from redux store
  const { editModal, notificationModal } = useSelector((state) => state?.modal);
  const { selectedUserIds, headerCheckbox } = useSelector(
    (state) => state?.user
  );

  // handlers
  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleApplyStatusChange = (e) => {
    setApplyStatus(e.target.value);
  };

  const debounceSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
    setPage(1);
  }, 500);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  // handle side effects
  React.useEffect(() => {
    if (headerCheckbox) {
      const userIds = users?.data?.map((user) => user?.id);
      dispatch(setSelectedUserIds(userIds));
    } else if (!headerCheckbox) {
      dispatch(setSelectedUserIds([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerCheckbox, dispatch]);

  // handle single checkbox change event
  React.useEffect(() => {
    if (selectedUserIds?.length === users?.data?.length) {
      dispatch(toggleHeaderCheckbox(true));
    } else if (selectedUserIds?.length !== users?.data?.length) {
      dispatch(toggleHeaderCheckbox(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUserIds, dispatch]);

  // handle notify modal
  const handleStatusClick = () => {
    if (applyStatus === "") {
      toast.dismiss();
      toast.error("Please select an option");
      return;
    }

    switch (applyStatus) {
      case notificationModalTypes.NOTIFY_ALL:
        dispatch(
          showNotificationModal({
            id: notificationModalTypes.NOTIFY_ALL,
            data: null,
          })
        );
        break;
      case notificationModalTypes.NOTIFY_SELECTED:
        if (selectedUserIds?.length === 0) {
          toast.dismiss();
          toast.error("Please select at least one user");
          return;
        }
        dispatch(
          showNotificationModal({
            id: notificationModalTypes.NOTIFY_SELECTED,
            data: selectedUserIds,
          })
        );
        break;
      default:
        dispatch(hideNotificationModal());
        break;
    }
  };

  return {
    users,
    headerModal,
    handleHeaderModal,
    handleApplyStatusChange,
    applyStatus,
    debounceSearch,
    handlePageChange,
    page,
    handleStatusClick,
    editModal,
    notificationModal,
    handleStatusChange,
    status,
    handleLimitChange,
    limit,
  };
}
