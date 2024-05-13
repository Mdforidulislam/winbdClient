import userPhoto from '../../../assets/img/mamon.jpg'
import { IoIosArrowBack } from "react-icons/io";

const UserNavBar = () => {
    return (
        <div className="xl:px-24 lg:px-20 md:px-18 sm:px-14 px-12 py-2 bg-[#0E735C]">
            <div className='flex items-center justify-between text-[#fff]'>
                <p className='text-2xl font-bold cursor-pointer'><IoIosArrowBack /></p>
                <h2 className='font-medium'>Al Mamon</h2>
                <img className='w-10 h-10 rounded-full border' src={userPhoto} alt="" />
            </div>
        </div>
    );
};

export default UserNavBar;