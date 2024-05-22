
import { FcSearch } from 'react-icons/fc';
import GlobalTable from '../../../Components/Shared/GlobalTable';
import { Pagination } from '../../../Components/Shared/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableListUsers from './TableList';

const AllUsers = () => {
    const [pageNumber, setPageNumbers] = useState(0); //set the page number here 
    const [searchData, setSearchData] = useState('');  // set search value 
    const [storeData, setStoerData] = useState([]); // set stoer data form database 


    const uniqueId = JSON.parse(localStorage.getItem('userData'))?.uniqueId;

    const handleActionSeachButton =async (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value ;
        setSearchData(searchValue)
    }


    useEffect(() => {
        const userDataget = async () => {
            try {
                const userSearch = await axios(`https://pay-winbd-server.vercel.app/getinguse?uniqueId=${uniqueId}&searchValue=${searchData}&pageNumber=${pageNumber}`);
                const getuserData = userSearch.data;
                console.log(getuserData);
                setStoerData(getuserData);
             } catch (error) {
                console.log(error);
            }
        }
        userDataget()
    }, [pageNumber, uniqueId , searchData])
    


    
    return (
        <div className='mt-8'>
            <div className="flex justify-end items-center ">
                <form onSubmit={handleActionSeachButton} action="">
                    <input type="text" placeholder="Search a  User" name="search" id="" className="bg-[#1C2340]   focus:outline-none text-white px-3  h-4 py-5 rounded-md " />
                    <button className='bg-gray-700 px-6 py-2 rounded-r-md text-white text-md'>Search</button>
               </form>
               
            </div>
            <TableListUsers storeData={storeData} />
            <Pagination  storeData={storeData} setPageNumbers={setPageNumbers} />
        </div>
    );
};

export default AllUsers;