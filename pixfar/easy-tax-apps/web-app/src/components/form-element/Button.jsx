import PropTypes from "prop-types";
function Button({
  Icon = () => {},
  text = "Apply",
  type = "button",
  handler = () => {},
  className = "",
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      className={`btn font-normal dark:border-slate-700 text-black border_stroke hover:border-gray-200 hover:dark:border-slate-700  dark:text-white dark:text-opacity-80 hover:bg-white bg-white dark:bg-slate-900 ${className}`}
      type={type}
      onClick={handler}
    >
      <Icon /> {text}
    </button>
  );
}

//  props type Validation
Button.propTypes = {
  Icon: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  handler: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
