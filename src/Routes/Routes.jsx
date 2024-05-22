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
import UsersOutLet from "../DashBoard/UsersDashBoard/UsersLayout";
import UserHome from "../DashBoard/UsersDashBoard/UsersPages/Home";
import PrivetRouter from "../MainLayOut/PrivetRouter/PrivetRouter";

import AllUsers from "../DashBoard/Sub-Admindashboard/UsersManagment/AllUsers";
import AddNumber from "../DashBoard/Sub-Admindashboard/AddTransation/AddNumber";
import AdminHome from './../DashBoard/AdminDashBoard/AdminHome/AdminHome';
import AllSubAdmin from "../DashBoard/AdminDashBoard/AllSubAdmin/AllSubAdmin";
import ConfirmPay from "../DashBoard/UsersDashBoard/UsersPages/ConfirmPay";
import ReferralRegistrationPage from "../DashBoard/Sub-Admindashboard/RefferLink/ReferLink";
import PaymentInstraction from "../DashBoard/AdminDashBoard/PaymentInstaction/PaymentInstraction";


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
            {
                path: "/dashboard/addSubAdmin/",
                element: <PrivetRouter><AllSubAdmin /></PrivetRouter>,
            },
            {
                path: '/dashboard/instructionPay/',
                element: <PrivetRouter><PaymentInstraction/></PrivetRouter>
            },
            //    --------------------- Subadmin dashboard  routes    ------------------------
            {
                path: '/dashboard/subAdmin/',
                element: <PrivetRouter ><SubadminHome /></PrivetRouter>,
            },
            {
                path: "/dashboard/notification",
                element: <PrivetRouter><Subnotifications /></PrivetRouter>

            },
            {
                path: "/dashboard/transtionReq",
                element: <PrivetRouter><TransitionReq /></PrivetRouter>
            },
            {
                path: '/dashboard/addNumber',
                element: <PrivetRouter><AddNumber /></PrivetRouter>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers />
            },
            {
                path: '/dashboard/refer',
                element:<PrivetRouter><ReferralRegistrationPage/></PrivetRouter>
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
                element: <PrivetRouter><UserHome /></PrivetRouter>
            },
            {
                path: '/profile/confirmpay',
                element:<PrivetRouter><ConfirmPay/></PrivetRouter>
            }
        ]
    }
]);

