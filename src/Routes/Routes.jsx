
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import LogIn from "../Pages/Log-In/LogIn";
import Register from "../Pages/Register/Register";
import AdminDashboard from './../DashBoard/AdminDashBoard/AdminDashBoard';
import SubadminHome from "../DashBoard/Sub-Admindashboard/SubadminHome";
import Subnotifications from "../DashBoard/Sub-Admindashboard/Notification/Notifications";
import TransitionReq from "../DashBoard/Sub-Admindashboard/Transation/TransitionReq";
import AddTransition from "../DashBoard/Sub-Admindashboard/AddTransation/AddTransition";
import UsersOutLet from "../DashBoard/UsersDashBoard/Users";
import UserHome from "../DashBoard/UsersDashBoard/UsersPages/Home";
import AdminHome from './../DashBoard/AdminDashBoard/AdminHome/AdminHome';
import AddSubAdmin from "../DashBoard/AdminDashBoard/AddSubAmin/AddSubAdmin";
import AddtransitionCard from "../DashBoard/Sub-Admindashboard/AddTransation/AddtransitionCard";
import AllUsers from "../DashBoard/Sub-Admindashboard/UsersManagment/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            {
                path: "/logIn",
                element: <LogIn />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ]
    },

    // dashboard below 

    {
        path: "/dashboard",
        element: <AdminDashboard />,
        children: [

            // main admin dashboard router================================
            {
                path: "/dashboard/admin",
                element: <AdminHome />,
            },
            {
                path: "/dashboard/addSubAdmin",
                element: <AddSubAdmin />,
            },
            //    --------------------- Subadmin dashboard  routes    ------------------------
            {
                path: '/dashboard/subAdmin',
                element: <SubadminHome />
            },
            {
                path: "/dashboard/notification",
                element: <Subnotifications />
            },
            {
                path: "/dashboard/addNumber",
                element:<AddTransition/>
            },
            {
                path: "/dashboard/TransitionRequest",
                element:<TransitionReq/>
            },
          
            {
                path:'/dashboard/allUsers',
                element:<AllUsers/>
            }
            // -------------------------------- all the end sub admin router =======================
        ]
    },

    {
        path: '/profile',
        element: <UsersOutLet />,
        children: [
            {
                path: '/profile/user',
                element: <UserHome />
            }
        ]
    }
]);

