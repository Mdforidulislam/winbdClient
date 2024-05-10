import { useState } from "react";
import { FaDeleteLeft, FaSackDollar } from "react-icons/fa6";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";


const UsertableList = () => {
    const [users,setUser] =useState(false)
    const toggleIcon = () => {
        setUser(prevState => !prevState);
    };
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">UserId</th>
                            <th className="py-4 px-6 text-lg border-b ">Accept</th>
                            <th className="py-4 px-6 text-lg border-b ">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <div className="relative group">
                                    <img className="size-[50px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                </div>                            </td>
                            <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
                            <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
                             {users ?   <td className="py-4 px-6 border-b ">
                                <HiMiniArrowPathRoundedSquare onClick={toggleIcon} className="text-2xl hover:text-red-500 animate-spin cursor-pointer ml-5 md:ml-5 lg:ml-[90px]" />
                            </td> 
                            :
                            <td className="py-4 px-6 border-b ">
                                    <img className="w-8 cursor-pointer ml-5 md:ml-5 lg:ml-[90px]" onClick={toggleIcon} src="https://i.ibb.co/4V1YjwW/image.png" alt="" />
                            </td>}
                            <td className="py-4 px-6 border-b text-end">
                                <FaDeleteLeft className="text-2xl md:ml-4 cursor-pointer hover:text-red-600 ml-4 lg:ml-16" />
                            </td>
                        </tr>

    {/* ------------------- 2nd data heree ------------------------- */}
                        <tr className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <div className="relative group">
                                    <img className="size-[50px] bg-slate-500 object-cover rounded-full" src="https://i.ibb.co/gMx1cxd/Whats-App-Image-2023-12-31-at-20-56-29-e7659849-removebg-preview.png" alt="avatar navigate ui" />
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                </div>                            </td>
                            <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
                            <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
                            {users ?   <td className="py-4 px-6 border-b ">
                                <HiMiniArrowPathRoundedSquare onClick={toggleIcon} className="text-2xl hover:text-red-500 animate-spin cursor-pointer ml-5 md:ml-5 lg:ml-[90px]" />
                            </td> 
                            :
                            <td className="py-4 px-6 border-b ">
                                    <img className="w-8 cursor-pointer ml-5 md:ml-5 lg:ml-[90px]" onClick={toggleIcon} src="https://i.ibb.co/4V1YjwW/image.png" alt="" />
                            </td>}
                            <td className="py-4 px-6 border-b text-end">
                                <FaDeleteLeft className="text-2xl md:ml-4 cursor-pointer hover:text-red-600 ml-4 lg:ml-16" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default UsertableList;