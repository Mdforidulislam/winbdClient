import SubadminCard from "../../Components/Shared/CardGobal";
import SubadminChart from "../../Components/Shared/GlobalChart";
import SubadminPiechart from "../../Components/Shared/GlobalPichart";
import UsertableList from "../../Components/Shared/GlobalTable";


const SubadminHome = () => {
    return (
        <div className="px-5 max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center">
                <div>

                    <h1 className=" px-5 text-white font-bold text-2xl">Hellow Sub-Admin</h1>
                    <p className="px-5 text-white font-semibold">Welcome back</p>
                </div>
                <div className="flex justify-end px-5 gap-4">
                    <div className="flex justify-end items-center">
                        <input type="text" placeholder="Search a Transtion" name="" id="" className="bg-[#1C2340] text-white px-3 hover:border-2   w-[500px] h-4 py-5 rounded-md " />

                    </div>
                    <div className="relative group">
                        <img className="size-[40px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                        <span className="size-2 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                        <span className="size-2 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                    </div>
                </div>

          </div>
          <SubadminCard/>
     
              
               <div className="flex gap-10 mt-5 mb-10">
                <SubadminChart />
             
                <SubadminPiechart />
               </div>
            <UsertableList />
         
        </div>
    );
};

export default SubadminHome;