import { IoSendSharp } from "react-icons/io5";
import { Pagination } from "../Pagination";


const DepositeTable = () => {
    return (
        <div className="">

            <div className="overflow-x-auto ml-12 -mt-9">
                <table className="w-[1200px]  text-white shadow-md border-gray-500 ">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-3 px-6 text-left border-b border-gray-500">Name</th>
                            <th className="py-3 px-6 text-left border-b border-gray-500">UserId</th>
                            <th className="py-3 px-6 text-left border-b border-gray-500">Phone</th>
                            <th className="py-3 text-left border-b  border-gray-500">Transition Id</th>
                            <th className="py-3 text-left border-b  border-gray-500 pl-6">Action</th>
                            <th className="py-3 text-left border-b  border-gray-500 pl-6">Submit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-800 transition duration-300">
                            <td className="py-4 px-6 border-b border-gray-700">Shiyam</td>
                            <td className="py-4 px-6 border-b border-gray-700">2.3</td>
                            <td className="py-4 px-6 border-b border-gray-700">01882239828</td>
                            <td className="py-4 px-6 border-b border-gray-700 ">323.42</td>
                            <td className=" border-b border-gray-700 ">
                                <select name="" id="" className="bg-[#1C2340] focus:outline-none px-5 py-2">
                                    <option value="hell">Accept </option>
                                    <option value="what">Pending</option>
                                    <option value="bye">Decline</option>

                                </select>
                            </td>
                            <td className="py-4 pl-12 cursor-pointer px-6 border-b border-gray-600 "><IoSendSharp /></td>

                        </tr>
                        <tr className="hover:bg-gray-800 transition duration-300">
                            <td className="py-4 px-6 border-b border-gray-700">Arif</td>
                            <td className="py-4 px-6 border-b border-gray-700">1.7</td>
                            <td className="py-4 px-6 border-b border-gray-700">01882239828</td>
                            <td className="py-4 px-6 border-b border-gray-700 ">4342.23</td>
                            <td className=" border-b border-gray-700 ">
                                <select name="" id="" className="bg-[#1C2340] focus:outline-none px-5 py-2">
                                    <option value="hell">Accept </option>
                                    <option value="what">Pending</option>
                                    <option value="bye">Decline</option>

                                </select>
                            </td>
                            <td className="py-4 pl-12 cursor-pointer border-b border-gray-600 "><IoSendSharp /></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div className="mt-7">
                <Pagination />
            </div>

        </div>
    );
};

export default DepositeTable;