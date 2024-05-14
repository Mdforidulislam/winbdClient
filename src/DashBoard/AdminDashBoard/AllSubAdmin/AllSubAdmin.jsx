import GlobalTable from "../../../Components/Shared/GlobalTable";
import { GlobalModal } from './../../../Components/Shared/GlobalModal';


const AllSubAdmin = () => {
    return (
        <div className="w-full px-8 py-5">
            <div className="w-full flex justify-between items-center  ">
                <div className="w-full  ">
                    <GlobalModal />
                </div>
                <div className="w-full flex justify-end  ">
                    <input className="border-2  w-[400px] border-slate-700 text-xl font-semibold py-2  rounded-2xl text-center " type="text " placeholder="Search" />
                </div>
            </div>
            <GlobalTable />

        </div>
    );
};

export default AllSubAdmin;