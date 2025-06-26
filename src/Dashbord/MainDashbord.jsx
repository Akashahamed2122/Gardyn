import React from 'react';
import { Outlet } from 'react-router';

const MainDashbord = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainDashbord;