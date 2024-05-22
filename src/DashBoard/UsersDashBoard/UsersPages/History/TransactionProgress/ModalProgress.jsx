import { FaFlag } from "react-icons/fa";

import { GrInProgress } from "react-icons/gr";
import { GrCompliance } from "react-icons/gr";

const ModalProgress = ({ historyModal }) => {
    const { amount, date, requestStatus, time, transactionType } = historyModal;
    return (
        <div className=" px-3 mt-6">
              {/* tile the transaction info */}
              <div className="flex justify-between">
                <h1 className="text-white">Transaction Progress</h1>
                <p className="text-white bg-[#C25151] p-1 rounded-sm text-[12px]">{requestStatus}</p>
            </div>
            {/* line activities work */}
            <div className="flex w-full gap-6 ">
                {/* line active bar  */}
                <div className=" h-[190px] mt-14  w-1 bg-[#DDAB05]  justify-items-stretch relative">
                    <div className="absolute top-0">
                             <span className="bg-white h-[12px] w-[12px] rounded-full absolute -ml-1  -z-10"></span>
                             <div className="text-md text-white bg-[#DDAB05]  p-2 rounded-full border-white border-[3px] -ml-4 -mt-4">
                                    <span className="animate-spin font-bold bg-white"><FaFlag /></span>
                             </div>
                    </div>
                    <div className="absolute bottom-20">
                             <span className="bg-white h-[12px] w-[12px] rounded-full absolute -ml-1 -z-30"></span>
                             <div className="text-md text-white bg-[#DDAB05]  p-2 rounded-full border-white border-[3px] -ml-4 -mt-4">
                                    <span className="animate-spin font-bold bg-white"><GrInProgress /></span>
                             </div>
                    </div>
                    <div className="absolute bottom-0">
                             <span className="bg-white h-[12px] w-[12px] rounded-full absolute -ml-1 -z-30"></span>
                        <div className="text-md text-white bg-[#DDAB05]  p-2 rounded-full border-white border-[3px] -ml-4 -mt-4">
                                    <span className="animate-spin font-bold bg-white"><GrCompliance /></span>
                        </div>
                    </div>
                </div>
                {/* info bar  */}
                <div className=" w-full">
                    {/* fast step */}
                    <div className="mt-5 space-y-1">
                        <div>
                            <p className="text-[12px] text-white -ml-4">2032/23/3</p>
                        </div>
                        <div className="flex justify-between px-2 py-3  rounded-sm bg-[#4D4D4D]">
                         
                            <p className="text-white text-[12px]">Your Deposite Has Faild</p>
                            <p className="text-white text-[12px]">23:23:11</p>
                        </div>
                    </div>
                    {/* send step processcing */}
                    <div className="mt-5 space-y-1">
                        <div>
                            <p className="text-[12px] text-white -ml-4">2032/23/3</p>
                        </div>
                        <div className="flex justify-between px-2 py-3  rounded-sm bg-[#4D4D4D]">
                            <p className="text-white text-[12px]">Your Deposite Has Faild</p>
                            <p className="text-white text-[12px]">23:23:11</p>
                        </div>
                    </div>
                    {/* recive data  */}
                    <div className="mt-5 space-y-1">
                        <div>
                            <p className="text-[12px] text-white -ml-4">2032/23/3</p>
                        </div>
                        <div className="flex justify-between px-2 py-3  rounded-sm bg-[#4D4D4D]">
                            <p className="text-white text-[12px]">Your Deposite Has Faild</p>
                            <p className="text-white text-[12px]">23:23:11</p>
                        </div>
                    </div>
                </div>
            </div>
              {/* note section */}
              <div className="mt-3 ">
                    <h1 className="text-white text-[12px] font-thin">Note: On progress the section</h1>
                </div>
        </div>
    );
};

export default ModalProgress;
