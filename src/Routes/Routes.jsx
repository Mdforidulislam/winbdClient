
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import LogIn from "../Pages/Log-In/LogIn";
import Register from "../Pages/Register/Register";
import AdminDashboard from './../DashBoard/AdminDashBoard/AdminDashBoard';
import AdminHome from './../Components/AdminDash/AdminHome/AdminHome';
import ListofSubadmin from "../DashBoard/Sub-Admindashboard/ListofSubadmin";
import AllUser from "../DashBoard/Sub-Admindashboard/AllUser";
import SubadminHome from "../DashBoard/Sub-Admindashboard/SubadminHome";
import Subnotifications from "../DashBoard/Sub-Admindashboard/Subnotifications";
import TransitionReq from "../DashBoard/Sub-Admindashboard/TransitionReq";
import AddTransition from "../DashBoard/Sub-Admindashboard/AddTransition";
import Usermanagment from "../DashBoard/Sub-Admindashboard/Usermanagment";
import UsersOutLet from "../DashBoard/UsersDashBoard/Users";
import UserHome from "../DashBoard/UsersDashBoard/UsersPages/Home";



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
//    --------------------- Subadmin dashboard  routes    ------------------------
            {
                path:'/dashboard/subAdmin',
                element:<SubadminHome/>
            },
            {
                path: "/dashboard/AllsubAdmin",
                element:<ListofSubadmin/>
            },
            {
                path: "/dashboard/notification",
                element:<Subnotifications/>
            },
            {
                path: "/dashboard/transtionReq",
                element:<TransitionReq/>
            },
            {
                path:'/dashboard/addtranstion',
                element:<AddTransition/>
            },
            {
                path:'/dashboard/userManagment',
                element:<Usermanagment/>
            }
        ]
    },

    {
        path: '/profile',
        element: <UsersOutLet />,
        children: [
            {
                path: '/profile/user',
                element: <UserHome/>
           }
       ]
    }
]);

