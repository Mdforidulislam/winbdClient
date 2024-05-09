/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { FaAnglesDown } from "react-icons/fa6";



const DashboardCard = ({ sectionName, total, recentTotal, Style }) => {
    return (
        <div className={`space-y-5 border-2 text-center bg-black text-white border-teal-600 rounded-2xl mt-20 px-5 py-10 ${Style} `}>
            <h1 className="text-3xl font-semibold" > {sectionName}</h1 >
            <div className="pl-24">
                <FaAnglesDown className=" text-2xl font-semibold" />
            </div>
            <p className="text-3xl font-semibold">{total}</p>
            <p className="">last Week- {recentTotal} </p>

        </div >
    );
};

export default DashboardCard;