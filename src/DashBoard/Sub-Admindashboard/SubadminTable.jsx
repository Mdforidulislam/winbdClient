

const SubadminTable = () => {
    return (
        <div>

            <div className="overflow-x-auto px-5">
                <table className="min-w-[100%] shadow-xl shadow-gray-800 mx-auto   my-6">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-3 px-6 text-left border-b">Image</th>
                            <th className="py-3 px-6 text-left border-b">UserID</th>
                            <th className="py-3 px-16 text-left border-b">Mail</th>
                            <th className="py-3 px-6  border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="hover:bg-gray-700 text-white transition cursor-pointer duration-300">
                            <div className="relative group ml-5 mt-4">
                                <img className="size-[50px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />

                            </div>                     
                           <td className="py-4 px-6 ">19.12</td>
                            <td className="py-4 px-6 ">xunaiet28@gmail.com</td>
                            <td className="py-4 px-6 text-end"><button className="btn py-2 px-5 bg-gray-700 rounded-md">Delete </button></td>
                        </tr>
                        <tr className="hover:bg-gray-700 text-white transition cursor-pointer duration-300">
                            <div className="relative group ml-5 mt-4">
                                <img className="size-[50px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                               
                            </div>                   
                                      <td className="py-4 px-6">17.12</td>
                            <td className="py-4 px-6">Junaite@gmail.com</td>
                            <td className="py-4 px-6 text-end"><button className="btn py-2 px-5 bg-gray-700 rounded-md"> Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SubadminTable;