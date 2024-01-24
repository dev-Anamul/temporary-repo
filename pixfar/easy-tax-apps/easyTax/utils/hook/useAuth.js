import {useSelector} from 'react-redux';

function useAuth() {
  const {isLoggedIn, token} = useSelector(state => state.login) || {};
  console.log({isLoggedIn});

  if (isLoggedIn && token) {
    return true;
  } else {
    return false;
  }
}

export default useAuth;
