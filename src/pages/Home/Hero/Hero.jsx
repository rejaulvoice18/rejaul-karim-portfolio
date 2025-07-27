import React, { useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { HiMiniCodeBracket } from 'react-icons/hi2';
import { ImHappy } from 'react-icons/im';
import { PiHandWaving } from 'react-icons/pi';
import { TbBrain } from 'react-icons/tb';
import Photo from '../../../components/Photo';
import { useLocation } from 'react-router-dom';
import HomeDescription from '../../../components/HomeDescription';

const Hero = () => {
    const location = useLocation();

    useEffect(() => {
        const scrollTarget = location.state?.scrollTo;

        if (scrollTarget) {
            const el = document.getElementById(scrollTarget);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }

    }, [location])
    return (
        <div id='home' className='dark:bg-black/90 bg-[#fff0fb]'>
            <section className='pt-20 md:pt-0 max-w-screen-xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center h-screen'>
                    <div className='flex flex-col justify-items-center items-center md:items-start mx-auto text-center md:text-start space-y-4 md:space-y-8'>
                        <div className='flex items-center gap-1 py-3 px-5 bg-purple-300/20 dark:bg-black/30 rounded-lg'>
                            <span className='text-yellow-600'><PiHandWaving size={22}></PiHandWaving></span>
                            <h6 className='dark:text-white '>
                                Hi, I'm Rejaul Karim
                            </h6>
                        </div>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl dark:text-white font-bold'>Front-end Developer</h1>
                        {/* <p className='text-gray-400 w-5/6 md:w-5/6'>I build interactive, visually polished web experiences using React, JavaScript,
                            TypeScript, and modern frontend frameworks — blending clean design with efficient
                            code to deliver fast, user-friendly interfaces.</p> */}
                            <div className='w-full h-[170px] md:h-[160px] relative'>
                                <div className='absolute top-0 left-0 w-full h-full'>
                                    <HomeDescription />
                                </div>
                            </div>
                        <div className='flex flex-wrap justify-center md:justify-start md:items-start items-center gap-3 md:gap-8 px-2 md:px-0'>
                            <div className='flex gap-2 items-center'>
                                <span className='text-green-500'><HiMiniCodeBracket size={22} /></span>
                                <p className='dark:text-white text-[14px]'>40+ Projects</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-purple-800'><TbBrain size={25} /></span>
                                <p className='dark:text-white text-[14px]'>4+ Years Experience</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-yellow-400'><ImHappy size={22} /></span>
                                <p className='dark:text-white text-[14px]'>120+ Happy Clients</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <button className='btn bg-gradient-to-r from-pink-600 to-purple-700 text-white w-full sm:w-auto py-6'><a href="#project">View My Projects</a></button>
                            <button className='btn btn-outline text-white bg-gray-700 border-gray-500 w-full sm:w-auto py-6'><a href="#contact">Get In Touch</a></button>
                        </div>
                    </div>
                    <div className='h-full w-full flex items-center justify-center'>
                        <Photo />
                    </div>
                </div>
                <div className='-mt-28 pb-16 text-sm space-y-4 dark:text-gray-400 flex-col justify-items-center'>
                    <p>Scroll to explore</p>
                    <div className="relative h-16">
                        <FaArrowDown className="text-pink-700 absolute left-1/2 -translate-x-1/2 animate-bounce scale-125" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;