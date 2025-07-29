import React, { useRef, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ProjectCard from '../../../components/ProjectCard';
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from '../../../components/ProjectModal';
import { projects } from '../../../../public/data';


const FeaturedProjects = () => {

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
        // Featured Projects  Section
        <section id='project' className='py-20 dark:bg-black/90 bg-[#fff0fb]'>
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
        </section>
        // Featured Projects End
    );
};

export default FeaturedProjects;