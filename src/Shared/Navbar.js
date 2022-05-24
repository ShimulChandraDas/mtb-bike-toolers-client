import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');


    }
    const menuItems =
        <>
            <li><NavLink to="/">Home</NavLink ></li>
            <li><NavLink to="/ourProducts">Our Products</NavLink ></li>

            {
                user &&
                <li><NavLink to="/dashboard">Dashboard</NavLink ></li>
            }
            <li><NavLink to="/reviews">Reviews</NavLink ></li>
            <li><NavLink to="/blogs">Blogs</NavLink ></li>
            <li><NavLink to="/about">About</NavLink ></li>
            {
                user && <li><NavLink to="/profile">{user?.displayName || 'Profile'}</NavLink ></li>
            }

            <li>{
                user ? <button className="btn btn-active btn-ghost" onClick={logOut}>Sign Out</button>
                    :
                    <NavLink to="/login">Login</NavLink >}
            </li>

        </>
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">MTB-Bike Toolers</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;