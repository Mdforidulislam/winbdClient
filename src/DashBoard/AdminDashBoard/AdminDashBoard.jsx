import { Outlet } from "react-router-dom";
import DashNav from "../../Components/Shared/DashNav/DashNav";

const AdminDashboard = () => {
    return (
        <div className="relative w-full md:min-h-screen  bg-[#131932]">
            <div className=" md:flex justify-center items-center  ">


                <DashNav />
                <div className="w-full md:w-3/4  h-full ">
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;