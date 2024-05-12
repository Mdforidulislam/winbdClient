import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to login page
        navigate('/login');
    }, [navigate]);

    return (
        <div>  
            <Outlet/>
            {/* Render your layout content here */}
        </div>
    );
};

export default MainLayout;