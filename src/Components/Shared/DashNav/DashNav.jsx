import { NavLink } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import scrollToTop from "./ScrollToTop";
import MenuClose from "../../SvgIcons/MenuClose";
import MenuOpen from "../../SvgIcons/MenuOpen";
import { useState } from "react";

const DashNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full md:w-1/4 md:min-h-screen p-5 bg-[#1C2340] text-white border-r-2  ">
            <div className="z-50 py-5 w-full md:w-auto flex justify-between">
                <NavLink
                    className="flex gap-2.5 items-center"
                    onClick={scrollToTop}
                    to="/"
                >
                    <h3
                        onClick={scrollToTop}
                        className="text-2xl md:text-3xl text-white font-semibold cursor-pointer"
                    >
                        Logo
                    </h3>
                </NavLink>

                <div className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <MenuClose /> : <MenuOpen />}
                </div>
            </div>

            <hr className="mb-5 hidden md:flex" />



            <h1 className="font-medium hidden md:flex">Menu</h1>


            <ul className=" hidden md:flex flex-col menu space-y-5    ">


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

                <hr className="" />

                <li className=" ">
                    <NavLink to={'/'} onClick={scrollToTop}>
                        <div className="flex gap-2 justify-center items-center font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">

                            <h1>Home</h1>
                        </div>
                    </NavLink>
                </li>


            </ul>

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
