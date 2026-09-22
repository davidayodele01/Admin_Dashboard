

import {
  chartBoxUser,
  chartBoxProducts,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
 
} from "../../../data";
import BigChartBox from "../../component/home/BigChartBox";
import ChartBox from "../../component/home/ChartBox";
import PieChartBox from "../../component/home/PieChartBox";
import TopDeal from "../../component/home/TopDeal";
import BarChartBox from "../../component/home/TopVisit";



const Home = () => {
  return (
    <div className="home flex ">
      <div className="box box1">
        <TopDeal />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProducts} />
      </div>
      <div className="box box4">
        <PieChartBox />{" "}
      </div>
      <div className="box box5">
        {/* I spread/open (...ChartBoxRevenue because it a reusable component which have the same function but different data) */}
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        {/* I spread/open (...ChartBoxConversion because it a reusable component which have the same function but different data) */}
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        {/* I spread/open (...barChartBoxVisit because it a reusable component which have the same function but different data) */}
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        {/* I spread/open (...barChartBoxRevenue because it a reusable component which have the same function but different data) */}
        {/* If i didn't spread/open it, it will be empty because it won't know which data to use */}
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
}
 
export default Home;