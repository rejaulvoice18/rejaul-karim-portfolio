import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { IoIosSend } from 'react-icons/io';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const WorkTogether = () => {
  
    return (
        <section className='bg-black/20 py-20'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <SectionTitle
                    heading={"Let's Work Together"}
                    body={"Thinking about a new project? I’d be glad to hear more and explore how we can bring it to life together."}
                />
                {/* Message send section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    <div className='bg-black/50 p-4 rounded-md space-y-3'>
                        <h3 className='text-white'>Send me a message</h3>
                        <div className='md:flex space-y-3 gap-5 w-full'>
                            <div className='w-full'>
                                <legend className="fieldset-legend text-gray-300 text-[10px]">Name</legend>
                                <input type="text" className="input input-sm w-full bg-gray-800 text-gray-300 text-[10px]" placeholder="Your name" />
                            </div>
                            <div className='w-full'>
                                <legend className="fieldset-legend text-gray-300 text-[10px]">Email</legend>
                                <input type="email" className="input input-sm w-full bg-gray-800 text-gray-300 text-[10px]" placeholder="Your email" />
                            </div>
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend text-gray-300 text-[10px]">Topic</legend>
                            <input type="text" className="input input-sm w-full bg-gray-800 text-gray-300 text-[10px]" placeholder="What's on your mind" />
                        </div>
                        <div className='w-full'>
                            <legend className="fieldset-legend text-gray-300 text-[10px]">Message</legend>
                            <textarea className="textarea h-24 w-full bg-gray-800 text-gray-300 text-[10px]" placeholder="Tell me about your project and other details..."></textarea>
                        </div>
                        <button className='btn btn-block bg-gradient-to-r from-pink-600 to-purple-700 text-white border-0 text-xs'><IoIosSend size={18} /> Send Message</button>
                    </div>
                    <div className=''>
                        <h3 className='text-white'>Get in Touch</h3>
                        <p className='text-gray-400 text-[10px] py-3'>I'm always open to new opportunities and exciting
                            projects. Whether you have a question, an idea,
                            or just want to say hello — I’ll be happy to hear from you and respond as soon as I can!</p>
                        {/* phone number, email and location */}
                        <div className='flex flex-col gap-3 text-white'>
                            <div className='flex gap-3 bg-black/50 p-3 rounded-md hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className='text-[10px] text-gray-400'>Phone</p>
                                    <p className='text-xs'>(+351) 920083705</p>
                                </div>
                            </div>
                            <div className='flex gap-3 bg-black/50 p-3 rounded-md hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <MdOutlineEmail />
                                </div>
                                <div>
                                    <p className='text-[10px] text-gray-400'>Email</p>
                                    <p className='text-xs'>rejaulvoice@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-3 bg-black/50 p-3 rounded-md hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <IoLocationSharp />
                                </div>
                                <div>
                                    <p className='text-[10px] text-gray-400'>Location</p>
                                    <p className='text-xs'>Portugal</p>
                                </div>
                            </div>
                            <h3 className='text-xs mt-4'>Follow Me</h3>
                            {/* Social Links */}
                            <div className='flex gap-3'>
                                <Link to={'https://www.linkedin.com/in/md-rejaul-karim'} target='_blank' rel="noopener noreferrer"><FaLinkedinIn className='p-2 rounded-md hoverEffect border 
                                        border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white' size={35} />
                                </Link>
                                <Link to={'https://github.com/rejaulvoice18'} target='_blank' rel="noopener noreferrer"><FaGithub className='p-2 rounded-md hoverEffect border 
                                        border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white' size={35} />
                                </Link>
                                <Link to={'https://www.facebook.com/rejaulvoice'} target='_blank' rel="noopener noreferrer"><FaFacebookF className='p-2 rounded-md hoverEffect border 
                                        border-purple-500 hover:bg-purple-500 text-purple-500 hover:text-white' size={35} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkTogether;