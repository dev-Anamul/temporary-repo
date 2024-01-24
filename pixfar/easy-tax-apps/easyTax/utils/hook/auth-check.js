import React from 'react';
import {useGetUserQuery} from '../../features/auth/auth-slice';

function useAuthCheck() {
  const {status, isLoading, isFetching} = useGetUserQuery();
  const [isChecked, setIsChecked] = React.useState(false);
  const [delay, setDelay] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(true);

  console.log({status});

  React.useEffect(() => {
    if (!isLoading && !isFetching && status === 'fulfilled') {
      setIsChecked(true);
      setIsChecking(true);
    } else if (status === 'rejected' && !isFetching && !isLoading) {
      setIsChecked(true);
      setIsChecking(true);
    }
  }, [status, isLoading, isFetching]);

  setTimeout(() => {
    if (isChecked) {
      setDelay(true);
    }
  }, 4000);

  return delay;
}

export default useAuthCheck;
