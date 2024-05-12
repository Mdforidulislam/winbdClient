import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PrivetRouter = ({ children }) => {

    const rediection = useNavigate()
    const usersRole = 'subAdmin';
    useEffect(() => {
    
        if (!usersRole) {
            rediection('/login')
        } else {
            switch (usersRole) {
                case 'admin':
                    rediection('/dashboard/admin');
                    break;
                case 'subAdmin':
                    rediection('/dashboard/subAdmin');
                    break;
                case 'user':
                    rediection('/profile/user');
                    break;
                default:
                    rediection('/login')
                    break;
            }
        }
    }, [rediection, usersRole])
    
    if (usersRole === 'user' || usersRole === 'admin' || usersRole === 'subAdmin') {
        return children;
    }
    
};

export default PrivetRouter;