import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import hero from "../../assets/hero.png";

const UserDetails = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
  ];

  return (
    <div className="UserDetails flex gap-6 pt-6 pb-6 h-full">
      {/* Left Section */}
      <div className="LHS flex-1 flex flex-col justify-between gap-6">
        <div className="info flex-1 flex-col ">
          <div className="flex items-center gap-3 mb-4">
            <img src={hero} alt="User Avatar" className="w-[32px] h-[32px] rounded-full object-cover" />
            <h1 className="text-xl font-bold">John Doe</h1>
          </div>
          <div className="flex gap-6">
            <span className="itemTitle text-medium ">Username</span>
            <span className="itemValue font-sm text-gray-500">John Doe</span>
          </div>
          <div className="flex gap-6">
            <span className="itemTitle text-medium ">Username</span>
            <span className="itemValue font-sm text-gray-500">John Doe</span>
          </div>
          <div className="flex gap-6">
            <span className="itemTitle text-medium ">Username</span>
            <span className="itemValue font-sm text-gray-500">John Doe</span>
          </div>
          
        </div>

        {/* Fixed: Chart wrapper requires a fixed/min height (e.g. h-[300px]) for ResponsiveContainer */}
        <div className="chart w-full h-[300px] flex-1 flex-col">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#2563eb' }} 
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Section */}
      <div className="activities LHS flex-1 ">
        <h2 className="text-lg font-bold mb-4">Latest Activities</h2>
        <ul className="flex flex-col gap-3 border-l-blue-500 border-l-[2px]">
          
          <li className="relative flex flex-col  p-3 bg-gray-50 rounded-r-lg  ">
              <span className="absolute -left-[16px] top-6 w-2 h-2 bg-blue-500 rounded-full border-2 border-blue-500" />
              <p className="title font-semibold text-sm">I updated my contact number</p>
              <time className="time text-xs text-gray-400">3 minutes ago</time>
          </li>
          <li className="relative flex flex-col  p-3 bg-gray-50 rounded-r-lg  ">
              <span className="absolute -left-[16px] top-6 w-2 h-2 bg-blue-500 rounded-full border-2 border-blue-500" />
              <p className="title font-semibold text-sm">I updated my contact number</p>
              <time className="time text-xs text-gray-400">3 minutes ago</time>
          </li>
          <li className="relative flex flex-col  p-3 bg-gray-50 rounded-r-lg  ">
              <span className="absolute -left-[16px] top-6 w-2 h-2 bg-blue-500 rounded-full border-2 border-blue-500" />
              <p className="title font-semibold text-sm">I updated my contact number</p>
              <time className="time text-xs text-gray-400">3 minutes ago</time>
          </li>
          <li className="relative flex flex-col  p-3 bg-gray-50 rounded-r-lg  ">
              <span className="absolute -left-[16px] top-6 w-2 h-2 bg-blue-500 rounded-full border-2 border-blue-500" />
              <p className="title font-semibold text-sm">I updated my contact number</p>
              <time className="time text-xs text-gray-400">3 minutes ago</time>
          </li>
          
            
            
          
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;