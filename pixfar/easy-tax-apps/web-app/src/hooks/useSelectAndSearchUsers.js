import React from "react";
import { useGetUsersQuery } from "../features/users/users-api";
import { debounce } from "../utils/debounce";

function useSelectAndSearchUsers({ handler }) {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  // api hooks
  const { data: users } = useGetUsersQuery({ search });
  const [selectedUsers, setSelectedUsers] = React.useState([]);

  const handleCheckboxChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectedUsers((prev) => [...prev, value]);
      handler([...selectedUsers, value]);
    } else {
      setSelectedUsers((prev) => prev.filter((item) => item !== value));
      handler(selectedUsers.filter((item) => item !== value));
    }
  };

  console.log("selectedUsers hooks", selectedUsers);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 500);

  return {
    users,
    handleCheckboxChange,
    handlePageChange,
    handleSearch,
    page,
  };
}

export default useSelectAndSearchUsers;
