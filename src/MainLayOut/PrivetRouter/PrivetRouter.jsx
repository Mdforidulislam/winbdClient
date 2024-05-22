import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Authentication/Authentication";

const PrivetRouter = ({ children }) => {
    const { role} = useContext(AuthContext)
    const userLocation = useLocation()
   
    console.log(role, 'form privet rounter');
    

    if (!role || role === 'undefine' || role === undefined) {
       return  <Navigate to="/login" replace={true} />
    }
    // =================================== start the router validation ==========================
    if (role === 'user') {
    if (userLocation.pathname === '/profile/user') {
            return children;
    } else if (userLocation.pathname === '/profile/confirmpay') {
            return children;
    }
        else {
            return <Navigate to="/login" replace={true} />
    }

    //  retur isTrue the admin or subadmin and users , role is true as time return the admin panel  so return request page 
    } else if (role === 'subAdmin') {
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
        } else if (userLocation.pathname === '/dashboard/refer') {
            return children;
        }
        else {
            return <Navigate to="/login" replace={true} />
        }

    } else if (role === 'admin') {
        if (userLocation.pathname === '/dashboard/admin') {
            return children;
        } else if
            (userLocation.pathname === '/dashboard/addSubAdmin') {
            return children;
        } else if (userLocation.pathname === '/dashboard/instructionPay/') {
            return children;
        }

        else {
            return <Navigate to="/login" replace={true} />
        }
    }

};

export default PrivetRouter;