import PropTypes from "prop-types";
import React from "react";
import { ArrowRightCircle, XCircle } from "react-feather";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useSendReplyMutation } from "../../features/support/support-api";
import { selectSelectMessage } from "../../features/support/support-slice";
import { replyChatValidator } from "../../validators/chat";
import Button from "../form-element/Button";
import Input from "../form-element/input";

const initialState = {
  subject: "",
  message: "",
};

function Reply({ handleSendClick }) {
  const [replyData, setReplyData] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  const selectedMessage = useSelector(selectSelectMessage);

  // api hooks
  const [sendReply, { isSuccess, status }] = useSendReplyMutation();

  const handleChange = (e) => {
    setReplyData({ ...replyData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isValid, errors } = replyChatValidator(replyData);

    if (!isValid) return setErrors(errors);

    const data = {
      subject: replyData.subject,
      message: replyData.message,
      email: selectedMessage?.email,
      userId: selectedMessage?.userId,
    };

    sendReply({ id: selectedMessage?.id, reply: data });
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Reply sent successfully");
      setReplyData(initialState);
      setErrors({});
      handleSendClick();
    }
  }, [isSuccess, status, handleSendClick]);

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <h1 className="border-b pb-1 mb-3">Reply</h1>
        <Input
          label="Subject"
          className="mb-3"
          name="subject"
          value={replyData.subject}
          isError={errors?.subject}
          errorMessage={errors?.subject}
          handleChange={handleChange}
        />
        <h1>Message</h1>
        <textarea
          rows="8"
          className="textarea w-full border_stroke text-black dark:text-white bg-white dark:bg-slate-900"
          name="message"
          value={replyData.message}
          onChange={handleChange}
        />
        {errors?.message && (
          <p className="text-red-600 text-sm">{errors?.message}</p>
        )}
        <div className="flex gap-5 justify-end items-center mt-5">
          <Button
            text="Cancel"
            Icon={() => <XCircle size={15} />}
            className="rounded-sm btn-sm"
            handler={handleSendClick}
          />
          <Button
            text="Send"
            type="submit"
            disabled={status === "pending"}
            Icon={() => <ArrowRightCircle size={15} />}
            className="rounded-sm btn-sm"
          />
        </div>
      </form>
    </>
  );
}

// props types validation
Reply.propTypes = {
  handleSendClick: PropTypes.func,
};

export default Reply;
