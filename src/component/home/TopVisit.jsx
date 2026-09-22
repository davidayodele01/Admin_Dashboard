import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

// This section have two different const for two different bar chart
const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className="barChartBox w-[100%] w-[100%] bg-[#0f2537] rounded-[10px] px-[8px] py-[16px]">
      <h1 className="font-[20px] mb-[20px] text-white">{title}</h1>
      <div className="chart ">
        {/* I copy and paste this from rechart after installing it */}
        <ResponsiveContainer width="100%" height={150}>
          <BarChart width={150} height={40} data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              // to remove background hover
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
