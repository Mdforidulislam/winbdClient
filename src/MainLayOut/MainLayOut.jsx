import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {

      
    }, [navigate,location]);

    return (
        <div>
            <Outlet />
            {/* Render your layout content here */}
        </div>
    );
};

export default MainLayout;