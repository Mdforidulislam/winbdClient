import { IoFunnelOutline } from "react-icons/io5";

const History = () => {
    return (
        <div className="w-full h-auto ">
            <div className="flex justify-between bg-[#393939] px-4 py-3">
                <div><h1 className="text-white">Last 7 days</h1></div>
                <div> <span className="text-xl text-white"><IoFunnelOutline /></span></div>
            </div>   
        </div>
    );
};

export default History;