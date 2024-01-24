import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();

  // protected route
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// prop types
PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateRoute;
