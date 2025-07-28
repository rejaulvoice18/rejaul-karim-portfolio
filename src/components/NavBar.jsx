import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { FiDownload } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';




const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home'); //default to 'home'

    const mobileNavRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen])

    // nav navigation
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });

        setActiveNav(id)
        setIsOpen(false);
    }

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'project', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const navOptions = navItems.map(item => (
        <li key={item.id}>
            <button onClick={() => handleScroll(item.id)}
                className={`
                px-3 py-1 rounded font-semibold transition-all duration-300 cursor-pointer
                ${activeNav === item.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'text-black dark:text-white'}
                hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:scale-105
                `}
            >
               {item.label}
            </button>
        </li>
    ))

    return (
        <>
            {/* Main Navbar */}
            <div className="fixed top-0 left-0 w-full z-50">
                <div className="navbar max-w-screen-xl mx-auto w-full px-4 bg-white dark:bg-white/10  backdrop-blur-md text-black dark:text-white shadow-sm rounded-b-lg">
                    <div className="navbar-start">
                        <div className='flex items-center gap-1'>
                            <img className='w-7 bg-gradient-to-r from-pink-600 to-purple-700 rounded-md' src={logo} alt="logo" />
                            <h3 className='text-black dark:text-white'>Md Rejaul Karim</h3>
                        </div>
                    </div>

                    <div className="navbar-end w-[95%]">
                        <div className="hidden md:flex">
                            <ul className="menu menu-horizontal px-1 text-xs items-center h-full space-x-1">
                                {navOptions}
                                <ThemeToggle />
                                <div
                                    className='group flex items-center py-1 px-2 gap-0.5 rounded-sm bg-gradient-to-r from-purple-600 to-pink-500
                                    hover:from-pink-500 hover:to-purple-600 transition-all duration-300 ease-in-out cursor-pointer 
                                    hover:scale-105
                                '>
                                    <FiDownload
                                        className="text-white group-hover:animate-bounce transition-all duration-300"
                                    />
                                    <Link
                                        to={"/Md Rejaul Karim Front-end Developer.pdf"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center text-xs text-white font-bold">
                                        CV
                                    </Link>
                                </div>
                                
                            </ul>
                        </div>
                        {/* Hamburger Icon for Mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(true)} className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                ref={mobileNavRef}
                className={`fixed top-0 right-0 w-1/2 h-full text-black bg-gray-300 dark:bg-[#0f0f0f] dark:text-white z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6 flex flex-col h-full justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                        <div className='flex items-center gap-1'>
                            <img className='w-7 bg-gradient-to-r from-pink-600 to-purple-700 rounded-md' src={logo} alt="logo" />
                            <h3 className='text-black dark:text-white'>Md Rejaul Karim</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)}>
                            <FaTimes className="text-2xl text-red-400 cursor-pointer" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <ul className="mt-10 space-y-4 font-semibold text-xs">
                        <ThemeToggle />
                        {navOptions}
                    </ul>

                    {/* Footer */}
                    <div className="flex flex-col items-center gap-6 mt-auto">
                        <Link
                            to={"/Md Rejaul Karim Front-end Developer.pdf"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:bg-green-800 rounded text-white font-bold">HIRE ME</Link>
                        <div className="flex gap-4 text-xl">
                            <a href="https://github.com/rejaulvoice18" target='_blank' rel="noopener noreferrer"><FaGithub className="hover:text-green-500 cursor-pointer" /></a>
                            <a href="https://www.linkedin.com/in/md-rejaul-karim" target='_blank' rel="noopener noreferrer"><FaLinkedin className="hover:text-green-500 cursor-pointer" /></a>
                            <a href="https://www.facebook.com/rejaulvoice" target='_blank' rel="noopener noreferrer"><FaFacebook className="hover:text-green-500 cursor-pointer" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;






// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'

// const NavBar = () => {

//     const navOptions = <>
//         <li><Link>Home</Link></li>
//         <li><Link>About</Link></li>
//         <li><Link>Experience</Link></li>
//         <li><Link>Projects</Link></li>
//         <li><Link>Contact</Link></li>
//     </>
//     return (
//         <>
//             <div className="fixed top-0 left-0 w-full z-50">
//                 {/* This wraps and centers the navbar content */}
//                 <div className="navbar max-w-screen-xl mx-auto w-full px-4 bg-white/10 backdrop-blur-md text-white shadow-sm" style={{ borderRadius: '0 0 10px 10px' }}>
//                     <div className="navbar-start">
//                         <div className='flex items-center gap-1'>
//                             <img className='w-7 bg-gradient-to-r from-pink-600 to-purple-700 rounded-md' src={logo} alt="" /><h3 className='text-white'>Md Rejaul Karim</h3>
//                         </div>
//                     </div>
//                     <div className="navbar-end">
//                         <div className="hidden md:flex">
//                             <ul className="menu menu-horizontal px-1">
//                                 {navOptions}
//                             </ul>
//                         </div>
//                         <div className="dropdown">
//                             <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//                                 </svg>
//                             </div>
//                             <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                                 {navOptions}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// };

// export default NavBar;