
import { FcSearch } from 'react-icons/fc';
import GlobalTable from '../../../Components/Shared/GlobalTable';
import { Pagination } from '../../../Components/Shared/Pagination';

const AllUsers = () => {
    return (
        <div className='mt-8'>
            <div className="flex justify-end items-center ">
                <input type="text" placeholder="Search a  User" name="" id="" className="bg-[#1C2340]   focus:outline-none text-white px-3   w-[400px] h-4 py-5 rounded-md " />
                <button className="bg-[#1C2340]  rounded-r-md py-1 "><FcSearch className="text-3xl  " /></button>
            </div>
               <GlobalTable/>
            <Pagination />
        </div>
    );
};

export default AllUsers;