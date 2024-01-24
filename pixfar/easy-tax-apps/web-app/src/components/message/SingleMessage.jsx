import PropTypes from "prop-types";
import { BsFillReplyAllFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectSelectMessage } from "../../features/support/support-slice";
import { distanceFromNow } from "../../utils/date";
import Button from "../form-element/Button";
import { ArrowLeft } from "react-feather";
import useWindowWidth from "../../hooks/useWindow";

function SingleMessage({ send, handleSendClick, openReplay, setOpenReplay }) {
  const message = useSelector(selectSelectMessage) || {};
  const w850 = useWindowWidth(850);
  const w600 = useWindowWidth(600);

  if (message && Object.keys(message).length === 0) {
    return;
  }

  const date = new Date(message?.createdAt);

  return (
    <>
      <div className="border-b px-3 py-1 flex items-center justify-between">
        <div className="">
          <div className="avatar flex items-center">
            {!openReplay && w850 && (
              <ArrowLeft onClick={() => setOpenReplay(false)} />
            )}
            <div className="w-[50px]">
              <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
            </div>
          </div>
          {/* <h1>Title</h1> */}
        </div>
        <p style={{ fontSize: 15 }}>
          {distanceFromNow([
            date.getFullYear(),
            date?.getMonth(),
            date?.getDate(),
          ])}
        </p>
      </div>
      <div className="p-5">
        <div className="flex gap-5">
          <h1 className="w-[60px]">Email </h1> :
          <p style={{ fontSize: 13 }}>{message?.email}</p>
        </div>
        <div className="flex gap-5  my-3">
          <h1 className="w-[60px]">Subject </h1> :
          <p style={{ fontSize: 13 }}>{message?.subject}</p>
        </div>
        <div className="flex gap-5">
          <h1 className="w-[60px]">Message </h1> :
          <p style={{ fontSize: 13 }}>{message?.message}</p>
        </div>

        {!send && (
          <>
            <div className="flex gap-5 mt-5 justify-end">
              <Button
                text="Reply"
                Icon={() => <BsFillReplyAllFill />}
                className="rounded-sm btn-sm"
                handler={handleSendClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

// props types validation
SingleMessage.propTypes = {
  send: PropTypes.bool,
  handleSendClick: PropTypes.func,
  openReplay: PropTypes.bool,
  setOpenReplay: PropTypes.func,
};

export default SingleMessage;
