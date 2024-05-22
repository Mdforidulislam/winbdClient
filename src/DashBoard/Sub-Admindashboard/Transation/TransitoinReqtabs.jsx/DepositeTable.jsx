import axios from "axios";
import { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import ModalTransaction from "./Modal/ModalTransaction";


const DepositeTable = () => {
    const [storeData, setStoreData] = useState([]); // store dat
    const [localData ,setLocalData] = useState('')

    useEffect(() => {
        const authurId = JSON.parse(localStorage.getItem("userData"))?.uniqueId;
        setLocalData(authurId);
    }, [])
    
    console.log(localData);
        useEffect(() => {
            // geting deposite data 
        const trnasctionDeposite = async () => {
            if (localData) {
                const serverData = await axios.get(`https://pay-winbd-server.vercel.app/transactionReqDopsite?authurId=${localData}`)
                setStoreData(serverData?.data?.queryDepositeData);
                console.log(serverData);
            }
        }
        trnasctionDeposite()
    },[localData])
    return (
        <div className="">

        <div className="overflow-x-auto">
            <table className="w-[1200px]  text-white shadow-md border-gray-500 ">
                <thead>
                    <tr className="bg-[#1C2340] text-white">
                        <th className="py-3 px-6 text-left border-b border-gray-500">User Name</th>
                        <th className="py-3 px-6 text-left border-b border-gray-500">Amount</th>
                        <th className="py-3 px-6 text-left border-b border-gray-500">Phone Number</th>
                        <th className="py-3 text-left border-b  border-gray-500">Transition Id</th>
                        <th className="py-3 text-left border-b  border-gray-500">Time</th>
                        <th className="py-3 text-left border-b  border-gray-500 pl-6">Submit</th>
                    </tr>
                </thead>
                <tbody >
                {
                    storeData?.map((item) => (
                       
                        <tr key={item._id} className="hover:bg-gray-800 transition duration-300">
                                <td className="py-4 px-6 border-b border-gray-700">{item?.userName}</td>
                                <td className="py-4 px-6 border-b border-gray-700">{item?.amount}</td>
                                <td className="py-4 px-6 border-b border-gray-700">{item?.number}</td>
                                <td className="py-4 px-6 border-b border-gray-700 ">{item?.transactionId}</td>
                                <td className="py-4 px-6 border-b border-gray-700 ">{item?.TimeDay}</td>
                                <td className="py-4 pl-12 cursor-pointer px-6 border-b border-gray-600 "><ModalTransaction item={item} /></td>                           
                       </tr>
               
                            ))
                        } 
                </tbody>  
            </table>

        </div>
    </div>
    );
};

export default DepositeTable;