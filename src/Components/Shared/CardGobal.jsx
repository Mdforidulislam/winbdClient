import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";


const CardGobal = () => {
    return (
        <div className="mt-5">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-1 max-w-screen-xl mx-auto">
{/* --------------------card 1 data  ---------------------- */}
                <div className="bg-[#1C2340] h-[150px]  px-12 py-5 rounded-lg shadow-sm shadow-[#4e587f]">
                    
                   <div className="flex justify-center items-center gap-4">
                        <div className="py-7 ">
                            <FaDollarSign className="text-3xl  bg-black rounded-full w-10 h-10  text-blue-700" />
                        </div>
                        <div className="py-8 ">
                            <p className="text-2xl font-bold text-white">$ 12.1211</p>
                            <p className="text-gray-400 text-sm">Current Balance</p>

                        </div>
                   </div>
                </div>
{/* --------------------card 2 data  ---------------------- */}
                <div className="bg-[#1C2340] h-[150px] px-12 py-5 rounded-lg shadow-sm shadow-[#4e587f]">
                    
                   <div className="flex justify-center items-center gap-4">
                        <div className="py-7 ">
                            <BsGraphUpArrow className="text-3xl   rounded-full w-10 h-10  text-green-700" />
                        </div>
                        <div className="py-8 ">
                            <p className="text-2xl font-bold text-white">$ 12.1211</p>
                            <p className="text-gray-400 text-sm">Total Profit</p>

                        </div>
                   </div>
                </div>
{/* --------------------card 3 data  ---------------------- */}
                <div className="bg-[#1C2340] h-[150px] px-12 py-5 rounded-lg shadow-sm shadow-[#4e587f]">
                    
                   <div className="flex justify-center items-center gap-4">
                        <div className="py-7 ">
                            <GiTakeMyMoney className="text-3xl  bg-black rounded-full w-10 h-10  text-purple-500" />
                        </div>
                        <div className="py-8 ">
                            <p className="text-2xl font-bold text-white">$ 12.1211</p>
                            <p className="text-gray-400 text-sm">Total income</p>

                        </div>
                   </div>
                </div>
{/* --------------------card 4 data  ---------------------- */}
                <div className="bg-[#1C2340] h-[150px] px-12 py-5 rounded-lg shadow-sm shadow-[#4e587f]">
                    
                   <div className="flex justify-center items-center gap-4">
                        <div className="py-7 ">
                            <BsGraphDownArrow className="text-3xl  rounded-full w-10 h-10  text-orange-700" />
                        </div>
                        <div className="py-8 ">
                            <p className="text-2xl font-bold text-white">$ 12.1211</p>
                            <p className="text-gray-400 text-sm">Current Balance</p>

                        </div>
                   </div>
                </div>


               </div>
            </div>
      
    );
};

export default CardGobal;