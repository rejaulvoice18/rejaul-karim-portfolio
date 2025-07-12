import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import { MdWork } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';



const ExperienceTimeline = () => {
    return (
        <div className='py-10'>
            <VerticalTimeline lineColor="purple">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    icon={<MdWork />}
                    iconStyle={{ background: '#6c63ff', color: '#fff' }}
                    contentStyle={{ background: '#1f2937', color: '#fff', borderBottom: 'none', boxShadow: 'none' }}
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
                    contentStyle={{ background: '#1f2937', color: '#fff', borderBottom: 'none', boxShadow: 'none' }}
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
                    contentStyle={{ background: '#1f2937', color: '#fff', borderBottom: 'none', boxShadow: 'none' }}
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
                    contentStyle={{ background: '#1f2937', color: '#fff', borderBottom: 'none', boxShadow: 'none' }}
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
            </VerticalTimeline>

        </div>
    );
};

export default ExperienceTimeline;