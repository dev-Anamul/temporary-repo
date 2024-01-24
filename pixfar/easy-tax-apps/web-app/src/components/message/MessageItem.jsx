import PropTypes from "prop-types";
import { Star } from "react-feather";
import { useDispatch } from "react-redux";
import { useMakeFeaturedMutation } from "../../features/support/support-api";
import { setSelectMessage } from "../../features/support/support-slice";
import useWindowWidth from "../../hooks/useWindow";

function MessageItem({ message, setOpenReplay }) {
  const dispatch = useDispatch();
  const w1250 = useWindowWidth(1250);

  const [makeFeatured] = useMakeFeaturedMutation();

  const handleMessageClick = () => {
    dispatch(setSelectMessage(message));
    setOpenReplay(true);
  };

  const handleMakeFeatured = (featured) => {
    makeFeatured({ id: message._id, data: { featured } });
  };

  // console.log(message);

  return (
    <li className="flex items-center justify-between px-1.5 py-2 border-b ">
      <button
        to="/"
        className="flex items-center gap-2 w-[80%]"
        onClick={handleMessageClick}
      >
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
          </div>
        </div>
        <div className="truncate max-w-[230px] text-left">
          <h1 style={{ fontSize: 16, marginBottom: -3 }} className="truncate">
            {message?.subject}
          </h1>
          <p style={{ fontSize: 12 }} className="truncate">
            {message?.message}
          </p>
        </div>
      </button>
      <div className="px-2 py-3 w-[20%] justify-end flex">
        <Star
          onClick={() => handleMakeFeatured(!message?.isFeatured)}
          size={18}
          className={`cursor-pointer ${
            message?.isFeatured ? "text-orange-400" : ""
          }`}
        />
      </div>
    </li>
  );
}

// props types validation
MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessageItem;
