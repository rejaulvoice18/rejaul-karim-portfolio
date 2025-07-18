import React from 'react';
import etutor from '../../src/assets/etutor.png'
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlinePreview } from 'react-icons/md';

const ProjectCard = () => {
    return (
        <div>
            <div className='space-y-3 shadow-2xl shadow-black rounded-xl cursor-pointer'>
                <div className='relative overflow-hidden'>
                    <img 
                    className='transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover rounded-t-xl' 
                    src={etutor} 
                    alt="" />
                    <div className='absolute bottom-0 space-y-2 bg-black/60 p-2'>
                        <h5 className='text-white font-bold text-[12px]'>Online Language School</h5>
                        <p className='text-white text-[10px]'>This weather dashboard provides comprehensive weather information with location-based forecasts,
                            interactive weather maps, severe weather alerts.
                        </p>
                    </div>
                </div>
                {/* buttons, web link and git link */}
                <div className='space-y-3 p-3'>
                    <div className='flex gap-2'>
                        <button className='btn h-[20px] px-2 btn-outline text-[9px] bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                            React.js
                        </button>
                        <button className='btn h-[20px] px-2 text-[9px] btn-outline text-xs bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                            JavaScript
                        </button>
                        <button className='btn h-[20px] px-2 text-[9px] btn-outline text-xs bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                            Tailwind CSS
                        </button>
                        <button className='btn h-[20px] px-2 text-[9px] btn-outline text-xs bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                            Node.js
                        </button>
                        <button className='btn h-[20px] px-2 text-[9px] btn-outline text-xs bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                            Express.js
                        </button>
                    </div>
                    <div className='flex gap-3 cursor-pointer'>
                        <div className='flex gap-1 items-center text-xs text-gray-400'><IoLogoGithub /><p>Git-Client</p></div>
                        <div className='flex gap-1 items-center text-xs text-gray-400'><IoLogoGithub /><p>Git-Server</p></div>
                        <div className='flex gap-1 items-center text-xs text-gray-400'><MdOutlinePreview /><p>Web</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;