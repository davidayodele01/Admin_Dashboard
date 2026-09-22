import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import Add from "../add/Add";


const UsersTitle = () => {
  const [open, setOpen] = useState(false);

  // 1. Declare the users state here if it's managed in this component
  const [users, setUsers] = useState([]);

  return (
    <div className="w-full">
      <div className="info flex justify-between items-center mb-[12px]">
        <h1 className="font-bold text-2xl text-blue-700">Users</h1>
        <button
          className="px-[12px] py-[6px] bg-blue-500 rounded-sm text-white hover:bg-blue-900 flex items-center justify-evenly gap-[4px]"
          onClick={() => setOpen(true)}
        >
          Add new user{" "}
          <span>
            <BiPlus size={24} />
          </span>
        </button>
      </div>

     

      {/* 2. Pass setOpen and setUsers as props to the child component */}
      {/* With this i can go to the modal page */}
      {open && <Add setOpen={setOpen} setUsers={setUsers} />}
    </div>
  );
};

export default UsersTitle;
