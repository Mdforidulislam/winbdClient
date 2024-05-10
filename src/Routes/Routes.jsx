
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
                path: "/adminDashboard/Alluser",
                element: <AllUser/>,
            },
        ]
    }
]);

