import { HiOutlinePhone } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
const DepositNumber = ({open,open2,setOpen,title,number}) => {
    const handleRemove = () =>{
        setOpen(false)
    }
    return (
        <div 
        onClick={handleRemove}
        className="top-0 left-0 fixed w-full min-h-screen bg-[#26262641] cursor-pointer">
            <div 
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center mt-60">
                 <div className="bg-[#fff] w-2/6 flex items-center justify-center flex-col py-4 rounded relative">
                      <p className="px-2 py-2 border rounded-full"><HiOutlinePhone /></p>
                      <h2 className="font-bold uppercase py-1">{open}</h2>
                      <p className="font-medium">{open}</p>
                      <p 
                      onClick={handleRemove}
                      className="top-0 right-0 absolute px-2 py-2 bg-[red] text-[#fff] cursor-pointer"><HiMiniXMark /></p>
                 </div>
            </div>
        </div>
    );
};

export default DepositNumber;