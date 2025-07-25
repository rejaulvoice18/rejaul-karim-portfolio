import React, { useRef, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ProjectCard from '../../../components/ProjectCard';
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from '../../../components/ProjectModal';


const FeaturedProjects = () => {

    const projects = [
        {
            id: '001',
            projects_name: 'Online Language School',
            thumbnail: 'https://i.ibb.co/fGFtLvJj/etutor1.png',
            git_client: 'https://github.com/rejaulvoice18/e-tutor-client',
            git_server: 'https://github.com/rejaulvoice18/e-tutor-server',
            web: 'https://e-tutor-4ed42.web.app/',
            details: 'The web app aims to provide a seamless platform for users to book language lessons with tutors, enhancing accessibility to personalized learning and enabling tutors to manage their offerings efficiently.',
            skills: ['React.js', 'JavaScript', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
            category: 'fullstack'
        },
        {
            id: '002',
            projects_name: 'Employee Managment System',
            thumbnail: 'https://i.ibb.co/mCrHXp8Y/fintrack.png',
            git_client: 'https://github.com/rejaulvoice18/fintrack-solutions',
            git_server: 'https://github.com/rejaulvoice18/fintrack-solutions-server',
            web: 'https://fintrack-solutions.web.app/',
            details: 'This Employee Management System is a comprehensive web application designed to help companies efficiently monitor employee workload, manage salaries, and maintain contract records. Employees can update their workflow, ensuring transparency in task completion. The HR Executive oversees employee activities, verifies tasks, and manages salary requests, while the Admin has full control over monitoring all functionalities, including employee verification, promotions, and salary approvals. The system ensures role-based access, streamlining workforce management with an intuitive and organized interface',
            skills: ['React.js', 'JavaScript', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
            category: 'fullstack'
        },
        {
            id: '003',
            projects_name: 'Animal Adoption by JavaScript',
            thumbnail: 'https://i.ibb.co/hxLHKN6q/peddy.png',
            git_client: 'https://github.com/rejaulvoice18/peddy-adoption',
            git_server: 'NA',
            web: 'https://peddy-adoption-reja.netlify.app/',
            details: 'This interactive website project is called "Peddy-Adoption" where people can adopt adorable pets such as dogs, cats, rabbits, and more. Users can choose pets by reviewing the available details on the website, helping them find the perfect pet to adopt.',
            skills: ['React.js', 'JavaScript', 'TailwindCSS', 'Daisy UI'],
            category: 'frontend'
        },
        {
            id: '004',
            projects_name: 'Online Equipment Store',
            thumbnail: 'https://i.ibb.co/jZ9Vx8Zq/equip.png',
            git_client: 'https://github.com/rejaulvoice18/equisports-lisboa-client',
            git_server: 'https://github.com/rejaulvoice18/equisports-lisboa-server',
            web: 'https://equisports-lisboa.web.app/',
            details: 'online sports equipment website using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS, with Firebase authentication. Users can log in, view product details, and browse seamlessly. Admins can manage inventory by adding, editing, and deleting products. The platform offers a smooth, user-friendly experience for all.',
            skills: ['React.js', 'JavaScript', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
            category: 'fullstack'
        }
    ]
    // This usestate for Modal purpose 
    const [selectedProject, setSelectedProject] = useState(null);

    // This useState for Menu
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { label: 'All', value: 'all' },
        { label: 'Frontend', value: 'frontend' },
        { label: 'Full-Stack', value: 'fullstack' },
    ];

    const getFilteredProjects = () => {
        if (selectedCategory === 'all') return projects;
        return projects.filter(p => p.category === selectedCategory);
    };

    const countByCategory = (category) => {
        if (category === 'all') return projects.length;
        return projects.filter(p => p.category === category).length;
    };

    return (
        <section className='py-20 dark:bg-black/90 bg-[#fff0fb]'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <SectionTitle
                    heading={"Featured Projects"}
                    body={"A showcase of my recent work and the technologies I've used to bring ideas to life"}
                />
                {/* projects menu */}
                <div className="w-full flex justify-center my-10">
                    <div className="flex gap-3 flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat.value}
                                onClick={() => setSelectedCategory(cat.value)}
                                className={`px-4 py-2 cursor-pointer rounded-md shadow-md text-sm font-medium transition-transform duration-300 ${selectedCategory === cat.value
                                    ? 'bg-gradient-to-r from-pink-600 to-purple-700 text-white scale-105'
                                    : 'bg-gray-300 text-gray-800 hover:scale-105'
                                    }`}
                            >
                                {cat.label} ({countByCategory(cat.value)})
                            </button>
                        ))}
                    </div>
                </div>
                {/* project grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <AnimatePresence mode='wait'>
                        {getFilteredProjects().map(singlePro => (
                            <ProjectCard 
                            key={singlePro.id} 
                            singlePro={singlePro} 
                            onClick={() => setSelectedProject(singlePro)}
                            />
                        ))}
                    </AnimatePresence>
                </div>
                {
                    selectedProject && (
                        <ProjectModal 
                            project = {selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )
                }
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
        </section>
    );
};

export default FeaturedProjects;