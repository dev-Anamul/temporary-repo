import PropTypes from "prop-types";

function SummeryCard({ text = "text", number = 23, Icon = () => {} }) {
  return (
    <div className="flex dashboard_card items-center gap-x-3 w-full justify-center header_bg py-8 rounded-md drop-shadow dark:bg-slate-800 border dark:border-slate-700">
      <div className="flex flex-col items-center justify-center w-[30%]">
        {
          <Icon
            size={50}
            color="#fff"
            className="header_text dark:text-sky-600"
          />
        }
      </div>
      <div className="flex flex-col justify-center items-center w-[70%] ">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-400">
          {number}
        </div>
        <div className="text-lg header_text dark:text-sky-600">{text}</div>
      </div>
    </div>
  );
}

// props types validation
SummeryCard.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Icon: PropTypes.elementType,
};

export default SummeryCard;
