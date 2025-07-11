import React from 'react';
import { FaReact } from 'react-icons/fa';

const AboutMe = () => {
    return (
        <section className='py-20 bg-gray-800/50'>
            <div className='max-w-screen-xl mx-auto space-y-10 px-3'>
                <div className='flex-col justify-center text-center w-3/6 mx-auto space-y-3'>
                    <h2 className='text-white text-2xl md:text-4xl font-bold'>About Me</h2>
                    <p className='text-gray-400 text-[14px]'>Creative front-end developer with a strong sense of design
                        and a passion for crafting engaging, user-friendly digital experiences.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-bold text-white'>Hi, I'm Rejaul Karim</h2>
                        <p className='text-gray-400 text-[14px]'>I bring over 5 years of front-end development experience,
                            focusing on building modern, responsive web applications
                            that are not only visually impressive but also provide outstanding
                            user experiences. My journey began with a simple curiosity about
                            how websites function, which has since grown into a passion for
                            crafting impactful digital solutions.</p>
                        <p className='text-gray-400 text-[14px]'>
                            I prioritize writing clean, maintainable code and continuously
                            keep up with the latest technologies and industry best practices.
                            Beyond coding, I enjoy exploring new design trends, contributing
                            to open-source projects, and sharing knowledge within the developer
                            community.
                        </p>
                        <div className='flex gap-3 flex-wrap'>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>TypeScript</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>JavaScript</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>React</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Next.js</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Tailwind CSS</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>GraphQL</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Git</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>WordPress</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Figma</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Web Performance</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>API Integration</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Responsive Design</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Firebase</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>C</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>SQL</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>MySQL</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Node.js</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Express.js</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>MongoDB</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>PHP</button>
                            <button className='btn h-[30px] btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Cross-Browser Compatibility</button>
                        </div>
                    </div>
                    {/* Technical Skills */}
                    <div className=''>
                        <h2 className='text-xl font-bold text-white mb-5'>Technicla Skills</h2>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-white text-[15px]'>95%</p>
                            </div>
                            <progress className='progress progress-success w-full value="95' max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;