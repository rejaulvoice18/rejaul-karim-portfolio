
import SectionTitle from '../../../components/SectionTitle';
import { IoIosSend } from 'react-icons/io';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const WorkTogether = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('rejaulvoice', 'template_kl83qg9', form.current, {
                publicKey: 'wdFZiblZJhUrei4ST',
            })
            .then(
                () => {
                    toast('Message sent successfully')
                },
                (error) => {
                    toast(error.text)
                },
            );
            e.target.reset();
    };

    return (
        <section id='contact' className='bg-gray-100 dark:bg-gray-800 py-20'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <SectionTitle
                    heading={"Let's Work Together"}
                    body={"Thinking about a new project? I’d be glad to hear more and explore how we can bring it to life together."}
                />
                {/* Message send section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                    <div className='bg-blue-700/20 dark:bg-black/50 p-4 rounded-md space-y-2'>
                        <h3 className='dark:text-white'>Send me a message</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='md:flex space-y-3 gap-5 w-full'>
                                <div className='w-full'>
                                    <legend className="fieldset-legend dark:text-gray-300 text-[10px]">Name</legend>
                                    <input type="text" name='client-name' className="input focus:outline-0 input-sm w-full dark:bg-gray-800 text-black dark:text-gray-300 text-[10px]" placeholder="Your name" />
                                </div>
                                <div className='w-full'>
                                    <legend className="fieldset-legend dark:text-gray-300 text-[10px]">Email</legend>
                                    <input type="email" name='email' className="input input-sm w-full focus:outline-0 text-black dark:bg-gray-800 dark:text-gray-300 text-[10px]" placeholder="Your email" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <legend className="fieldset-legend dark:text-gray-300 text-[10px]">Topic</legend>
                                <input type="text" name='title' className="input focus:outline-0 input-sm w-full dark:bg-gray-800 text-black dark:text-gray-300 text-[10px]" placeholder="What's on your mind" />
                            </div>
                            <div className='w-full'>
                                <legend className="fieldset-legend text-gray-300 text-[10px]">Message</legend>
                                <textarea name='message' className="textarea h-24 w-full focus:outline-0 dark:bg-gray-800 text-black dark:text-gray-300 text-[10px]" placeholder="Tell me about your project and other details..."></textarea>
                            </div>
                            <button className='btn mt-3 btn-block bg-gradient-to-r from-pink-600 to-purple-700 text-white border-0 text-xs' type='submit' value="Send Message"><IoIosSend size={18} /> Send Message</button>
                        </form>
                    </div>
                    <div className=''>
                        <h3 className='dark:text-white'>Get in Touch</h3>
                        <p className='dark:text-gray-400 text-[10px] py-3'>I'm always open to new opportunities and exciting
                            projects. Whether you have a question, an idea,
                            or just want to say hello — I’ll be happy to hear from you and respond as soon as I can!</p>
                        {/* phone number, email and location */}
                        <div className='flex flex-col gap-3 dark:text-white'>
                            <div className='flex gap-3 dark:bg-black/50 p-3 rounded-md dark:hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className='text-[10px] dark:text-gray-400'>Phone</p>
                                    <p className='text-xs'>(+351) 920083705</p>
                                </div>
                            </div>
                            <div className='flex gap-3 dark:bg-black/50 p-3 rounded-md dark:hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <MdOutlineEmail />
                                </div>
                                <div>
                                    <p className='text-[10px] dark:text-gray-400'>Email</p>
                                    <p className='text-xs'>rejaulvoice@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex gap-3 dark:bg-black/50 p-3 rounded-md dark:hover:bg-gray-700'>
                                <div className='flex p-2 bg-orange-500/20 rounded-md items-center justify-items-center'>
                                    <IoLocationSharp />
                                </div>
                                <div>
                                    <p className='text-[10px] dark:text-gray-400'>Location</p>
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