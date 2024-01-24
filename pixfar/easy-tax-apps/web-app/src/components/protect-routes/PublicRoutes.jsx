import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PublicRoutes({ children }) {
  const isLoggedIn = useAuth();

  // protected route
  return !isLoggedIn ? children : <Navigate to="/" />;
}

// prop types
PublicRoutes.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicRoutes;
