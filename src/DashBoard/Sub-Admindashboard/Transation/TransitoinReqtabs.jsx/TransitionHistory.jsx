import axios from "axios";
import { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";

const TransitionHistory = () => {
    const [authorId,setAuthorId] = useState('')
    const [storeHistory, setStoreHistory] = useState([]); // set hostory

    // geting unique id form local store
    useEffect(() => {
        const authorId = JSON.parse(localStorage.getItem('userData'))?.uniqueId;
        setAuthorId(authorId);
    },[])

    // geting hisitory info form database

    useEffect(() => {
        const getingHistoryData = async () => {
            const getingHistory = await axios.get(`http://localhost:5000/getingHistory?authorId=${authorId}`);
            const convertData = getingHistory?.data?.requestApprovdeData;
            console.log(convertData);
            setStoreHistory(convertData);
        }
        getingHistoryData();
    },[authorId])


    return (
        <div className="">

        <div className="overflow-x-auto ml-12 -mt-9">
            <table className="w-[1200px]  text-white shadow-md border-gray-500 ">
                <thead>
                    <tr className="bg-[#1C2340] text-white">
                        <th className="py-3 px-6 text-left border-b border-gray-500">Name</th>
                        <th className="py-3 px-6 text-left border-b border-gray-500">status</th>
                        <th className="py-3 px-6 text-left border-b border-gray-500">Type</th>
                        <th className="py-3 text-left border-b  border-gray-500">Amount</th>
                        <th className="py-3 text-left border-b  border-gray-500 pl-6">Submit</th>
                    </tr>
                </thead>
                <tbody>
                {
                       storeHistory?.map((item) => (
                           
                    <tr key={item?._id} className="hover:bg-gray-800 transition duration-300">
                               <td className="py-4 px-6 border-b border-gray-700">{ item?.userName}</td>
                               <td className="py-4 px-6 border-b border-gray-700">{item?.requestStatus}</td>
                               <td className="py-4 px-6 border-b border-gray-700">{item?.transactionType}</td>
                               <td className="py-4 px-6 border-b border-gray-700 ">{item.amount}</td>
                        <td className="py-4 pl-12 cursor-pointer px-6 border-b border-gray-600 "><IoSendSharp /></td>

                    </tr>
                       ))     
                   }
                </tbody>
            </table>

        </div>
    </div>
    );
};

export default TransitionHistory;