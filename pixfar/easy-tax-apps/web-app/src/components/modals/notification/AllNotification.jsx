import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideNotificationModal } from "../../../features/modal/modal-slice";
import { useNotifyAllMutation } from "../../../features/notifications/notification-api";
import { createNotification } from "../../../validators/notification";
import Loader from "../../ui/Loader";
import Modal from "../Modal";
import NotificationForm from "./NotificationForm";

// initial state
const initialState = {
  title: "",
  description: "",
};

function AllNotification() {
  // local state
  const [notificationForm, setNotificationForm] = React.useState(initialState);
  const [imageData, setImageData] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // mutation api
  const [notifyFunc, { isError, isLoading, isSuccess, status, error }] =
    useNotifyAllMutation();

  // hooks and variables
  const dispatch = useDispatch();

  // handlers
  const handleChange = (e) => {
    setNotificationForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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

    notifyFunc({ data: formData });
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
  }, [isSuccess, status, isError, error, dispatch]);

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

export default AllNotification;
