import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({ children }) => {

    const userLocation = useLocation()
   
    const usersRole = 'user';

    if (!usersRole) {
        return <div>loadin...</div>
    }

    // =================================== start the router validation ==========================
    if (usersRole === 'user') {
        if (userLocation.pathname === '/profile/user') {
            return children;
        } else {
            return <Navigate to="/login" replace={true} />
        }
    } else if (usersRole === 'subAdmin') {
        if (userLocation.pathname === '/dashboard/subAdmin') {
            return children;
        } else if (userLocation.pathname === '/dashboard/notification') {
            return children;
        } else if (userLocation.pathname === '/dashboard/transtionReq') {
            return children;
        } else if (userLocation.pathname === '/dashboard/addNumber') {
            return children;
        } else if (userLocation.pathname === '/dashboard/addtranstion') {
            return children;
        } else if (userLocation.pathname === '/dashboard/allUsers') {
            return children;
        }
        else {
            return <Navigate to="/login" replace={true} />
        }

    } else if (usersRole === 'admin') {
        if (userLocation.pathname === '/dashboard/admin') {
            return children;
        } else {
            return <Navigate to="/login" replace={true} />
        }
    }

};

export default PrivetRouter;