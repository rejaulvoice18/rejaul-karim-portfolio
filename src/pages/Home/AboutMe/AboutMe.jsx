import React from 'react';

const AboutMe = () => {
    return (
        <section className='py-20 bg-gray-800/50'>
            <div className='max-w-5xl mx-auto space-y-10'>
                <div className='flex-col justify-center text-center w-3/6 mx-auto space-y-3'>
                    <h2 className='text-white text-2xl md:text-4xl font-bold'>About Me</h2>
                    <p className='text-gray-400 text-[14px]'>Creative front-end developer with a strong sense of design
                        and a passion for crafting engaging, user-friendly digital experiences.</p>
                </div>
                <div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-bold text-white'>Hi, I'm Rejaul Karim</h2>
                        <p className='text-gray-400 text-[14px]'>I bring over 5 years of front-end development experience,
                            focusing on building modern, responsive web applications
                            that are not only visually impressive but also provide outstanding
                            user experiences. My journey began with a simple curiosity about
                            how websites function, which has since grown into a passion for
                            crafting impactful digital solutions.</p>
                        <p className='text-gray-400 text-[14px]'>
                            I prioritize writing clean, maintainable code and continuously
                            keep up with the latest technologies and industry best practices.
                            Beyond coding, I enjoy exploring new design trends, contributing
                            to open-source projects, and sharing knowledge within the developer
                            community.
                        </p>
                        <div className='flex gap-3'>
                            <button className='btn btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>TypeScript</button>
                            <button className='btn btn-outline text-xs bg-gray-700 rounded-3xl text-gray-300 border-0 hover:shadow-none'>JavaScript</button>
                            <button>React</button>
                            <button>Next.js</button>
                            <button>Tailwind CSS</button>
                            <button>GraphQL</button>
                            <button>Git</button>
                            <button>WordPress</button>
                            <button>Figma</button>
                            <button>Web Performance</button>
                            <button>API Integration</button>
                            <button>Responsive Design</button>
                            <button>Cross-Browser Compatibility</button>
                            <button>Firebase</button>
                            <button>SQL</button>
                            <button>MySQL</button>
                            <button>Node.js</button>
                            <button>Express.js</button>
                            <button>MongoDB</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;