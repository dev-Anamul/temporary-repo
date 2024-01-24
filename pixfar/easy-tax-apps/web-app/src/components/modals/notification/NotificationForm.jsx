import PropTypes from "prop-types";
import { CheckCircle, XCircle } from "react-feather";
import Button from "../../form-element/Button";
import ImageInput from "../../form-element/ImageInput";
import TextArea from "../../form-element/TextArea";
import Input from "../../form-element/input";

function NotificationForm({
  handleClose,
  notificationForm,
  handleChange,
  handleImageChange,
  handleSubmit,
  errors,
}) {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-4 gap-y-3 w-full">
        <div>
          <Input
            label="Title"
            name="title"
            key="title"
            isError={errors?.title}
            errorMessage={errors?.title}
            value={notificationForm.title}
            handleChange={handleChange}
            placeholder={"Title"}
          />
        </div>
        <div>
          <TextArea
            label="Description"
            name="description"
            isError={errors?.description}
            errorMessage={errors?.description}
            key="description"
            value={notificationForm.description}
            handleChange={handleChange}
          />
        </div>
        <div>
          <ImageInput
            label="Image"
            name="image"
            key="image"
            handleChange={handleImageChange}
          />
        </div>
      </div>
      <div className="flex justify-end mt-3 gap-4">
        <Button
          type="submit"
          text="Save"
          Icon={() => <CheckCircle size={18} />}
        />
        <Button
          type="button"
          text="Cancel"
          Icon={() => <XCircle size={18} />}
          handler={() => handleClose()}
        />
      </div>
    </form>
  );
}

// prop types validation
NotificationForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  notificationForm: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default NotificationForm;
