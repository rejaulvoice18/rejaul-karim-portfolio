import React from 'react';

const SectionTitle = ({heading, body}) => {
    return (
        <div className='flex-col justify-center text-center w-3/6 mx-auto space-y-3'>
            <h2 className='dark:text-white text-2xl md:text-4xl font-bold'>{heading}</h2>
            <p className='dark:text-gray-400 text-[14px]'>{body}</p>
        </div>
    );
};

export default SectionTitle;