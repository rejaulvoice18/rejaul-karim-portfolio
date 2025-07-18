import React from 'react';
import Animate from '../Animate/Animate';
// import Heo from '../Heo/Heo';
// import He from '../He/He';
import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';


const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Experience />
            <FeaturedProjects />
            {/* <He /> */}
            {/* <Heo /> */}
            {/* <Animate /> */}
        </div>
    );
};

export default Home;