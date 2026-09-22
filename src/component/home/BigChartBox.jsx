import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// i install recharts first
// i paste the data here because it not reusable i.e no need for props
// I copy the data from rechart and made some few changes
const data = [
  {
    name: "Sun",
    book: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    book: 5000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Tue",
    book: 4300,
    clothes: 3400,
    electronic: 1400,
  },
  {
    name: "Wed",
    book: 3050,
    clothes: 2490,
    electronic: 2900,
  },
  {
    name: "Thur",
    book: 2900,
    clothes: 2400,
    electronic: 2800,
  },
  {
    name: "Fri",
    book: 4000,
    clothes: 6100,
    electronic: 1280,
  },
  {
    name: "Sat",
    book: 7000,
    clothes: 9400,
    electronic: 2400,
  },
]

const BigChartBox = () => {
  return (
    <div className="biChartBox w-full h-full flex flex-col justify-between bg-[#0f2537] rounded-[10px] px-[8px] py-[16px] ">
      <h1 className="text-white font-semibold px-[10px]">Revenue Analytics</h1>
      <div className="chart w-full h-[300px]">
        {/* I copy this from rechart and paste */}
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* Area are the three items in the chart(i.e books, clothes and electronic) */}
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="2"
              stroke="#16b03d"
              fill="#16b03d"
            />
            <Area
              type="monotone"
              dataKey="book"
              stackId="3"
              stroke="#e887da"
              fill="#e887da"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
 
export default BigChartBox;