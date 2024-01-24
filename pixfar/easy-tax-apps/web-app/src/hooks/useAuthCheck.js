import React from "react";

import { useGetProfileQuery } from "../features/auth/auth-api";

function useAuthCheck() {
  const { status, isLoading, isFetching } = useGetProfileQuery();
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (!isLoading && !isFetching && status !== "pending") {
      setIsChecked(true);
    }
  }, [status, isLoading, isFetching]);

  return isChecked;
}

export default useAuthCheck;
