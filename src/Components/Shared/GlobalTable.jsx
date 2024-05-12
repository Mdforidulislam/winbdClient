import { FcSearch } from "react-icons/fc";



const GlobalTable = () => {
   
    return (
        <div className="">

         

            <div className="overflow-x-auto ">

                <table className="min-w-full  bg-[#1C2340]  mx-auto shadow-sm shadow-gray-500 rounded-md border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#272e4b]  text-white">
                            <th className="py-4 px-6 text-lg text-left boeder-1 border-b border-gray-400">Image</th>
                            <th className="py-4 px-6 text-lg text-left boeder-1 border-b border-gray-400">Name</th>
                            <th className="py-4 px-6 text-lg text-left boeder-1 border-b border-gray-400">UserId</th>
                            <th className="py-4 px-6 text-lg  text-left boeder-1 border-b border-gray-400 ">Number</th>
                            <th className="py-4 px-6 text-lg border-b border-gray-400 text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-500 border-b border-gray-500 transition duration-300">
                            <td className="py-4 px-4 flex  justify-start">
                                <div className="relative group">
                                    <img className="size-[50px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                </div>                            </td>
                            <td className="py-4 text-white border-gray-500 px-6 border-b text-sm font-medium">Dual Speaker</td>
                            <td className="py-4 text-white border-gray-500 px-6 border-b text-sm font-medium">323232.23</td>
                             
                            <td className="py-4 px-6 border-b border-gray-500 text-white">
                                0188220292
                            </td>
                            <td className="py-4 px-6 border-b border-gray-500 text-white">
                                &120.2
                            </td>
                        </tr>

    {/* ------------------- 2nd data heree ------------------------- */}
                        <tr className="hover:bg-gray-500 border-gray-500 border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <div className="relative group">
                                    <img className="size-[50px] bg-slate-500 border-gray-500 object-cover rounded-full" src="https://i.ibb.co/gMx1cxd/Whats-App-Image-2023-12-31-at-20-56-29-e7659849-removebg-preview.png" alt="avatar navigate ui" />
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                    <span className="size-3 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                </div>                            </td>
                            <td className="py-4 text-white px-6 border-gray-500 border-b text-sm font-medium">Dual Speaker</td>
                            <td className="py-4  text-white border-gray-500 px-6 border-b text-sm font-medium">4545.434</td>
                            <td className="py-4 px-6 border-b border-gray-500 text-white ">
                                01922299992
                            </td>
                            <td className="py-4 border-gray-500 px-6 border-b text-white ">
                            $989.2
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>


        </div>
    );
};

export default GlobalTable;