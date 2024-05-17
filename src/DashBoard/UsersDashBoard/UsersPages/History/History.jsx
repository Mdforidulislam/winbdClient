import { IoFunnelOutline } from "react-icons/io5";
import Drawer from "./Drawer";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Authentication/Authentication";

const History = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    
    const { userSearchData } = useContext(AuthContext); // geting data from authocontect users history data ;

    

    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
    };

  

console.log(userSearchData);

    return (
        <div className="w-full h-auto ">
            <div className="flex justify-between bg-[#393939] px-4 py-3">
                <div><h1 className="text-white">Today</h1></div>
                <div className="">
                    <span onClick={handleOpenDrawer} className="text-xl text-white"><IoFunnelOutline /></span>
                    <Drawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
                </div>
            </div>  
            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#4C4C4C] text-white">
                    <thead className="bg-[#4C4C4C] py-3">
                    <tr className="py-4">
                        <th className="py-2 px-4 text-left text-sm border-r-2 border-gray-500 ">Type</th>
                        <th className="py-2 px-4 text-left text-sm border-r-2 border-gray-500">Amount</th>
                        <th className="py-2 px-4 text-left text-sm border-r-2 border-gray-500">Status</th>
                        <th className="py-2 px-4 text-left text-sm border-r-2 border-gray-500">Txn Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSearchData?.map((item , index) => (
                            <tr key={index} className="bg-gray-900 border-t border-gray-700">
                                    <td className="py-2 px-4 text-sm">{ item?.transactionType}</td>
                                    <td className="py-2 px-4 text-sm">৳{item?.amount }</td>
                                    <td className={`py-2 px-4 text-sm ${item?.requestStatus ==="Approved"?"bg-green-600 text-black w-[20px]":item?.requestStatus === "verify" ? 'bg-yellow-500 rounded-md text-black':item?.requestStatus === "Processing" ? "bg-slate-700 rounded-md":item?.requestStatus === "Rejected" ? "bg-red-600 rounded-md":null}`}>{ item?.requestStatus}</td>
                                    <td className="py-2 px-4 text-sm">{item?.dateTime}</td>
                            </tr>
                            ))
                        }
                  
                    {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
            <span className="text-white text-sm justify-center flex w-full mt-3 font-semibold">... end of page</span>
        </div>
    );
};

export default History;