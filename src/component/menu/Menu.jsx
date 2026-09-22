import { AiFillProduct } from "react-icons/ai";
import { BiCalendar, BiChart, BiHome, BiNote } from "react-icons/bi";
import { BsBox2 } from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { GrFormSchedule } from "react-icons/gr";
import { LuLogs } from "react-icons/lu";
import { MdBackup } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { TbMenuOrder } from "react-icons/tb";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuSection w-[250px] py-[20px] px-[20px] bg-[#0F2537] border-r-2  text-white h-full" >
      <div className="menuContainer">
        {/* main */}
        <div className="main ">
          <span className="title mb-[8px] px-[16px] py-[4px] text-[12px]">
            MAIN
          </span>
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <BiHome />
            <span className="font-medium text-sm">Home</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <RiProfileFill />
            <span className="font-medium text-sm ">Profile</span>
          </Link>
        </div>
        {/* list menu */}
        <div className="list ">
          <span className="title mb-[8px] px-[16px] py-[4px] text-[12px]">
            LIST
          </span>
          {/* users */}
          <Link
            to="/users"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <CgUserList/>
            <span className="font-medium text-sm">Users </span>
          </Link>
          {/* products */}
          <Link
            to="/products"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <AiFillProduct/>
            <span className="font-medium text-sm hover:bg-red">Products</span>
          </Link>
          {/* orders */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <TbMenuOrder/>
            <span className="font-medium text-sm hover:bg-red">Orders</span>
          </Link>
          {/* post */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <RiProfileFill />
            <span className="font-medium text-sm hover:bg-red">Post</span>
          </Link>
        </div>
        {/* General */}
        <div className="list ">
          <span className="title mb-[8px] px-[16px] py-[4px] text-[12px]">
            GENERAL
          </span>
          {/* users */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <BiNote />
            <span className="font-medium text-sm">Note </span>
          </Link>
          {/* products */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <BsBox2 />
            <span className="font-medium text-sm hover:bg-red">Elements</span>
          </Link>
          {/* orders */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <GrFormSchedule />
            <span className="font-medium text-sm hover:bg-red">Forms</span>
          </Link>
          {/* post */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <BiCalendar />
            <span className="font-medium text-sm hover:bg-red">Calendar</span>
          </Link>
        </div>
        {/* Maintenance */}
        <div className="list ">
          <span className="title mb-[8px] px-[16px] py-[4px] text-[12px]">
            MAINTENANCE
          </span>
          {/* Settings */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <FiSettings />
            <span className="font-medium text-sm">Settings </span>
          </Link>
          {/* Backups */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <MdBackup />
            <span className="font-medium text-sm hover:bg-red">Backups</span>
          </Link>
        </div>
        {/* Analytics */}
        <div className="list ">
          <span className="title mb-[8px] px-[16px] py-[4px] text-[12px]">
            ANALYTICS
          </span>
          {/* charts */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <BiChart />
            <span className="font-medium text-sm">Charts </span>
          </Link>
          {/* logs */}
          <Link
            to="/"
            className="flex items-center gap-2 px-[16px] py-[8px] hover:bg-yellow-700 rounded hover:text-white"
          >
            <LuLogs />
            <span className="font-medium text-sm hover:bg-red">Logs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
