import { IoFunnelOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import Drawer from "./Drawer";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Authentication/Authentication";
import Modal from "./Modal";

const History = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isModalOpen, setIsOpenModalOpen] = useState(false);
    const [historyModal, setHistoryModal] = useState({}); // store data for show modal data list 

    const { userSearchData } = useContext(AuthContext); // geting data from authocontect users history data ;

    
   // drawer state here 
    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
    };



    //  modal  state here 
    const openModal = (info) => {
        setIsOpenModalOpen(true);
        setHistoryModal(info);
    };

    console.log(userSearchData);

    return (
        <div className="w-full h-auto relative">
            <div className="flex justify-between px-4 bg-[#393939] py-3">
                <h1 className="text-white">Today</h1>
                <span onClick={handleOpenDrawer} className="text-xl text-white cursor-pointer"><IoFunnelOutline /></span>
                <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
            </div>
        <div className="overflow-x-auto w-full">
            <div className="bg-[#4C4C4C] text-white w-full">
                <div className="py-3 bg-[#4C4C4C] px-4">
                    <div className="flex ">
                        <div className="flex-1 border-r-2 border-gray-400 text-center text-sm">Type</div>
                        <div className="flex-1  border-r-2 border-gray-400 text-center text-sm">Amount</div>
                        <div className="flex-1  border-r-2 border-gray-400 text-center text-sm">Status</div>
                        <div className="flex-1  text-center text-sm">Txn Date</div>
                    </div>
                </div>
                    {/* dat show  */}
                    {
                       userSearchData && userSearchData.map((item,index)=>(
                        <div key={index} className="">
                        <div className="flex justify-between w-full px-4 bg-[#111014] py-2">
                             {/* data here */}
                                <div className="flex h-full  items-center gap-3">
                                        <span><FaCalendarAlt /></span>
                                        <h3 className="text-sm">{item?.date}</h3>
                                </div>
                            {/* time here */}
                                <div>
                                        <h1 className="text-sm">GMT+6</h1>
                                 </div>
                        </div>
                        {/* COntent show here  */}
                        <div  className="w-full px-4">
                        {item && item?.data?.map((item, index) => (
                            <div  onClick={()=>openModal(item)}  key={index} className="flex items-center py-2  border-t border-gray-700">
                                <div className="flex-1 text-center  text-sm capitalize">{item.transactionType}</div>
                                <div className="flex-1 text-center text-sm capitalize">৳{item.amount}</div>
                                <div className={`flex-1 text-center text-sm capitalize ${item.requestStatus === "Approved" ? "bg-green-600 text-black rounded-md" : item.requestStatus === "verify" ? 'bg-yellow-500 text-black rounded-md' : item.requestStatus === "Processing" ? "bg-slate-700 rounded-md" : item.requestStatus === "Rejected" ? "bg-red-600 text-black rounded-md" : ''}`}>{item.requestStatus}</div>
                                <div className="flex-1 text-sm text-center">{item.time}</div>
                            </div>
                        ))}
                        </div>  
                    </div>
                       ))  
               }
            </div>
        </div>
        <span className="text-white text-sm justify-center flex w-full mt-3 font-semibold">... end of page</span>
        <div className="absolute  h-full">
                <Modal setIsOpenModalOpen={setIsOpenModalOpen} isModalOpen={isModalOpen} historyModal={historyModal} /> 
        </div>
    </div>
    );
};

export default History;