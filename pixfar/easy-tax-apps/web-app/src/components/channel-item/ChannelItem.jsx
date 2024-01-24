import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ChannelItem({ channel, setShow }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/notification-channel/channel/" + channel?._id);
    setShow(true);
  };
  return (
    <button
      to={"/notification-channel/channel/" + channel?._id}
      onClick={handleNavigate}
      className="flex text-black dark:text-gray-200 w-full justify-start rounded-md border border_stroke dark:border-slate-700 py-3 my-1.5 px-2 cursor-pointer"
    >
      <div className=" dark:border-slate-700 flex justify-center items-center h-10">
        <div className="min-w-[100] rounded-full overflow-hidden flex justify-center items-center ">
          <img
            src={channel?.logo}
            className="w-[50px] h-[50px] rounded-full object-contain"
          />
        </div>
      </div>
      <div className=" w-[90%]  pl-2">
        <h3 className="truncate font-poppins text-left">
          {channel?.channelName || "Channel Name"}
        </h3>
        <p className="truncate font-poppins text-xs text-left">
          {channel?.description || "Channel Description"}
        </p>
      </div>
    </button>
  );
}

// props validation
ChannelItem.propTypes = {
  channel: PropTypes.object.isRequired,
  setShow: PropTypes.func,
};

export default ChannelItem;
