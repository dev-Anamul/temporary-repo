import React from "react";
import { CheckCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/form-element/Button";
import ImageInput from "../../components/form-element/ImageInput";
import Input from "../../components/form-element/input";
import HeaderModal from "../../components/header-modal/HeaderModal";
import SelectAndSearchUserList from "../../components/select-user-list/SelectAndSearchUserList";
import { useCreateNotificationChannelMutation } from "../../features/notification-channels/channel-api";
import useWindowWidth from "../../hooks/useWindow";

// initial state
const initialState = {
  channelName: "",
  description: "",
};

function AddNotificationChannel() {
  const [headerModal, setHeaderModal] = React.useState(true);
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  const [image, setImage] = React.useState(null);
  const [formData, setFormData] = React.useState(initialState);
  const w500 = useWindowWidth(500);

  // api hooks
  const [addChannel, { isLoading, isError, isSuccess, status, error }] =
    useCreateNotificationChannelMutation();
  // const { data: users } = useGetUsersQuery({});

  // hooks
  const navigate = useNavigate();

  const handleHeaderModalClose = () => {
    setHeaderModal((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (value) => {
    setImage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.channelName || !selectedUsers || !image) {
      toast.error("Please fill all the fields");
      return false;
    }

    const form = new FormData();
    form.append("channelName", formData.channelName);
    form.append("description", formData.channelName);
    form.append("members", selectedUsers);
    form.append("logo", image);

    addChannel(form);
  };

  console.log({ selectedUsers });

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Notification channel added successfully!");
      setFormData(initialState);
      setSelectedUsers([]);
      setImage(null);
      navigate("/notification-channel");
    } else if (isError && status === "rejected") {
      toast.dismiss();
      toast.error("Something went wrong!");
      console.log(error);
    }
  }, [isSuccess, status, isError, error, navigate]);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          {headerModal && (
            <HeaderModal
              title="Add Notification Channel"
              handleClose={handleHeaderModalClose}
            />
          )}
        </div>
        <div className="flex justify-between items-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <div
              className={`grid ${
                w500 ? "grid-cols-1" : "grid-cols-2"
              } gap-x-4 gap-y-4  w-full items-start justify-center`}
            >
              <div>
                <Input
                  label="Channel Name"
                  name="channelName"
                  key="channelName"
                  value={formData.channelName}
                  handleChange={handleChange}
                />
              </div>
              <div>
                <Input
                  label="Description"
                  name="description"
                  key="description"
                  value={formData.description}
                  handleChange={handleChange}
                />
              </div>
              <div>
                {/* <button
                  className="border w-full text-left py-[10px] rounded-md px-4 text-black mt-3"
                  onClick={() => setModal(true)}
                  type="button"
                >
                  Select User
                </button> */}
                <details className="dropdown dropdown-bottom text-left w-full">
                  <summary className="mt-3 custom_btn w-full text-left justify-start">
                    Select Members
                  </summary>
                  <div className="top-auto">
                    <SelectAndSearchUserList
                      handler={(users) => setSelectedUsers(users)}
                    />
                  </div>
                </details>
              </div>
              <div>
                <ImageInput
                  label="Upload Channel Image"
                  name="image"
                  key="image"
                  side="bottom"
                  height={300}
                  width={300}
                  handleChange={handleImageChange}
                />
              </div>
            </div>
            <div className="flex justify-start mt-3 gap-4">
              <Button
                text="Save"
                type="submit"
                disabled={isLoading || status === "pending"}
                Icon={() => <CheckCircle size={18} />}
              />
              <Button
                text="Back"
                type="button"
                disabled={isLoading || status === "pending"}
                Icon={() => <XCircle size={18} />}
                handler={() => {
                  window.history.back();
                }}
              />
            </div>
          </form>
        </div>
      </div>

      {/* {modal && (
        <Modal title="Select User" handleClose={() => setModal(false)}>
          <SelectAndSearchUserList
            handler={(users) => setSelectedUsers(users)}
            width="w-full"
          />
          <div className="text-center mt-5">
            <summary
              type="button"
              className="btn bg-[#1D5276] text-white"
              onClick={() => setModal(false)}
            >
              Add and Close
            </summary>
          </div>
        </Modal>
      )} */}
    </>
  );
}

export default AddNotificationChannel; //handleClose={handleModalClose}
