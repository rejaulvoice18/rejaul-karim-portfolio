import React from 'react';
import etutor from '../../src/assets/etutor.png'
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlinePreview } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ singlePro }) => {
    console.log("this is single item", singlePro)
    const { projects_name, thumbnail, web, category, git_client, git_server, details, skills } = singlePro || [];
    return (

        // Framer motion
        <motion.div
            key={projects_name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
            {/* Your ProjectCard JSX goes here */}
            <div>
                <div className='space-y-3 shadow-2xl shadow-black rounded-xl cursor-pointer'>
                    <div className='aspect-video relative overflow-hidden'>
                        <motion.img
                            className='transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover rounded-t-xl'
                            src={thumbnail}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            alt="" />
                        <div className='absolute bottom-0 space-y-2 bg-black/60 p-2'>
                            <h5 className='text-white font-bold text-[12px]'>{projects_name}</h5>
                            <p className='text-white text-[10px]'>{details.slice(0, 90)}....
                            </p>
                        </div>
                    </div>
                    {/* buttons, web link and git link */}
                    <div className='space-y-3 p-3'>
                        <div className='flex gap-2'>
                            {
                                singlePro.skills.slice(0, 4).map((skill, idx) => (
                                    <button key={idx} className='btn h-[20px] px-2 btn-outline text-[9px] bg-gray-700 rounded-md text-gray-300 border-0 hover:shadow-none'>
                                        {skill}
                                    </button>
                                ))
                            }
                        </div>
                        <div className='flex gap-3 cursor-pointer'>
                            <Link className='flex gap-1 items-center text-xs text-gray-400' to={git_client} target='_blank'><IoLogoGithub /><p>Git-Client</p></Link>
                            <Link className='flex gap-1 items-center text-xs text-gray-400' to={git_server} target='_blank'><IoLogoGithub /><p>Git-Server</p></Link>
                            <Link className='flex gap-1 items-center text-xs text-gray-400' to={web} target='_blank'><MdOutlinePreview /><p>Web</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default ProjectCard;