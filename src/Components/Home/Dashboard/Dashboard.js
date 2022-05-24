import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-center text-gray-700'>Welcome To your Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dashboard/myReview'>Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;