import { LuPhone } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaArrowUpLong } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        // Footer section start from here
        <section className='bg-gray-300 dark:bg-black py-10'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <div className='grid grid-cols md:grid-cols-3 gap-5'>
                    {/* introduction */}
                    <div className=''>
                        <div className='flex items-center gap-1'>
                            <img className='w-7 bg-gradient-to-r from-pink-600 to-purple-700 rounded-md' src={logo} alt="" /><h3 className='dark:text-white'>Md Rejaul Karim</h3>
                        </div>
                        <p className='dark:text-gray-400 text-[10px] py-3'>Creative Frontend Developer dedicated to crafting visually engaging and user-friendly web interfaces. Excited to collaborate and bring innovative ideas to life.</p>
                        <div className='dark:text-gray-400 text-[9px] flex items-center gap-1'>
                            <MdOutlineMail /> <p>rejaulvoice@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-1 dark:text-gray-400 text-[9px]'>
                            <LuPhone /> <p>+351 920083705</p>
                        </div>
                    </div>
                    {/* Links */}
                    <div className='md:mx-auto'>
                        <h3 className='dark:text-white text-xs pb-3'>Quick Links</h3>
                        <div className='flex flex-col dark:text-gray-400 text-xs gap-2'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Experience</a>
                            <a href="">Projects</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    {/* Social buttons */}
                    <div className=''>
                        <h4 className='dark:text-white text-xs mb-3'>Connect</h4>
                        <div className='space-y-3'>
                            {/* Social Links */}
                            <div className='flex gap-3 space-y-2'>
                                <Link to={'https://www.linkedin.com/in/md-rejaul-karim'} target='_blank' rel="noopener noreferrer">
                                    <FaLinkedinIn className='p-2 rounded-md hoverEffect border dark:border-0 dark:bg-gray-800 
                                       transition-transform duration-300 hover:scale-110 dark:text-gray-400' size={28} />
                                </Link>
                                <Link to={'https://github.com/rejaulvoice18'} target='_blank' rel="noopener noreferrer">
                                    <FaGithub className='p-2 rounded-md hoverEffect border dark:border-0 dark:bg-gray-800 
                                       transition-transform duration-300 hover:scale-110 dark:text-gray-400' size={28} />
                                </Link>
                                <Link to={'https://www.facebook.com/rejaulvoice'} target='_blank' rel="noopener noreferrer">
                                    <FaFacebookF className='p-2 rounded-md hoverEffect border dark:border-0 dark:bg-gray-800 
                                       transition-transform duration-300 hover:scale-110 dark:text-gray-400' size={28} />
                                </Link>
                            </div>
                            <div>
                                <p className='text-[10px] dark:text-gray-400 pb-1'>Stay updated with my latest work</p>
                                <div className='flex items-center'>
                                    <input type="email" className="input rounded-l-md input-sm w-full focus:outline-0 text-black dark:bg-gray-800 dark:text-gray-300 text-[10px]" placeholder="Enter your email" /><button className='text-white bg-gradient-to-r from-purple-600 to-pink-700 py-[7px] px-2 rounded-r-md'><MdOutlineMail /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                <hr className='my-5 text-gray-400'/>
                <div className='flex justify-between'>
                    <p className='dark:text-gray-400 text-[10px]'>Developed by <a className='text-pink-600' href="https://www.linkedin.com/in/md-rejaul-karim" target='_blank'>Md Rejaul Karim</a> &copy; {currentYear}. All rights reserved</p>
                    <div className='flex items-center gap-2 text-gray-400 text-[10px]'>
                        <button className='btn bg-gray-400 dark:bg-gray-800 text-white dark:text-gray-400 text-[10px] border-0 shadow-none h-[25px]'><FaArrowUpLong /> Back to top</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;