import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';


const ExperienceTimeline = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    

    const experienc = [
        {
            id : '01',
            designation: 'Front-end Developer',
            institute: 'TopSoft It | Onsite',
            time: 'Aug 2024 - May 2025',
            description: [
                'Developed and maintained responsive user interfaces using React.js and Next.js, ensuring high performance and user experience',
                'Implemented server-side logic and APIs with Node.js and Express.js to integrate with MongoDB database',
                'Collaborated with design and back-end teams to translate UI/UX wireframes into clean, maintainable JavaScript code.'
            ],
            skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Next.js', 'MongoDB', 'TypeScript']
        },
        {
            id : '02',
            designation: 'Web Developer',
            institute: 'TopSoft It | Onsite',
            time: 'Jan 2019 - Oct 2020',
            description: [
                'Developed and maintained a responsive user interface using HTML, CSS, and JavaScript.',
                'Build interactive web components using React.js for efficient front-end development.',
                'Ensured consistent design and performance across devices using CSS frameworks (e.g., Bootstrap).',
                'Collaborated with designers, back-end developers, and project managers to implement features aligned with business goals.',
                'Identified and fixed UI bugs and performed testing for cross-browser compatibility.',
                'Used Git for version control and seamless team collaboration.',
                'Stayed current with emerging front-end tools and industry best practices.'
            ],
            skills: ['React.js', 'JavaScript', 'Bootstrap', 'Next.js', 'MongoDB']
        },
        {
            id : '03',
            designation: 'Lecturer (ICT)',
            institute: 'Ideal Academy | Onsite',
            time: 'Jan 2018 - Dec 2018',
            description: [
                'Applied knowledge to students and assist students with the learning Process.',
                'Evaluation on Data Communication and Network, Surveillance Security System, Programming Essential, Graphics Design, Web Development, Computer Application, Object Oriented Programming, Database Management System',
                'IT Support.',
                'Lab Work and Supervising several student projects.',
                'Maintain Weekly programming contest.'
            ],
            skills: ['NA']
        }
    ]
    return (
        <div className='py-10'>
            <VerticalTimeline lineColor="purple">
                {
                    experienc.map((singleItem => (
                        <VerticalTimelineElement
                            key={singleItem.id}
                            className="vertical-timeline-element--work"
                            icon={<MdWork />}
                            iconStyle={{ background: '#6c63ff', color: '#fff' }}
                            const contentStyle = {{
                                background: isDarkMode ? 'rgba(21, 128, 61, 0.2)' : '#000000',
                                color: '#fff',
                                border: '1px solid rgba(21, 128, 61, 0.2)',
                                boxShadow: 'none'
                              }}
                            // contentClassName="bg-blue-700 dark:bg-gray-700"
                            // contentStyle={{ background: '#111111', color: '#fff', border: '#374151', boxShadow: 'none' }}
                            // contentClassName="bg-[#111111] text-white border border-gray-700 shadow-none dark:bg-green-700/20"
                        >
                            <div className='space-y-2'>
                                <h3 className="font-bold text-black dark:text-white">{singleItem.designation}</h3>
                                <h4 className="text-xs text-black dark:text-gray-400">{singleItem.institute}</h4>
                                <div className='flex items-center gap-1 text-pink-400'>
                                    <SlCalender size={11} /> <span className='text-xs text-pink-400'>{singleItem.time}</span>
                                </div>
                                <ul className="text-xs text-black dark:text-gray-400 list-disc marker:text-purple-400 ml-5 space-y-3">
                                    {singleItem.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="badge bg-gray-600 text-gray-300 text-xs border-0">Next.js</span>
                                    <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TypeScript.js</span>
                                    <span className="badge bg-gray-600 text-gray-300 text-xs border-0">JavaScript.js</span>
                                    <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TailwindCSS.js</span>
                                    <span className="badge bg-gray-600 text-gray-300 text-xs border-0">GraphQL</span>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    )))
                }

                {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<MdWork />}
                    iconStyle={{ background: '#6c63ff', color: '#fff' }}
                    contentStyle={{ background: '#111111', color: '#fff', border: '#374151', boxShadow: 'none' }}
                >
                    <div className='space-y-2'>
                        <h3 className="font-bold text-white">Front-end Developer</h3>
                        <h4 className="text-xs text-gray-400">TopSoft IT | Onsite</h4>
                        <div className='flex items-center gap-1 text-pink-400'>
                            <SlCalender size={11} /> <span className='text-xs text-pink-400'>2024 - Present</span>
                        </div>
                        <ul className="text-xs text-gray-400 list-disc marker:text-purple-400 ml-5 space-y-3">
                            <li>Component Development: Designing and implementing reusable components for the
                                frontend to streamline development and maintain consistency across projects.</li>
                            <li>Headless CMS Integration: Working with Payload, a headless CMS, to manage
                                and deliver content effectively, ensuring seamless integration with our
                                web applications.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">Next.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TypeScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">JavaScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TailwindCSS.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">GraphQL</span>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<MdWork />}
                    iconStyle={{ background: '#6c63ff', color: '#fff' }}
                    contentStyle={{ background: '#111111', color: '#fff', border: '#374151', boxShadow: 'none' }}
                >
                    <div className='space-y-2'>
                        <h3 className="font-bold text-white">Front-end Developer</h3>
                        <h4 className="text-xs text-gray-400">TopSoft IT | Onsite</h4>
                        <div className='flex items-center gap-1 text-pink-400'>
                            <SlCalender size={11} /> <span className='text-xs text-pink-400'>2024 - Present</span>
                        </div>
                        <ul className="text-xs text-gray-400 list-disc marker:text-purple-400 ml-5 space-y-3">
                            <li>Component Development: Designing and implementing reusable components for the
                                frontend to streamline development and maintain consistency across projects.</li>
                            <li>Headless CMS Integration: Working with Payload, a headless CMS, to manage
                                and deliver content effectively, ensuring seamless integration with our
                                web applications.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">Next.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TypeScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">JavaScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TailwindCSS.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">GraphQL</span>
                        </div>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<MdWork />}
                    iconStyle={{ background: '#6c63ff', color: '#fff' }}
                    contentStyle={{ background: '#111111', color: '#fff', border: '#374151', boxShadow: 'none' }}
                >
                    <div className='space-y-2'>
                        <h3 className="font-bold text-white">Front-end Developer</h3>
                        <h4 className="text-xs text-gray-400">TopSoft IT | Onsite</h4>
                        <div className='flex items-center gap-1 text-pink-400'>
                            <SlCalender size={11} /> <span className='text-xs text-pink-400'>2024 - Present</span>
                        </div>
                        <ul className="text-xs text-gray-400 list-disc marker:text-purple-400 ml-5 space-y-3">
                            <li>Component Development: Designing and implementing reusable components for the
                                frontend to streamline development and maintain consistency across projects.</li>
                            <li>Headless CMS Integration: Working with Payload, a headless CMS, to manage
                                and deliver content effectively, ensuring seamless integration with our
                                web applications.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">Next.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TypeScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">JavaScript.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">TailwindCSS.js</span>
                            <span className="badge bg-gray-600 text-gray-300 text-xs border-0">GraphQL</span>
                        </div>
                    </div>
                </VerticalTimelineElement> */}

            </VerticalTimeline>

        </div>
    );
};

export default ExperienceTimeline;