import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import logo from "../../assets/logo.jpeg";

// This is reusable that is why the object are inside the function
const ChartBox = ({
  color = "#38bdf8",
  icon,
  title = "Total Users",
  dataKey = "pv",
  number = "0",
  percentage = 0,
  chartData = [],
}) => {
  return (
    <div className="flex justify-between items-center p-[10px] bg-[#0F2537] text-white rounded-lg shadow-md w-full h-full  min-h-[160px]">
      {/* Left Side: Info */}
      <div className="flex flex-col justify-between h-full gap-3 ">
        {/* Left top */}
        <div className="flex items-center gap-2">
          <img
            src={icon || logo}
            alt={`${title} icon`}
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-300">{title}</span>
        </div>

        {/* Left middle */}
        <h1 className="text-2xl font-semibold tracking-tight">{number}</h1>

        {/* Left bottom */}
        {/* Link is use to navigate pages, a property of react-router-dom */}
        <Link
          to="/"
          style={{ color }}
          className="text-xs hover:underline opacity-90 hover:opacity-100 w-fit"
        >
          View all
        </Link>
      </div>

      {/* Right Side: Chart & Stats */}
      <div className="flex flex-col items-end justify-between h-full gap-2 w-1/3 pt-[8px] pb-[4px]">
        {/* LineChart Container - w-full allows ResponsiveContainer to scale properly */}
        <div className="min-w-[100px] max-w-[150px] h-[50px]">
          {chartData && chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#eff0f3",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "12px",
                    padding: "4px 8px",
                    color: "#f8f3f3",
                  }}
                  itemStyle={{ color: "#fff" }}
                  position={{ y: -30 }}
                  labelStyle={{ display: "none" }}
                />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-xs text-gray-500 h-full flex items-center justify-end">
              No data
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-col items-end text-xs">
          <span
            className="font-semibold text-sm"
            style={{ color: percentage < 0 ? "#ef4444" : "#10b981" }}
          >
            {percentage < 0 ? `${percentage}%` : `+${percentage}%`}
          </span>
          <span className="text-gray-400 text-[10px]">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
