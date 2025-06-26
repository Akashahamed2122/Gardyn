import React from 'react';
import { Outlet } from 'react-router';
import Dashboard from './DashBord';

const MainDashbord = () => {
    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    );
};

export default MainDashbord;