

const SubadminTable = () => {
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="min-w-[100%]  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[#1C2340] text-white">
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">UserID</th>
                            <th className="py-3 px-16 text-left border-b">Mail</th>
                            <th className="py-3 px-6  border-b text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 transition cursor-pointer duration-300">
                            <td className="py-4 px-6 border-b">Shiyam </td>
                            <td className="py-4 px-6 border-b">19.12</td>
                            <td className="py-4 px-6 border-b">xunaiet28@gmail.com</td>
                            <td className="py-4 px-6 border-b text-end"><button className="btn py-2 px-5 bg-gray-100 rounded-md">Delete </button></td>
                        </tr>
                        <tr className="hover:bg-gray-100 transition cursor-pointer duration-300">
                            <td className="py-4 px-6 border-b">Arif</td>
                            <td className="py-4 px-6 border-b">17.12</td>
                            <td className="py-4 px-6 border-b">Junaite@gmail.com</td>
                            <td className="py-4 px-6 border-b text-end"><button className="btn py-2 px-5 bg-gray-100 rounded-md"> Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SubadminTable;