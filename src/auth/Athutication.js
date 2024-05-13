
import { useNavigate } from "react-router-dom";


const Athutication = (userRole) => {
    const rediection = useNavigate()
    const usersRole = userRole;
    console.log(usersRole,'check the user role');

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
};

export default Athutication;