import React from "react";

const Nav = () => {
    return (
        <div className="navbar bg-gradient-to-r from-[#2c2f4a] via-[#23243f] to-[#2e2d4d] rounded-xl shadow-lg px-6 py-2 mx-6 mt-6">
            <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center text-white font-semibold">
                    MK
                </div>
                <span className="font-semibold text-white text-lg select-none">Khairul Haque</span>
            </div>
            <div className="flex-none hidden md:flex gap-6">
                <a href="#home" className="text-white hover:text-pink-400 transition font-medium">Home</a>
                <a href="#about" className="text-white hover:text-pink-400 transition font-medium">About</a>
                <a href="#experience" className="text-white hover:text-pink-400 transition font-medium">Experience</a>
                <a href="#projects" className="text-white hover:text-pink-400 transition font-medium">Projects</a>
                <a href="#contact" className="text-white hover:text-pink-400 transition font-medium">Contact</a>
            </div>
            <div className="flex-none flex items-center gap-3">
                <button
                    aria-label="Toggle Dark Mode"
                    className="btn btn-ghost btn-square rounded-md border border-transparent hover:border-pink-400 transition text-white"
                    onClick={() => {
                        if (document.documentElement.classList.contains("dark")) {
                            document.documentElement.classList.remove("dark");
                            localStorage.setItem("theme", "light");
                        } else {
                            document.documentElement.classList.add("dark");
                            localStorage.setItem("theme", "dark");
                        }
                    }}
                    title="Toggle Dark Mode"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                        />
                    </svg>
                </button>
                <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-none font-semibold hover:shadow-lg hover:shadow-pink-400/60 transition px-4 py-2 rounded-lg flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    CV
                </button>
            </div>
        </div>
    );
};

export default Nav;

