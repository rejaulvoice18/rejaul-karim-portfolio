import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Main = () => {
    return (
        <div className=''>
            <NavBar />
        
            <Outlet />
        </div>
    );
};

export default Main;