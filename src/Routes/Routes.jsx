
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

    {
        path: "/adminDashboard",
        element: <AdminDashboard />,
        children: [
            {
                path: "/adminDashboard/MyDashboard",
                element: <AdminHome />,
            },
//    --------------------- Subadmin dashboard  routes    ------------------------
            {
                path:'/adminDashboard/subadminHome',
                element:<SubadminHome/>
            },
            {
                path: "/adminDashboard/AllsubAdmin",
                element:<ListofSubadmin/>
            },
            {
                path: "/adminDashboard/subadminNotifiaction",
                element:<Subnotifications/>
            },
            {
                path: "/adminDashboard/transtionReq",
                element:<TransitionReq/>
            },
            {
                path:'/adminDashboard/addtranstion',
                element:<AddTransition/>
            },
            {
                path:'/adminDashboard/userManagment',
                element:<Usermanagment/>
            }
           
        ]
    }
]);

