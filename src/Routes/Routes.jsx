
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
    },
]);

