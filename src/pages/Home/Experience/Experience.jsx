import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ExperienceTimeline from '../../../components/ExperienceTimeline';



const Experience = () => {
    return (
        <section className='bg-gray-100 dark:bg-gray-800'>
            <div className='py-14'>
                <SectionTitle
                    heading={"Experience"}
                    body={"Throughout my journey in frontend development, I've contributed to meaningful projects that demonstrate both my skills and passion."}
                />
                <div>
                    <ExperienceTimeline>
                    </ExperienceTimeline>
                </div>
            </div>
        </section>
    );
};

export default Experience;