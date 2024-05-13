import { Pagination } from "./Pagination";

const GlobalTransition = () => {
    return (
        <div className="">

            <div className="overflow-x-auto ml-12 ">
                <table className="w-[1200px]  text-white shadow-md border-gray-500 ">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-3 px-6 text-left border-b border-gray-600">Name</th>
                            <th className="py-3 px-6 text-left border-b border-gray-600">UserId</th>
                            <th className="py-3 px-6 text-left border-b border-gray-600">Phone</th>
                            <th className="py-3 text-left border-b  border-gray-600">Transition Id</th>
                            <th className="py-3 text-left border-b  border-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b border-gray-600">Shiyam</td>
                            <td className="py-4 px-6 border-b border-gray-600">2.3</td>
                            <td className="py-4 px-6 border-b border-gray-600">01882239828</td>
                            <td className="py-4 px-6 border-b border-gray-600 ">323.42</td>
                            <td className="py-4 px-6 border-b border-gray-600 "></td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b border-gray-600">Arif</td>
                            <td className="py-4 px-6 border-b border-gray-600">1.7</td>
                            <td className="py-4 px-6 border-b border-gray-600">01882239828</td>
                            <td className="py-4 px-6 border-b border-gray-600 ">4342.23</td>
                            <td className="py-4 px-6 border-b border-gray-600 "></td>
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

export default GlobalTransition;
