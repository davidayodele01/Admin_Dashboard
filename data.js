
// Top deal details
export const topDeals = [
  {
    id: 1,
    img: 'src/assets/logo.jpeg',
    username: "David Ayodele",
    email: "adavidoluwafemi@gmail.com",
    amount: "3.5677",
  },
  {
    id: 2,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Paul Michael",
    email: "pm@gmail.com",
    amount: "1.5677",
  },
  {
    id: 3,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Mary Clare",
    email: "maryclare@gmail.com",
    amount: "3.1027",
  },
  {
    id: 4,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Rachael Moore",
    email: "rmoore@gmail.com",
    amount: "6.5117",
  },
  {
    id: 5,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Walker Rain",
    email: "walkerrain@gmail.com",
    amount: "2.5607",
  },
  {
    id: 6,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Musa Peter",
    email: "MusaPeter@gmail.com",
    amount: "3.1677",
  },
  {
    id: 7,
    img: "https://unsplash.com/photos/grayscale-photography-of-kid-4U1x6459Q-s",
    username: "Shade Carrick",
    email: "shadeyc@gmail.com",
    amount: "7.7677",
  },
];

// Line chart data to pass to ChartBox )
export const chartBoxUser = {
  color: "#80ef88b7",
  icons: "/logo.jpeg",
  title: "Total User",
  number: "66.233",
  dataKey: "users",
  percentage: "67",
  chartData:[
  { name: "Sun", pv: 400 },
  { name: "Mon", pv: 300 },
  { name: "Tue", pv: 600 },
  { name: "Wed", pv: 800 },
  { name: "Thu", pv: 500 },
  { name: "Fri", pv: 900 },
  { name: "Sat", pv: 1000 },
],
};
export const chartBoxProducts = {
  color: "#f3ce8a",
  icons: "/logo.jpeg",
  title: "Products",
  number: "71.433",
  dataKey: "users",
  percentage: "-15",
  chartData:[
  { name: "Sun", pv: 400 },
  { name: "Mon", pv: 300 },
  { name: "Tue", pv: 600 },
  { name: "Wed", pv: 800 },
  { name: "Thu", pv: 500 },
  { name: "Fri", pv: 900 },
  { name: "Sat", pv: 1000 },
],
};
export const chartBoxRevenue = {
  color: "#e0e26b",
  icons: "/logo.jpeg",
  title: "Revenue",
  number: "97.503",
  dataKey: "users",
  percentage: "45",
  chartData:[
  { name: "Sun", pv: 400 },
  { name: "Mon", pv: 300 },
  { name: "Tue", pv: 600 },
  { name: "Wed", pv: 800 },
  { name: "Thu", pv: 500 },
  { name: "Fri", pv: 900 },
  { name: "Sat", pv: 1000 },
],
};
export const chartBoxConversion = {
  color: "#8eb0ec",
  icons: "/logo.jpeg",
  title: "Conversion",
  number: "12.203",
  dataKey: "users",
  percentage: "-90",
  chartData:[
  { name: "Sun", pv: 400 },
  { name: "Mon", pv: 300 },
  { name: "Tue", pv: 600 },
  { name: "Wed", pv: 800 },
  { name: "Thu", pv: 500 },
  { name: "Fri", pv: 900 },
  { name: "Sat", pv: 1000 },
],
};


// For (TopVist) barchart (i made it a prop because its reusable for two different)\
// This data is gotten from rechart, i make few change because am using it for another section
export const barChartBoxRevenue = {
  title: "Revenue",
  color: "#8884d8",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: "4000",
    },
    {
      name: "Mon",
      visit: "3000",
    },
    {
      name: "Tue",
      visit: "2000",
    },
    {
      name: "Wed",
      visit: "1000",
    },
    {
      name: "Thu",
      visit: "900",
    },
    {
      name: "Fri",
      visit: "800",
    },
    {
      name: "Sat",
      visit: "700",
    },
  ],
};
export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#ff8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: "4000",
    },
    {
      name: "Mon",
      visit: "3000",
    },
    {
      name: "Tue",
      visit: "2000",
    },
    {
      name: "Wed",
      visit: "1000",
    },
    {
      name: "Thu",
      visit: "900",
    },
    {
      name: "Fri",
      visit: "800",
    },
    {
      name: "Sat",
      visit: "700",
    },
  ],
};


