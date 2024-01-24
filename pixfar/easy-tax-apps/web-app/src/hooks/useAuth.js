import { useSelector } from "react-redux";

function useAuth() {
  const { isLoggedIn, token, user } = useSelector((state) => state.auth) || {};

  if (isLoggedIn && token && user?.role === "admin") return true;
  else return false;
}

export default useAuth;
