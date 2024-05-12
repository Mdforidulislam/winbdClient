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
import PrivetRouter from "../MainLayOut/PrivetRouter/PrivetRouter";

import AddtransitionCard from "../DashBoard/Sub-Admindashboard/AddTransation/AddtransitionCard";
import AllUsers from "../DashBoard/Sub-Admindashboard/UsersManagment/AllUsers";
import AdminHome from "../Components/AdminDash/AdminHome/AdminHome";


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
        element: <PrivetRouter><AdminDashboard /></PrivetRouter>,  
        children: [

            // main admin dashboard router================================
            {
                path: "/dashboard/admin",
                element: <PrivetRouter><AdminHome /></PrivetRouter>,
            },
            //    --------------------- Subadmin dashboard  routes    ------------------------
            {
                path:'/dashboard/subAdmin',
                element:<PrivetRouter><SubadminHome/></PrivetRouter>,
            },
            {
                path: "/dashboard/notification",
                element:<PrivetRouter><Subnotifications/></PrivetRouter>
               
            },
            {
                path: "/dashboard/transtionReq",
                element:<TransitionReq/>
            },
            {
                path: "/dashboard/addNumber",
                element:<AddtransitionCard/>
            },
            {
                path:'/dashboard/addtranstion',
                element:<PrivetRouter><AddTransition/></PrivetRouter>
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
                element: <PrivetRouter><UserHome/></PrivetRouter>
           }
        ]
    }
]);

