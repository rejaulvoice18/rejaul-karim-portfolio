import React from 'react';
import { FaArrowDown } from 'react-icons/fa';


const Heo = () => {
    return (
        <div className="text-center text-white py-20 px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl font-extrabold">
                Frontend Developer & <span className="text-gray-400">UI Designer</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
                I create stunning, interactive web experiences that blend beautiful design<br />
                with cutting-edge technology. Specialized in React, TypeScript, and<br />
                modern frontend frameworks.
            </p>

            <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
                <div className="flex items-center gap-2 text-blue-300">
                    <span>💻</span> 50+ Projects
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                    <span>🎨</span> 5+ Years Experience
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                    <span>⚡</span> 100+ Happy Clients
                </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
                <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 text-white w-full sm:w-auto py-5">
                    View My Projects
                </button>
                <button className="btn btn-outline text-white border-white w-full sm:w-auto py-5">
                    Get In Touch
                </button>
            </div>
            <div className="mt-14 text-sm space-y-4 text-gray-400 flex-col justify-items-center">
                <p>Scroll to explore</p>
                <FaArrowDown />
            </div>
        </div>
    );
};

export default Heo;
