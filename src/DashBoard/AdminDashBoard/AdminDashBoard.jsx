import { Outlet } from "react-router-dom";
import DashNav from "../../Components/Shared/DashNav/DashNav";

const AdminDashboard = () => {
    return (
        <div className="relative w-full md:h-[400px] ">
            <div className=" md:flex justify-center items-center  ">


                <DashNav />
                <div className="w-full md:w-3/4 ">
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;