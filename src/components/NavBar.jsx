import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Experience</Link></li>
        <li><Link>Projects</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50">
                {/* This wraps and centers the navbar content */}
                <div className="navbar max-w-screen-xl mx-auto w-full px-4 bg-black/20 backdrop-blur-md text-white shadow-md" style={{ borderRadius: '0 0 10px 10px' }}>
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl">Rejaul Karim</a>
                    </div>
                    <div className="navbar-end">
                        <div className="hidden md:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navOptions}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navOptions}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NavBar;