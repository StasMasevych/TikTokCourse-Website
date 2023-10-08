import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import DotGroup from './scenes/DotGroup';
import MySkills from './scenes/MySkills';
import MyCourse from './scenes/MyCourse';
/* import Test from "./scenes/Test"; */
import LineGradient from './components/LineGradient';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import Testimonials from './scenes/Testimonials';
import { motion } from 'framer-motion';
import MyTestimonials from './scenes/MyTestimonials';
import Results from './scenes/Results';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="mx-auto w-5/6 md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6 md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills />
        </motion.div>
      </div>

      <LineGradient />
      <div className="mx-auto w-5/6 md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('course')}
        >
          <MyCourse />
        </motion.div>
      </div>

      {/* <LineGradient /> */}
      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Results />
          {/* <Projects /> */}
        </motion.div>
      </div>
      <LineGradient />
      <div className="mx-auto w-5/6 md:h-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('testimonials')}
        >
          {/* <Testimonials /> */}
          <MyTestimonials />
        </motion.div>
      </div>
      <div className="mx-auto w-5/6 md:h-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
