import SubadminTable from "./SubadminTable";


const ListofSubadmin = () => {
    return (
        <div className="-mt-[400px]">
            <h1 className="text-4xl uppercase font-bold text-center text-white">All sub Admin</h1>
           <div className="flex justify-center">
                <hr className="border-2 border-gray-300 w-[320px] mt-2" />
           </div>

        <div className="flex justify-end mt-7 px-5">
                <input type="text" name="" id="" placeholder="Search Name or user ID " className=" px-2 bg-[#1C2340] text-white hover:shadow-2xl border-2 border-gray-400 w-[350px] py-2 rounded-lg "/>
        </div>
{/* 
          Table all sub-asmin list         */}
          <SubadminTable/>
        </div>
    );
};

export default ListofSubadmin;