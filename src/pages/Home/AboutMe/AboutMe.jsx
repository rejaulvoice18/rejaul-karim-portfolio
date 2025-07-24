import React from 'react';
import { FaDatabase, FaFigma, FaNodeJs, FaReact, FaWordpressSimple } from 'react-icons/fa';
import { HiMiniCodeBracket } from 'react-icons/hi2';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandJavascript, TbBrandNextjs, TbBrandTypescript, TbWorldWww } from 'react-icons/tb';
import SectionTitle from '../../../components/SectionTitle';
import ThemeToggle from '../../../components/ThemeToggle';

const AboutMe = () => {
    return (
        <section className='pt-20 bg-gray-800/50 dark:bg-black'>
            <div className='max-w-screen-xl mx-auto space-y-10 px-3'>
                <ThemeToggle />
               <SectionTitle
                    heading={"About Me"}
                    body={"Enthusiastic front-end developer with a strong design sense and a passion for crafting outstanding user experiences."}
               />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-bold text-white'>Hi, I'm Rejaul Karim</h2>
                        <p className='text-gray-400 text-[13px]'>I bring over 4 years of front-end development experience,
                            focusing on building modern, responsive web applications
                            that are not only visually impressive but also provide outstanding
                            user experiences. My journey began with a simple curiosity about
                            how websites function, which has since grown into a passion for
                            crafting impactful digital solutions.</p>
                        <p className='text-gray-400 text-[13px]'>
                            I prioritize writing clean, maintainable code and continuously
                            keep up with the latest technologies and industry best practices.
                            Beyond coding, I enjoy exploring new design trends, contributing
                            to open-source projects, and sharing knowledge within the developer
                            community.
                        </p>
                        <div className='flex gap-2 flex-wrap'>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>TypeScript</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>JavaScript</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>React</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Next.js</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Tailwind CSS</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>GraphQL</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Git</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>WordPress</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Figma</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Web Performance</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>API Integration</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Responsive Design</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Firebase</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>C</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>SQL</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>MySQL</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Node.js</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Express.js</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>MongoDB</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>PHP</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Cross-Browser Compatibility</button>
                            <button className='btn h-[25px] btn-outline text-[10px] bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>Framer Motion</button>
                        </div>
                    </div>
                    {/* Technical Skills */}
                    <div className='space-y-0.5'>
                        <h2 className='text-xl font-bold text-white mb-5'>Technical Skills</h2>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sky-600'><FaReact /></span>
                                    <p className='text-[15px] text-white'>React</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>95%</p>
                            </div>
                            <progress className="progress progress-info w-full" value="95" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-yellow-500'><TbBrandJavascript /></span>
                                    <p className='text-[15px] text-white'>JavaScript</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>90%</p>
                            </div>
                            <progress className="progress progress-warning w-full" value="90" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sky-600'><TbBrandTypescript /></span>
                                    <p className='text-[15px] text-white'>TypeScript</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>90%</p>
                            </div>
                            <progress className="progress my-progress w-full" value="90" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-black'><TbBrandNextjs /></span>
                                    <p className='text-[15px] text-white'>Next.js</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>85%</p>
                            </div>
                            <progress className="progress progress-neutral w-full" value="95" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaNodeJs /></span>
                                    <p className='text-[15px] text-white'>Node.js</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>83%</p>
                            </div>
                            <progress className="progress progress-success w-full" value="83" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sky-400'><RiTailwindCssFill /></span>
                                    <p className='text-[15px] text-white'>Tailwind CSS</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>93%</p>
                            </div>
                            <progress className="progress progress-info w-full" value="93" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-pink-700'><FaFigma /></span>
                                    <p className='text-[15px] text-white'>Figma</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>80%</p>
                            </div>
                            <progress className="progress progress-error w-full" value="80" max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between w-full'>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sky-700'><FaWordpressSimple /></span>
                                    <p className='text-[15px] text-white'>Wordpress</p>
                                </div>
                                <p className='text-gray-400 text-[15px]'>86%</p>
                            </div>
                            <progress className="progress my-progress-w w-full" value="86" max="100"></progress>
                        </div>
                    </div>
                </div>
                {/* Task I can performe */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-14'>
                    <div className='space-y-3 p-5 bg-black/30 rounded-2xl'>
                        <span className='inline-block text-sky-500'><HiMiniCodeBracket size={35} /></span>
                        <h3 className='text-white font-bold'>Front-end Development</h3>
                        <p className='text-gray-400 text-[14px]'>Building modern, responsive web applications powered by up-to-date frameworks and tools.</p>
                    </div>
                    <div className='space-y-3 p-5 bg-black/30 rounded-2xl'>
                        <span className='inline-block text-purple-600'><FaDatabase size={35} /></span>
                        <h3 className='text-white font-bold'>Full-Stack Development</h3>
                        <p className='text-gray-400 text-[14px]'>Managing the full web development lifecycle—from database design to production and upkeep.</p>
                    </div>
                    <div className='space-y-3 p-5 bg-black/30 rounded-2xl'>
                        <span className='inline-block text-yellow-600'><MdOutlineIntegrationInstructions size={35} /></span>
                        <h3 className='text-white font-bold'>API Integration</h3>
                        <p className='text-gray-400 text-[14px]'>Embedding external APIs and services to boost the application's functionality.</p>
                    </div>
                    <div className='space-y-3 p-5 bg-black/30 rounded-2xl'>
                        <span className='inline-block text-green-600'><TbWorldWww size={35} /></span>
                        <h3 className='text-white font-bold'>Web Performance</h3>
                        <p className='text-gray-400 text-[14px]'>Ensuring web applications run efficiently, are accessible to all users, and rank well in search engines.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;