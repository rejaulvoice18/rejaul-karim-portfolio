import React from 'react';
import etutor from '../../src/assets/etutor.png'
import { IoLogoGithub } from 'react-icons/io';
import { MdOutlinePreview } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProjectCard = ({ singlePro }) => {
    console.log("this is single item", singlePro)
    const { projects_name, thumbnail, web, category, git_client, git_server, details, skills } = singlePro || [];
    return (
        <div>
            <div className='space-y-3 shadow-2xl shadow-black rounded-xl cursor-pointer'>
                <div className='aspect-video relative overflow-hidden'>
                    <img
                        className='transition-transform duration-300 ease-in-out transform hover:scale-110 w-full h-full object-cover rounded-t-xl'
                        src={thumbnail}
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
            {/* <div>
                    <div className="min-h-screen flex items-center justify-center bg-black">
                        <div className="relative p-10 rounded-xl w-full max-w-md bg-[#111111] text-white border border-gray-700"
                            style={{
                                boxShadow: `0 0 60px 5px rgba(255, 115, 0, 0.4), 0 0 150px 30px rgba(148, 0, 211, 0.2)`
                            }}>

                            <div className="flex justify-center mb-6">
                                <img src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png" alt="Firebase Logo" className="h-12" />
                            </div>

                            <h2 className="text-lg font-semibold text-white mb-2">Welcome to Firebase Studio,</h2>
                            <p className="text-sm text-gray-300 mb-6">
                                a complete web-based development workspace from Google, designed to make it faster and easier to build, ship, and manage full-stack, multiplatform apps from the comfort of your browser.
                            </p>

                            <div className="space-y-3">
                                <label className="flex items-start space-x-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox mt-1"
                                        checked={termsAccepted}
                                        onChange={() => setTermsAccepted(!termsAccepted)}
                                    />
                                    <span className="text-sm text-gray-300">
                                        I accept the terms and conditions for Firebase Services listed on the{' '}
                                        <a href="#" className="text-blue-400 underline">Terms of Service</a> page and the{' '}
                                        <a href="#" className="text-blue-400 underline">Android SDK Terms and Conditions</a>
                                    </span>
                                </label>

                                <label className="flex items-start space-x-2 cursor-pointer">
                                    <input type="checkbox" className="checkbox mt-1" defaultChecked />
                                    <span className="text-sm text-gray-300">
                                        I want to receive email updates about Firebase Studio news and features.
                                    </span>
                                </label>

                                <label className="flex items-start space-x-2 cursor-pointer">
                                    <input type="checkbox" className="checkbox mt-1" defaultChecked />
                                    <span className="text-sm text-gray-300">
                                        I’m interested in participating in research studies to improve Firebase Studio
                                    </span>
                                </label>
                            </div>

                            <button
                                className="mt-6 w-full btn btn-primary"
                                disabled={!termsAccepted}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div> */}
        </div>
    );
};

export default ProjectCard;