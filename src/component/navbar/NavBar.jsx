import { FiMenu, FiSettings } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { BiScan } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";

import logo from "../../assets/logo.jpeg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-[40px] py-[16px] bg-[#0F2537] text-white">
      {/* LHS */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Shopp Logo"
          className="w-[26px] h-[26px] object-cover rounded"
        />
        <span className="font-semibold text-lg">Shopp</span>
      </div>

      {/* RHS */}
      <div className="flex items-center gap-[24px]">
        {/* icons */}
        <div className="flex items-center gap-4 text-xl">
          <button aria-label="Search" className="hover:opacity-80">
            <FaSearch />
          </button>
          <button aria-label="Menu" className="hover:opacity-80">
            <FiMenu />
          </button>
          <button aria-label="Scan" className="hover:opacity-80">
            <BiScan />
          </button>

          {/* Notification Badge */}
          <div className="relative flex items-center justify-center">
            <IoNotificationsOutline className="text-2xl" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
              1
            </span>
          </div>
        </div>

        {/* Settings */}
        <button aria-label="Settings" className="text-xl hover:opacity-80">
          <FiSettings />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="David's Profile"
            className="w-[28px] h-[28px] rounded-full object-cover"
          />
          <span className="text-sm font-medium">David</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
