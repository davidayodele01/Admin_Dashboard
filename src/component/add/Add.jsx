import { useState } from "react";

// setOpen, setUsers are the params because we have it in out parent conponent
const Add = ({ setOpen, setUsers }) => {

  // Form deatils
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  // e.target refers to a particular input user typed to(e.g address 1.e it target the address of the user)
  // e.target.name refers to the title of the input(e.g username, email, phone-number, address etc.)
  // e.target.value refers to the input been typed (e.g David, adavid@gmail.com, Lekki, Lagos)
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // For submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 
    const newUser = {
      id: Date.now(),
      ...formData,
    };

    // Update parent state directly
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Close modal
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h1 className="text-xl font-bold mb-4 text-gray-800">Add New User</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Phone number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded text-sm transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
