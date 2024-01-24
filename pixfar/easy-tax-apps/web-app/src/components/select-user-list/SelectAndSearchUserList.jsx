import PropTypes from "prop-types";
import useSelectAndSearchUsers from "../../hooks/useSelectAndSearchUsers";
import { generateFullName } from "../../utils/generate-full-name";
import InfinityScroll from "../infinity-scroll/InfinityScroll";

function SelectAndSearchUserList({ handler, width = "w-80" }) {
  const { handleCheckboxChange, handlePageChange, handleSearch, page, users } =
    useSelectAndSearchUsers({ handler });

  return (
    <ul
      id="select_and_search_user_list"
      className={`p-2 shadow menu dropdown-content z-[1] rounded-sm header_bg dark:bg-slate-900 ${width}`}
    >
      <li>
        <input
          className="header_bg dark:bg-slate-900 border border_stroke  rounded-sm p-1 w-full mb-2"
          name="search"
          key="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </li>
      <InfinityScroll
        length={users?.data?.length}
        handlePageChange={handlePageChange}
        totalPages={users?.pagination?.totalPages}
        page={page}
        divId={"select_and_search_user_list"}
      >
        {users?.data?.map((item) => (
          <li key={item?._id}>
            <label>
              <input
                type="checkbox"
                className="checkbox checkbox-info rounded-sm checkbox-xs"
                value={item?._id}
                onChange={handleCheckboxChange}
              />
              <span className="label-text font-semibold text-md ml-2 text-slate-600">
                {generateFullName(
                  item?.firstName,
                  item?.middleName,
                  item?.lastName
                )}
              </span>
            </label>
          </li>
        ))}
      </InfinityScroll>
    </ul>
  );
}

// props validation
SelectAndSearchUserList.propTypes = {
  handler: PropTypes.func.isRequired,
  width: PropTypes.string,
};

export default SelectAndSearchUserList;
