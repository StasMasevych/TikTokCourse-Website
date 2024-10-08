import Navbar from './scenes/Navbar';
import Landing from './scenes/Landing';
import DotGroup from './scenes/DotGroup';
import MySkills from './scenes/MySkills';
import MyCourse from './scenes/MyCourse';
/* import Test from "./scenes/Test"; */
import LineGradient from './components/LineGradient';
import Projects from './scenes/Projects';
/* import Contact from './scenes/Contact'; */
import ContactForm from './scenes/ContactFormspree';
/* import Contact2 from './scenes/Contact2'; */
import Footer from './scenes/Footer';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect, useState } from 'react';
import Testimonials from './scenes/Testimonials';
import { motion } from 'framer-motion';
import MyTestimonials from './scenes/MyTestimonials';
import Results from './scenes/Results';
import QuestionsAndAnswers from './scenes/Q&A';
import Prices from './scenes/Prices';

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
      <div className="mx-auto w-5/6 md:h-auto">
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
      <div className="mx-auto w-5/6 md:h-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Про мене')}
        >
          <MySkills />
        </motion.div>
      </div>

      <LineGradient />
      <div className="mx-auto w-5/6 md:h-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Курс')}
        >
          <MyCourse />
        </motion.div>
      </div>

      {/* <LineGradient /> */}
      <div className="mx-auto w-5/6 md:h-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Результати')}
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
          onViewportEnter={() => setSelectedPage('Відгуки')}
        >
          {/* <Testimonials /> */}
          <MyTestimonials />
        </motion.div>
      </div>

      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Ціни')}
        >
          <Prices />
        </motion.div>
      </div>

      <div className="mx-auto w-5/6">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Питання')}
        >
          <QuestionsAndAnswers />
        </motion.div>
      </div>

      <div className="mx-auto w-5/6 md:h-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('Контакт')}
        >
          {/* <Contact /> */}
          <ContactForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
