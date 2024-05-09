import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const DashNav = () => {
    return (
        <div className="w-1/4 min-h-screen p-5 bg-[#1C2340] text-white border-r-2  ">
            <div className="text-center text-3xl font-bold mb-5">
                <h1>Logo</h1>

            </div>

            <hr className="mb-5" />



            <h1 className="font-medium">Menu</h1>
            <ul className=" menu space-y-5    ">


                <li className=" ">
                    <NavLink to={'/adminDashboard/MyDashboard'}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> DashBoard </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Invoice </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Message </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''}>
                        <div className="flex gap-2  font-bold  hover:bg-blue-700 py-4  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Activity </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''}>
                        <div className="flex items-center gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Notifications </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Analytics </h1>
                        </div>
                    </NavLink>
                </li>

                <hr className="" />

                <li className=" ">
                    <NavLink to={'/'}>
                        <div className="flex gap-2 justify-center items-center font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">

                            <h1>Home</h1>
                        </div>
                    </NavLink>
                </li>


            </ul>

        </div>
    );
};

export default DashNav;
