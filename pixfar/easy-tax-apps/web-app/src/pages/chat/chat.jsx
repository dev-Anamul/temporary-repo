import { useState } from "react";
import { Inbox, Star } from "react-feather";
import { RiMailSendFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import HeaderModal from "../../components/header-modal/HeaderModal";
import MessageItem from "../../components/message/MessageItem";
import SingleMessage from "../../components/message/SingleMessage";
import Reply from "../../components/reply/Reply";
import { useGetSupportQuery } from "../../features/support/support-api";
import { removeSelectMessage } from "../../features/support/support-slice";
import useWindowWidth from "../../hooks/useWindow";

function Chat() {
  const [send, setSend] = useState(false);
  const [type, setType] = useState("receive");
  const [headerModal, setHeaderModal] = useState(true);
  const [openReplay, setOpenReplay] = useState(false);

  const w970 = useWindowWidth(970);
  const w850 = useWindowWidth(850);
  const w600 = useWindowWidth(600);

  const { data: supportMessage } = useGetSupportQuery({ type });

  const dispatch = useDispatch();

  const handleType = (type) => {
    setType(type);
    dispatch(removeSelectMessage());
  };

  const handleHeaderModal = () => {
    setHeaderModal((prev) => !prev);
  };
  return (
    <>
      {headerModal && (
        <HeaderModal title="Chat" handleClose={handleHeaderModal} />
      )}
      <div className="mt-5 text-base text-black dark:text-white font-poppins">
        <div className={`flex ${w600 && "flex-col"} gap-3`}>
          <div
            className={`${
              w600 ? "w-full" : w850 ? "w-[20%]" : w970 ? "w-[7%]" : "w-[15%]"
            } border `}
          >
            <ul className={w600 && "flex w-full justify-around"}>
              <li className="border-b">
                <button
                  to="/"
                  className={`${
                    w850
                      ? "justify-start p-5"
                      : w970
                      ? "px-2 py-3 justify-center"
                      : "p-5"
                  }  flex gap-3 items-center w-full`}
                  onClick={() => {
                    setOpenReplay(false);
                    handleType("receive");
                  }}
                >
                  <Inbox size={20} />
                  {!w970 && <p>Inbox</p>} {!w600 && w850 && <p>Inbox</p>}
                </button>
              </li>
              <li className="border-b">
                <button
                  to="/"
                  className={`${
                    w850
                      ? "justify-start p-5"
                      : w970
                      ? "px-2 py-3 justify-center"
                      : "p-5"
                  }  flex gap-3 items-center w-full`}
                  onClick={() => {
                    setOpenReplay(false);
                    handleType("send");
                  }}
                >
                  <RiMailSendFill size={20} />
                  {!w970 && <p>Send Box</p>} {!w600 && w850 && <p>Send Box</p>}
                </button>
              </li>
              <li className="border-b">
                <button
                  to="/"
                  className={`${
                    w850
                      ? "justify-start p-5"
                      : w970
                      ? "px-2 py-3 justify-center"
                      : "p-5"
                  }  flex gap-3 items-center w-full`}
                  onClick={() => {
                    setOpenReplay(false);
                    handleType("featured");
                  }}
                >
                  <Star size={20} />
                  {!w970 && <p>Stared</p>} {!w600 && w850 && <p>Stared</p>}
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`${
              w600
                ? "w-[100%]"
                : w850
                ? "w-[80%] "
                : w970
                ? "w-[93%]"
                : "w-[85%]"
            } flex gap-5`}
          >
            {!openReplay && w850 && (
              <div className={`${w850 ? "w-[100%]" : "w-[25%]"} border`}>
                <ul className="">
                  {supportMessage?.data?.map((message) => (
                    <MessageItem
                      key={message._id}
                      message={message}
                      setOpenReplay={setOpenReplay}
                    />
                  ))}
                </ul>
              </div>
            )}
            {openReplay && w850 && (
              <div className={`w-full border`}>
                <SingleMessage
                  send={send}
                  handleSendClick={() => setSend(true)}
                  setOpenReplay={setOpenReplay}
                />

                {send && <Reply handleSendClick={() => setSend(false)} />}
              </div>
            )}

            {!w850 && (
              <div className={`w-[25%] border`}>
                <ul className="">
                  {supportMessage?.data?.map((message) => (
                    <MessageItem key={message._id} message={message} />
                  ))}
                </ul>
              </div>
            )}
            {!w850 && (
              <div className={`w-[75%] border`}>
                <SingleMessage
                  send={send}
                  handleSendClick={() => setSend(true)}
                  openReplay={openReplay}
                />

                {send && <Reply handleSendClick={() => setSend(false)} />}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
