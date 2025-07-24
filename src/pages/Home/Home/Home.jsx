import Hero from '../Hero/Hero';
import AboutMe from '../AboutMe/AboutMe';
import Experience from '../Experience/Experience';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import WorkTogether from '../WorkTogether/WorkTogether';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <Hero />
            <AboutMe />
            <Experience />
            <FeaturedProjects />
            <WorkTogether />
            <Footer />
        </div>
    );
};

export default Home;