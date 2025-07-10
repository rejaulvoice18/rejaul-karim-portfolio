// Hero.js
import React from 'react';

const He = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center text-white bg-gradient-to-r from-purple-800 to-blue-800">
            <h1 className="text-4xl font-semibold">Frontend Developer & UI Designer</h1>
            <p className="my-4 max-w-2xl mx-auto">
                I create stunning, interactive web experiences that blend beautiful design with cutting-edge technology. 
                Specialized in React, TypeScript, and modern frontend frameworks.
            </p>
            <div className="my-6">
                <span className="text-2xl">50+ Projects</span>
                <span className="text-2xl mx-4">5+ Years Experience</span>
                <span className="text-2xl">100+ Happy Clients</span>
            </div>
            <div className="action-buttons">
                <a href="#work" className="btn btn-secondary mx-2">View My Work</a>
                <a href="#contact" className="btn btn-outline mx-2">Get In Touch</a>
            </div>
            <div className="mt-10">
                <p>Scroll to explore</p>
                <div className="arrow-down"></div>
            </div>
        </section>
    );
};

export default He;
