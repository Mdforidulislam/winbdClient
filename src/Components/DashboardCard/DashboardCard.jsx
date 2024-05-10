/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import "./DashBoardCard.css"



const DashboardCard = ({ CurrentStatus, Icon, total, Style, IconBg }) => {
    return (
        <div className={`space-y-5 shadow flex roll-in-left bg-[#1C2340]  justify-around   gap-2   text-white/60 border-teal-600 rounded-3xl mt-10 py-4 px-4  ${Style} `}>
            <div className="w-1/2   text-3xl  p-4 font-semibold">
                <div className={` rounded-full p-3  ${IconBg}`}>
                    <p className="pl-4">{Icon}</p>
                </div>
                {/* <FaUserTie className=" " /> */}
            </div>
            <div className="w-1/2  text-white space-y-2 text-center">
                <p className="text-2xl font-bold ">{total}</p>
                <p className="text-sm font-semibold ">{CurrentStatus} </p>
            </div>

        </div >
    );
};

export default DashboardCard;