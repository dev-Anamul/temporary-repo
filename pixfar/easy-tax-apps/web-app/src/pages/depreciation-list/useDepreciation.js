import React from "react";
import { useParams } from "react-router-dom";
import { useGetDepreciationQuery } from "../../features/assets/assets-api";

const useDepreciation = () => {
  const { id } = useParams();
  // local state
  const [headerModal, setHeaderModal] = React.useState(true);

  const { data: depreciations } = useGetDepreciationQuery(id, {
    skip: !id,
    refetchOnMountOrArgChange: true,
  });

  // api hooks
  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  return {
    headerModal,
    depreciations,
    handleHeaderModalClose,
  };
};

export default useDepreciation;
