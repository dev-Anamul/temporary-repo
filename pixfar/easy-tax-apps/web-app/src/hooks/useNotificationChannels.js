import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetNotificationChannelsQuery,
  useGetPagesNotificationChannelsQuery,
} from "../features/notification-channels/channel-api";
import { debounce } from "../utils/debounce";

function useNotificationChannels() {
  const [headerModal, setHeaderModal] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);

  // api hooks
  const { data: notificationsChannel } = useGetNotificationChannelsQuery({
    search: searchTerm,
  });

  const { data: notificationsChannelPage } =
    useGetPagesNotificationChannelsQuery(
      {
        page,
      },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  // hooks and variables
  const navigate = useNavigate();

  // handler function
  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleSearch = debounce((searchTerm) => {
    setSearchTerm(searchTerm);
  }, 500);

  const handlePageChange = (page) => {
    setPage(page);
  };

  // data to be returned
  const data = searchTerm ? notificationsChannel : notificationsChannelPage;

  return {
    headerModal,
    data,
    handleHeaderModal,
    handleSearch,
    handlePageChange,
    navigate,
    page,
  };
}

export default useNotificationChannels;
