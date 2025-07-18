import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ProjectCard from '../../../components/ProjectCard';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    return (
        <section className='py-20 bg-gray-800/50'>
            <div className='max-w-screen-xl mx-auto px-3'>
                <SectionTitle
                    heading={"Featured Projects"}
                    body={"A showcase of my recent work and the technologies I've used to bring ideas to life"}
                />
                {/* projects menu */}
                <div className='w-full flex my-10 justify-center'>
                    <div className='flex gap-3 text-white'>
                        <Link
                        to="#"
                        className='bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                        >All</Link>
                        <Link
                        to="#"
                        className='bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                        >Frontend (5)</Link>
                        <Link
                        to="#"
                        className='bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                        >Full-Stack (4)</Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
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
        </section>
    );
};

export default FeaturedProjects;