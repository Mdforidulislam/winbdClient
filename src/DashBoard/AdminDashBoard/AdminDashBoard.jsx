import { Outlet } from "react-router-dom";
import DashNav from "../../Components/Shared/DashNav/DashNav";

const AdminDashboard = () => {
    return (
        <div className="relative w-full h-[400px] ">
            <div className=" flex justify-center items-center  ">


                <DashNav />
                <div className="w-3/4 ">
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;