import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                
            </div>
            <div>
                
                <Outlet></Outlet>
            </div>
            <div className='py-8'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;