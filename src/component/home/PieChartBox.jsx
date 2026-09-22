import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// i paste it here because it not reusable
const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#41d24d" },
  { name: "Laptop", value: 300, color: "#85900e" },
  { name: "Tablet", value: 200, color: "#b129b1" },
];

const PieChartBox = () => {
  return (
    // i gave it w-[300px] or 100% when i reealized it didn't fill the container(grid box)
    <div
      className="pieChartBox w-[220px] h-[100%]
      flex
      flex-col
      justify-between
      px-[24px]
      py-[24px]
      bg-[#0f2537]
      rounded-[10px]
      "
    >
      <h1 className="text-white font-semibold text-semibold px-[16px] justify-center items-center flex ">
        Leads by Source
      </h1>
      <div className="chart flex items-center justify-center w-full h-full">
        {/* This is gotten from rechart website, i copy and paste  */}
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* option details */}
      <div className="options flex-wrap item-center justify-between gap-[4px] ">
        {data.map((item, index) => (
          <div key={index} className=" ">
            <div className="flex items-center justify-between">
              <div className="flex gap-[4px] items-center justify-center">
                {/* dot */}
                <div
                  className="dot w-[8px] h-[8px] rounded-lg mt-[5px]"
                  style={{ backgroundColor: item.color }}
                ></div>
                {/* item name */}
                <div className="title text-[14px] font-medium items-center justify-center ">
                  <span className="text-white">{item.name}</span>
                </div>
              </div>
              {/* item value */}
              <div className="flex flex-col gap-[4px]">
                <span className="text-[14px] text-white">{item.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
