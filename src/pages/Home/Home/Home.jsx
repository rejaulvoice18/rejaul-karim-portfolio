import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import WorkTogether from '../WorkTogether/WorkTogether';


const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Experience />
            <FeaturedProjects />
            <WorkTogether />
        </div>
    );
};

export default Home;