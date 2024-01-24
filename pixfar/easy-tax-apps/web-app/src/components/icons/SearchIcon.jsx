import PropTypes from "prop-types";
import { Search } from "react-feather";

function SearchIcon({ size }) {
  return <Search size={size || 16} />;
}

// prop types for the SearchIcon component
SearchIcon.propTypes = {
  size: PropTypes.number,
};

export default SearchIcon;
