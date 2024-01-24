import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { hideNotificationModal } from "../../../features/modal/modal-slice";
import { useNotifyChannelUsersMutation } from "../../../features/notification-channels/channel-api";
import { createNotification } from "../../../validators/notification";
import Loader from "../../ui/Loader";
import Modal from "../Modal";
import NotificationForm from "./NotificationForm";

// initial state
const initialState = {
  title: "",
  description: "",
};

function NotifyMembers() {
  // local state
  const [notificationForm, setNotificationForm] = React.useState(initialState);
  const [imageData, setImageData] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  // mutation api
  const [NotifyMembers, { isError, isLoading, isSuccess, status }] =
    useNotifyChannelUsersMutation();

  // hooks and variables
  const dispatch = useDispatch();

  // get data from redux store
  const { notificationModal } = useSelector((state) => state?.modal) || {};

  console.log(notificationModal);

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

    const { isValid, errors } = createNotification(notificationForm);

    if (!isValid) return setErrors(errors);

    const formData = new FormData();
    formData.append("title", notificationForm.title);
    formData.append("body", notificationForm.description);
    formData.append("imageUrl", imageData);

    NotifyMembers({ data: formData, id: notificationModal?.data });
  };

  // handle side effect
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Notification sent successfully!");
      dispatch(hideNotificationModal());
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error("Failed to send notification! Please try again.");
    }
  }, [isSuccess, status, dispatch, isError]);

  return (
    <Modal title="Notification" handleClose={handleClose} width="10/12">
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

export default NotifyMembers;
