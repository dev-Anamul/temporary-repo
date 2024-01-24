/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import withImage from "../HOC/withImage";

function ImageClickInput({
  inputId,
  selectUrl,
  defaultImage,
  width = "w-[250px]",
  height = "h-[120px]",
}) {
  return (
    <div>
      <label htmlFor={inputId} className="font-semibold">
        {/* <div
          className={`border ${width} mt-2 rounded cursor-pointer p-3 ${height} `}
        >
          Choose Image
        </div> */}
        <img
          src={selectUrl || defaultImage || "/click.png"}
          alt="Logo"
          className={`border ${width} mt-2 rounded cursor-pointer p-3 ${height} ${
            selectUrl ? "object-cover" : "object-contain"
          }`}
        />
      </label>
    </div>
  );
}

// props validation
ImageClickInput.propTypes = {
  selectUrl: PropTypes.string,
  inputId: PropTypes.string,
  handleSetImage: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  defaultImage: PropTypes.string,
};

export default withImage(ImageClickInput);
