import { topDeals } from "../../../data";

const TopDeal = () => {
  return (
    <div className="topDeal font-semibold px-[12px] bg-[#0f2537] rounded-[10px] h-full">
      <h1 className="mb-[20px] pt-[16px] text-white text-lg">Top Deals</h1>

      <div>
        {topDeals.map((user, index) => {
          // Dynamic random high-quality avatar fallback using Unsplash
          const randomAvatar = `https://images.unsplash.com/photo-${
            1500000000000 + (user.id || index) * 12345
          }?auto=format&fit=crop&w=100&q=80`;

          // Alternative easy dynamic fallback using user's name:
          const nameAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.username,
          )}&background=0D8ABC&color=fff`;

          return (
            <div className="userDetails" key={user.id || index}>
              <div className="flex items-center justify-between mb-[12px]">
                {/* User Content */}
                <div className="flex items-center gap-[10px]">
                  <img
                    src={
                      user.img ||
                      `https://i.pravatar.cc/150?u=${user.id || index}`
                    }
                    alt={user.username}
                    className="w-[40px] h-[40px] rounded-full object-cover border border-slate-700"
                    onError={(e) => {
                      // Fallback if the original image fails to load
                      e.currentTarget.src = nameAvatar;
                    }}
                  />

                  {/* Name and email details */}
                  <div className="flex flex-col gap-[1px]">
                    <span className="text-[14px] font-medium text-white">
                      {user.username}
                    </span>
                    <span className="text-[10px] font-normal text-slate-400">
                      {user.email}
                    </span>
                  </div>
                </div>

                {/* Amount */}
                <span className="font-medium text-[14px] text-emerald-400">
                  {user.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDeal;
