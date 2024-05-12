import { FaDeleteLeft, FaTrash } from "react-icons/fa6";


const NotificationHandle = () => {
    return (
        <div className="grid lg:grid-cols-3 md:gird-cols-2 mt-12  grid-cols-1 items-center justify-center">
            <div className="border-r border-l shadow-md shadow-gray-700 mx-auto   w-[350px] rounded-md h-[180px] bg-[#1C2340]">
                <h1 className="text-white text-xl text-center uppercase py-1">Our Offer Prize</h1>
                <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur  Nobis, eaque similique! Unde a pariatur necessitatibus ipsa porro eaque!</p>
              <div className="flex justify-end px-5 pt-5">
                    <FaTrash className="text-red-500 text-xl cursor-pointer" />
              </div>
            </div>
        <div className="border-r border-l shadow-md shadow-gray-700  mx-auto  w-[350px] rounded-md h-[180px] bg-[#1C2340]">
                <h1 className="text-white text-xl text-center uppercase py-1">Our Offer Prize</h1>
                <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur  Nobis, eaque similique! Unde a pariatur necessitatibus ipsa porro eaque!</p>
              <div className="flex justify-end px-5 pt-5">
                    <FaTrash className="text-red-500 text-xl cursor-pointer" />
              </div>
            </div>
        <div className="border-r border-l shadow-md shadow-gray-700  mx-auto  w-[350px] rounded-md h-[180px] bg-[#1C2340]">
                <h1 className="text-white text-xl text-center uppercase py-1">Our Offer Prize</h1>
                <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur  Nobis, eaque similique! Unde a pariatur necessitatibus ipsa porro eaque!</p>
              <div className="flex justify-end px-5 pt-5">
                    <FaTrash className="text-red-500 text-xl cursor-pointer" />
              </div>
            </div>
          
        </div>
    );
};

export default NotificationHandle;