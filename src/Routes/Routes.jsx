
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import LogIn from "../Pages/Log-In/LogIn";
import Register from "../Pages/Register/Register";
import AdminDashboard from './../DashBoard/AdminDashBoard/AdminDashBoard';
import AdminHome from './../Components/AdminDash/AdminHome/AdminHome';



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
            {
                path: "",
                element: "",
            },
            {
                path: "",
                element: "",
            },
        ]
    }
]);

