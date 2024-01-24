import React from "react";
import { Bell, DollarSign, Hash, Sliders, Users } from "react-feather";
import {
  AiOutlinePlusSquare,
  AiOutlineSetting,
  AiOutlineUnorderedList,
} from "react-icons/ai";
// import { FaUsers } from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import SidebarList from "./sidebar-list";
import style from "./sidebar.module.css";

function Sidebar() {
  const [selectId, setSelectId] = React.useState(null);

  const handleOpen = (id) => {
    if (id === selectId) {
      setSelectId(null);
      return;
    }
    setSelectId(id);
  };

  return (
    <div
      className={`pt-[85px]  h-[100vh] border-r border_stroke dark:border-gray-700 px-5`}
    >
      <ul className={style.ul}>
        {/* DASHBOARD */}
        <SidebarList
          icon={<LuLayoutDashboard size={20} />}
          title="Dashboard"
          link="/"
        />

        {/* OCR EXPENSE */}
        {/* <SidebarList
          icon={<Move size={20} />}
          title="OCR Expense"
          link="/ocr-expense"
        /> */}

        {/* USER */}
        <SidebarList
          title="Users"
          icon={<Users size={20} />}
          id="users"
          selectId={selectId}
          handleOpen={handleOpen}
        >
          <ul>
            <SidebarList
              title="User List"
              link={"/users"}
              icon={<AiOutlineUnorderedList size={20} />}
            />
            <SidebarList
              title="Create Users"
              link={"/add-user"}
              icon={<AiOutlinePlusSquare size={20} />}
            />
          </ul>
        </SidebarList>

        {/* INCOME SOURCE */}
        <SidebarList
          title="Income List"
          icon={<Hash size={20} />}
          id="income"
          selectId={selectId}
          link={"/income-sources"}
          handleOpen={handleOpen}
        />

        {/* EXPENSE */}
        <SidebarList
          title="Expense"
          icon={<DollarSign size={20} />}
          id="expense"
          selectId={selectId}
          handleOpen={handleOpen}
        >
          <ul>
            <SidebarList
              title="Expense List"
              icon={<AiOutlineUnorderedList size={20} />}
              link={"/expense-list"}
            />
            <SidebarList
              title="Create Expense"
              link="/add-expense"
              icon={<AiOutlinePlusSquare size={20} />}
            />
          </ul>
        </SidebarList>

        {/* CATEGORY */}
        <SidebarList
          title="Expense Type"
          icon={<Sliders size={20} />}
          id="category"
          link={"/category-list"}
          selectId={selectId}
          handleOpen={handleOpen}
        />

        {/* CATEGORY */}
        <SidebarList
          title="Income Type"
          icon={<Sliders size={20} />}
          id="income-type"
          link={"/income-type-list"}
          selectId={selectId}
          handleOpen={handleOpen}
        />

        {/* Chat */}
        <SidebarList icon={<BiChat size={20} />} link="/chat" title="Chat" />

        {/* NOTIFICATION */}
        <SidebarList
          icon={<Bell size={20} />}
          link="/notifications"
          title="Notifications"
        />

        {/* SETTINGS */}
        <SidebarList
          icon={<AiOutlineSetting size={20} />}
          link="settings"
          title="Settings"
        />

        {/* LOGOUT */}
      </ul>
    </div>
  );
}

export default Sidebar;
