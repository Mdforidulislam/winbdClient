import { NavLink } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import scrollToTop from "./ScrollToTop";
import MenuClose from "../../SvgIcons/MenuClose";
import MenuOpen from "../../SvgIcons/MenuOpen";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Authentication/Authentication";
import { CiLogout } from "react-icons/ci";
import { AiTwotoneProfile } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

const DashNav = () => {
  const [open, setOpen] = useState(false);
  const { role ,setRole} = useContext(AuthContext);

  const adminInfo = JSON.parse(localStorage.getItem('userData'))?.userName;
  
  const handleAction = () => {
    localStorage.removeItem('userData');
    setRole('undefine')

  }

  return (
    <div className="w-full md:w-[350px] lg:h-screen p-5 bg-[#1C2340] text-white   ">
      <div>
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
            <h1 className="text-xl">{role}: {adminInfo}</h1>
            </h3>
          </NavLink>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MenuClose /> : <MenuOpen />}
          </div>
        </div>

        <hr className="mb-5 hidden md:flex w-4/5 mx-auto" />

        {/*  all the condtion and nav item here for admin  */}
        {
          role === 'admin' ? <ul className=" hidden md:flex flex-col menu space-y-3  mb-28 ">
            <li className=" ">
              <NavLink to={"/dashboard/admin"} onClick={scrollToTop}>
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl">
                  <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                  <h1> DashBoard </h1>
                </div>
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to={"/dashboard/addSubAdmin"} onClick={scrollToTop}>
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                  <AiTwotoneProfile  className="text-2xl font-semibold" />
                  <h1> All Sub-Admin </h1>
                </div>
              </NavLink>
            </li>

            <li className=" ">
              <NavLink to={"/dashboard/instructionPay/"} onClick={scrollToTop}>
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                  <AiTwotoneProfile  className="text-2xl font-semibold" />
                  <h1> Add Instraction Payment</h1>
                </div>
              </NavLink>
            </li>

              {/*  logout system */}
              <li onClick={handleAction} className=" ">
              <NavLink >
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl items-center">
                  <CiLogout className="text-2xl font-semibold" />
                  <span className="text-2xl text-white">Logout</span>
                </div>
              </NavLink>
            </li>

          </ul> : role === 'subAdmin' ? <ul>
            {/*  all the condition and nave item here for subadmin  */}
            <li className=" ">
              <NavLink to={"/dashboard/subAdmin"} onClick={scrollToTop}>
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl ">
                  <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                  <h1>Dashboard </h1>
                </div>
              </NavLink>
            </li>

            <li className=" ">
              <NavLink to={"/dashboard/notification"} onClick={scrollToTop}>
                <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                  <MdOutlineNotificationsActive className="text-2xl" />
                  <h1 className="">Notifications</h1>
                </div>
              </NavLink>
            </li>

            <li className=" ">
              <NavLink to={"/dashboard/addNumber"} onClick={scrollToTop}>
                <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                  <MdPayment className="text-2xl" />
                  <h1 className="">Add-Number</h1>
                </div>
              </NavLink>
            </li>

            <li className=" ">
              <NavLink to={"/dashboard/transtionReq"} onClick={scrollToTop}>
                <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                  <AiOutlineTransaction className="text-2xl" />
                  <h1 className="">Transition Request</h1>
                </div>
              </NavLink>
            </li>

            <li className=" ">
              <NavLink to={"/dashboard/allUsers"} onClick={scrollToTop}>
                <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                  <FaUsers className="text-2xl" />
                  <h1 className="">All-Users</h1>
                </div>
              </NavLink>
              </li>
              {/* refer link here */}
            <li className=" ">
              <NavLink to={"/dashboard/refer"} onClick={scrollToTop}>
                <div className="flex gap-2 items-center font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl   ">
                  <BsFillShareFill className="text-2xl" />
                  <h1 className="">share reffer link</h1>
                </div>
              </NavLink>
              </li>
              {/*  logout system */}
              <li onClick={handleAction} className=" ">
              <NavLink >
                <div className="flex gap-2  font-medium hover:bg-blue-700/40 py-2  px-3 rounded-3xl items-center">
                  <CiLogout className="text-2xl font-semibold" />
                  <span className="text-2xl text-white">Logout</span>
                </div>
              </NavLink>
            </li>
          </ul> : role === 'user' ? '' : null
        }
      </div>


      {/* mobile resposive */}
      <div>
        <ul
          className={`bg-[#1C2340]  backdrop-blur-3xl md:hidden absolute w-full h-screen top-[72px] py-4 px-5 duration-500 ${open ? "left-0" : "-left-full"
            }`}
        >
          <li className=" ">
            <NavLink to={"/adminDashboard/MyDashboard"} onClick={scrollToTop}>
              <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> DashBoard </h1>
              </div>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to={""} onClick={scrollToTop}>
              <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> Invoice </h1>
              </div>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to={""} onClick={scrollToTop}>
              <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> Message </h1>
              </div>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to={""} onClick={scrollToTop}>
              <div className="flex gap-2  font-bold  hover:bg-blue-700 py-4  px-3 rounded-3xl">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> Activity </h1>
              </div>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to={""} onClick={scrollToTop}>
              <div className="flex items-center gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> Notifications </h1>
              </div>
            </NavLink>
          </li>
          <li className=" ">
            <NavLink to={""} onClick={scrollToTop}>
              <div className="flex gap-2  font-bold hover:bg-blue-700 py-4  px-3 rounded-3xl ">
                <MdOutlineDashboardCustomize className="text-2xl font-semibold" />
                <h1> Analytics </h1>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashNav;
