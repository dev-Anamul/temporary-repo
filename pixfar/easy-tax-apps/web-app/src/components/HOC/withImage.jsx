/* eslint-disable react/prop-types */

// third-party-packages
import PropTypes from "prop-types";

function withImage(OrgComponent) {
  const NewComponent = (props) => {
    // Function to handle image change
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          props.handleSetImage(file, e.target.result);
        };

        reader.readAsDataURL(file);
      }
    };

    return (
      <>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          id={props?.inputId}
        />
        <OrgComponent {...props} />
      </>
    );
  };

  return NewComponent;
}

// props validation
withImage.propTypes = {
  OrgComponent: PropTypes.elementType,
};

export default withImage;
