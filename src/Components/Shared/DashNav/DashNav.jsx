import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize, MdOutlineNotificationsActive } from "react-icons/md";
import scrollToTop from "./ScrollToTop";
import MenuClose from "../../SvgIcons/MenuClose";
import MenuOpen from "../../SvgIcons/MenuOpen";
import { useState } from "react";
import { TbTransferIn } from "react-icons/tb";

const DashNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full md:w-[350px] lg:h-screen p-5 bg-[#1C2340] text-white   ">
            <div className="z-50 py-5 w-full md:w-auto flex justify-between text-center">
                <NavLink
                    className="flex gap-2.5 items-center "
                    onClick={scrollToTop}
                    to="/"
                >
                    <h3
                        onClick={scrollToTop}
                        className="text-2xl md:text-3xl text-white font-semibold cursor-pointer "
                    >
                        Logo
                    </h3>
                </NavLink>

                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <MenuClose /> : <MenuOpen />}
                </div>
            </div>

            <hr className="mb-5 hidden md:flex w-1/2 mx-auto" />



            <div className="flex justify-between items-center my-10">
                <h1 className="font-medium hidden md:flex">Menu</h1>
                <h1 className="font-medium hidden md:flex">Admin</h1>

            </div>


            <ul className=" hidden md:flex flex-col menu space-y-3  mb-28 ">


                <li className=" ">
                    <NavLink to={'/dashboard/admin'} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> DashBoard </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={'/dashboard/addSubAdmin'} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Add Sub-Admin </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> All Sub-Admin </h1>
                        </div>
                    </NavLink>
                </li>
{/* 
   ----------------------  subadmin dashbaord navbar data here ---------------------- */}

                <li className=" ">
                    <NavLink to={'/dashboard/subAdmin'} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> SubAdmin-Dashboard </h1>
                        </div>
                    </NavLink>
                </li>

                
                <li className=" ">
                    <NavLink to={'/dashboard/notification'} onClick={scrollToTop}>
                        <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                            <MdOutlineNotificationsActive className="text-2xl"/>
                            <h1 className="">Notifications</h1>
                        </div>
                    </NavLink>
                </li>


                <li className=" ">
                    <NavLink to={'/dashboard/addNumber'} onClick={scrollToTop}>
                        <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                            <MdOutlineNotificationsActive className="text-2xl" />
                            <h1 className="">Add-Number</h1>
                        </div>
                    </NavLink>
                </li>

                <li className=" ">
                    <NavLink to={'/dashboard/TransitionRequest'} onClick={scrollToTop}>
                        <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                            <TbTransferIn className="text-2xl" />
                            <h1 className="">Transition Request</h1>
                        </div>
                    </NavLink>
                </li>

                <li className=" ">
                    <NavLink to={'/dashboard/allUsers'} onClick={scrollToTop}>
                        <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                            <TbTransferIn className="text-2xl" />
                            <h1 className="">All-Users</h1>
                        </div>
                    </NavLink>
                </li>




            </ul>
         

        {/* ----------------------  subadmin dashbaord navbar data end here ---------------------- */}

            {/* mobile resposive */}
            <ul
                className={`bg-[#1C2340]  backdrop-blur-3xl md:hidden absolute w-full h-screen top-[72px] py-4 px-5 duration-500 ${open ? "left-0" : "-left-full"
                    }`}
            >
                <li className=" ">
                    <NavLink to={'/adminDashboard/MyDashboard'} onClick={scrollToTop}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> DashBoard </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Invoice </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Message </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-bold  hover:bg-blue-700 py-4  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Activity </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex items-center gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Notifications </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Analytics </h1>
                        </div>
                    </NavLink>
                </li>

            </ul>

        </div>
    );
};

export default DashNav;