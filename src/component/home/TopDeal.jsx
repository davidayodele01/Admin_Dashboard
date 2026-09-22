import { topDeals } from "../../../data";

const TopDeal = () => {
  return (
    <div className="topDeal font-semibold  px-[12px] bg-[#0f2537] rounded-[10px] h-full">
      <h1 className="mb-[20px] pt-[16px] text-white">Top Deals</h1>
      <div className="">
        {/* i map user to key=(user.id) because i have i.d in data.js. if not i should have map(user, index ) to key=(index) */}
        {topDeals.map((user) => (
          <div className="userDetails " key={user.id}>
            <div className="flex items-center justify-between mb-[12px] ">
              {/* content */}
              <div className="flex items-center gap-[4px]">
                <img
                  src={user.img}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover "
                />
                {/*Name and email details */}
                <div className="userDetails flex flex-col  gap-[1px] mb-[6px]">
                  <span className="text-[14px] font-medium text-white">
                    {user.username}
                  </span>
                  <span className="text-[10px] font-normal text-[#fbfbf0]">
                    {" "}
                    {user.email}{" "}
                  </span>
                </div>
              </div>
              <span className="font-medium text-[14px] text-white">
                {" "}
                {user.amount}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeal;
