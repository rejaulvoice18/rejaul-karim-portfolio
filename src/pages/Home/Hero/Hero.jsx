import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { HiMiniCodeBracket } from 'react-icons/hi2';
import { ImHappy } from 'react-icons/im';
import { PiHandWaving } from 'react-icons/pi';
import { TbBrain } from 'react-icons/tb';

const Hero = () => {
    return (
        <div className='bg-black/20 min-h-screen'>
            <section className='max-w-5xl mx-auto min-h-screen flex items-center justify-center px-4'>
                <div className='flex-col justify-items-center items-center mx-auto text-center space-y-8'>
                    <div className='flex items-center gap-1 py-3 px-5 bg-black/30 rounded-lg'>
                        <span className='text-yellow-600'><PiHandWaving size={22}></PiHandWaving></span>
                        <h6 className=' text-white '>
                            Hi, I'm Rejaul Karim
                        </h6>
                    </div>
                    <h1 className='text-4xl md:text-6xl text-white font-bold'>Front-end Developer</h1>
                    <p className='text-gray-400 w-5/6 md:w-2/5'>I build interactive, visually polished web experiences using React,
                        TypeScript, and modern frontend frameworks — blending clean design with efficient
                        code to deliver fast, user-friendly interfaces.</p>
                    <div className='flex flex-wrap justify-center items-center gap-3 md:gap-8 px-2 md:px-0'>
                        <div className='flex gap-2 items-center'>
                            <span className='text-green-500'><HiMiniCodeBracket size={22} /></span>
                            <p className='text-white text-[14px]'>40+ Projects</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-purple-800'><TbBrain size={25} /></span>
                            <p className='text-white text-[14px]'>4+ Years Experience</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-yellow-400'><ImHappy size={22} /></span>
                            <p className='text-white text-[14px]'>120+ Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto'>
                        <button className='btn bg-gradient-to-r from-pink-500 to-purple-500 text-white w-full sm:w-auto py-6'>View My Projects</button>
                        <button className='btn btn-outline text-white bg-gray-700 border-gray-500 w-full sm:w-auto py-6'>Get In Touch</button>
                    </div>
                    <div className='text-sm space-y-4 text-gray-400 flex-col justify-items-center'>
                        <p>Scroll to explore</p>
                        <FaArrowDown />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;