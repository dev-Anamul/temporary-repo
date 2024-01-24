import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetNotificationsPageQuery,
  useGetNotificationsQuery,
} from "../features/notifications/notification-api";
import { debounce } from "../utils/debounce";

function useNotifications() {
  const [isHeaderModalOpen, setIsHeaderModalOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);

  // api hooks
  const { data: notifications } = useGetNotificationsQuery(
    {
      search: searchTerm,
    },
    {
      refetchOnMountOrArgChange: true,
      skip: !searchTerm,
    }
  );

  const { data: pagesNotifications } = useGetNotificationsPageQuery(
    { page },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  // hooks and variables
  const navigate = useNavigate();

  const handleHeaderModalClose = () => {
    setIsHeaderModalOpen(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
  }, 500);

  const data = searchTerm ? notifications : pagesNotifications;

  return {
    isHeaderModalOpen,
    data,
    handleHeaderModalClose,
    handlePageChange,
    handleSearch,
    navigate,
    page,
  };
}

export default useNotifications;
