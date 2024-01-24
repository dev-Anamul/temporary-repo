import PropTypes from "prop-types";
import React from "react";

function ImageInput({
  handleChange,
  height = 130,
  width = 130,
  label = "Select Image",
  side = "top",
  className = "",
  setImageName = () => {},
  notImage,
}) {
  const [selectedImage, setSelectedImage] = React.useState(null);

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        handleChange(file);
        setImageName({ name: file.name, link: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="imageInput"
      />

      {notImage ? null : (
        <>
          {selectedImage && side?.toString() === "top" && (
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
              />
            </div>
          )}
          <label
            htmlFor="imageInput"
            className={`custom_btn my-3 font-semibold ${className}`}
          >
            {label}
          </label>
          {selectedImage && side?.toString() === "bottom" && (
            <div>
              <img
                src={selectedImage}
                alt="Selected"
                className="mt-2"
                style={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

// props validation
ImageInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  label: PropTypes.string,
  side: PropTypes.string,
  className: PropTypes.string,
  setImageName: PropTypes.func,
  notImage: PropTypes.bool,
};

export default ImageInput;
