import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const AdminDashboard = () => {
    return (
        <div className="relative w-full h-[400px] ">
            <div className=" flex justify-center items-center  ">


                <div className="w-1/4 min-h-screen p-5 bg-black text-white border-r-2  ">
                    <div className="text-center text-3xl font-bold mb-12">
                        <h1>Logo</h1>

                    </div>




                    <ul className=" menu space-y-4   ">


                        <li className=" ">
                            <NavLink to={'/adminDashboard/MyDashboard'}>
                                <div className="flex gap-2 justify-center items-center font-bold ">
                                    <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                                    <h1> DashBoard </h1>
                                </div>
                            </NavLink>
                        </li>

                        <hr />

                        <li className=" ">
                            <NavLink to={'/'}>
                                <div className="flex gap-2 justify-center items-center font-bold ">

                                    <h1>Home</h1>
                                </div>
                            </NavLink>
                        </li>
                        <li className=" ">
                            <NavLink to={'/'}>
                                <div className="flex gap-2 justify-center items-center font-bold ">
                                    <h1>Contact</h1>
                                </div>
                            </NavLink>
                        </li>

                    </ul>

                </div>
                <div className="w-3/4 ">
                    <Outlet></Outlet>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;