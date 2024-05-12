import { FaArrowRightToCity } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { PiHandWithdrawLight } from "react-icons/pi";


const TransitionReq = () => {
    return (
        <div>
            <div className="group relative mx-auto max-w-[390px] overflow-hidden bg-gradient-to-r from-[#1C2340] via-[#061621] to-[#152734] px-6 py-6 text-white shadow">
                <span className="absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#1C2340] via-[#16354c] to-[#2a4251] duration-300 group-hover:top-[-30%] group-hover:blur-sm"></span>
                <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#1C2340] via-[#132d3f] to-[#1c3f58] duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                <div className="relative z-20 space-y-3">
                <div className="flex gap-2 items-center">
                        
                        <IoMailOutline className="text-xl font-bold"/>
                        <h1 className="text-xl font-bold"> Xunaiet@gamil.com</h1>
                      
                </div>
                  <div className="flex items-center gap-2">
                        <PiHandWithdrawLight className="text-2xl"/>
                        <p>253656.767</p>
                  </div>
                  <div className="flex justify-end items-center gap-2">
                        <FaArrowRightToCity className="text-2xl"/>
                        <p>253656.767</p>
                  </div>
                    <p> By using this website you automatically accept that we use cookies.<a href="#" className="border-b"> What for?</a></p>
                  <div className="flex justify-between items-center pt-2">
                        <button className="border-2 border-[#4157b0]  hover:bg-[#283568] px-3 uppercas py-1">accepte</button>
                        <button className="bg-[#0e171f] hover:bg-red-600 hover:text-white text-red-600 px-3 py-1 uppercase">Cancel</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default TransitionReq;