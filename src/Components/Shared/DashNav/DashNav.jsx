import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import scrollToTop from "./ScrollToTop";
import MenuClose from "../../SvgIcons/MenuClose";
import MenuOpen from "../../SvgIcons/MenuOpen";
import { useState } from "react";

const DashNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full md:w-[350px]  md:min-h-screen p-5 bg-[#1C2340] text-white   ">
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
                    <NavLink to={'/adminDashboard/MyDashboard'} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> DashBoard </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Invoice </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Message </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium  hover:bg-blue-700/40 py-2  px-3 rounded-3xl">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Activity </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex items-center gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Notifications </h1>
                        </div>
                    </NavLink>
                </li>
                <li className=" ">
                    <NavLink to={''} onClick={scrollToTop}>
                        <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                            <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                            <h1> Analytics </h1>
                        </div>
                    </NavLink>
                </li>


            </ul>
            <li className=" ">


                <NavLink to={'/'} onClick={scrollToTop}>
                    <div className=" gap-2 text-center font-bold   ">
                        <hr className="my-4 w-1/2 mx-auto" />
                        <h1 className="hover:bg-blue-700/40 py-2 rounded-3xl  px-3">Home</h1>
                    </div>
                </NavLink>
            </li>

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