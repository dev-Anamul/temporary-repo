import PropTypes from "prop-types";
import React from "react";
import { Loader } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { hideNotificationModal } from "../../../features/modal/modal-slice";
import { useNotifySingleMutation } from "../../../features/notifications/notification-api";
import { createNotification } from "../../../validators/notification";
import Modal from "../Modal";
import NotificationForm from "./NotificationForm";

// initial state
const initialState = {
  title: "",
  description: "",
};

function SingleNotification() {
  // local state
  const [notificationForm, setNotificationForm] = React.useState(initialState);
  const [imageData, setImageData] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // mutation api
  const [notifySingle, { isError, isLoading, isSuccess, status, error }] =
    useNotifySingleMutation();

  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { notificationModal } = useSelector((state) => state?.modal) || {};

  // handlers
  const handleChange = (e) => {
    setNotificationForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (value) => {
    setImageData(value);
  };

  const handleClose = () => {
    dispatch(hideNotificationModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, isValid } = createNotification(notificationForm);

    if (!isValid) return setErrors(errors);

    const formData = new FormData();
    formData.append("title", notificationForm.title);
    formData.append("body", notificationForm.description);
    formData.append("imageUrl", imageData);
    formData.append("ids", notificationModal?.data);

    notifySingle({ data: formData, userId: notificationModal?.data });
  };

  // handle side effect
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Notification sent successfully!");
      dispatch(hideNotificationModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error(error?.data?.message);
    }
  }, [isSuccess, status, dispatch, isError, error]);

  return (
    <Modal title="Notification" handleClose={handleClose}>
      {isLoading || status === "pending" ? (
        <Loader />
      ) : (
        <NotificationForm
          handleChange={handleChange}
          handleClose={handleClose}
          handleImageChange={handleImageChange}
          notificationForm={notificationForm}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </Modal>
  );
}

// props validation
SingleNotification.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default SingleNotification;
