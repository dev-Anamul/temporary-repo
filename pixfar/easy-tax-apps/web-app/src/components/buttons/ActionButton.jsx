import PropTypes from "prop-types";

function ActionButton({ Icon = () => {}, text, handleClick = () => {} }) {
  return (
    <button
      className="btn btn-sm  justify-start py-2 rounded-none dark:border-slate-700 text-black border_stroke hover:border-gray-200 hover:dark:border-slate-700  dark:text-white dark:text-opacity-80 hover:bg-white bg-white dark:bg-slate-900"
      onClick={handleClick}
      title={text}
    >
      <Icon />
    </button>
  );
}

// prop types for ActionButton
ActionButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default ActionButton;
