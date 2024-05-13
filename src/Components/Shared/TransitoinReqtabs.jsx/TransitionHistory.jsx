import { Pagination } from "../Pagination";


const TransitionHistory = () => {
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="w-[1200px] shadow-md  text-white   mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-3 px-6 text-left border-gray-500 border-b">Type</th>
                            <th className="py-3 px-6 text-left border-gray-500 border-b">Amount</th>
                            <th className="py-3 px-6 text-left border-gray-500 border-b">Status</th>
                            <th className="py-3 px-6  border-b border-gray-500 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-800 transition duration-300">
                            <td className="py-4 px-6">Shiyam </td>
                            <td className="py-4 pl-12">19</td>
                            <td className="py-4 px-6">Male</td>
                            <td className="py-4 px-6 ">12/2/24</td>
                        </tr>
                        <tr className="hover:bg-gray-800 transition duration-300">
                            <td className="py-4 px-6">Arif</td>
                            <td className="py-4 pl-12">17</td>
                            <td className="py-4 px-6">Male</td>
                            <td className="py-4 px-6 ">3/4/24</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    );
};

export default TransitionHistory;