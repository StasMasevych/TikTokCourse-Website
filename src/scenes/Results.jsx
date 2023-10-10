import { useState } from 'react';
import { motion } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import LineGradient from '../components/LineGradient';
import imgResult1Before from '../assets/result1_before.jpeg';
import imgResult1After from '../assets/result1_after.jpeg';

const imgResultsSlides1 = [
  { id: crypto.randomUUID(), image: imgResult1After },
  { id: crypto.randomUUID(), image: imgResult1Before },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Result = ({ title, id, setShowTextBefore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-60 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  function nextSlide(id) {
    if (id === 1) {
      const isLastSlide = currentIndex === imgResultsSlides1.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    return;
  }

  function previousSlide(id) {
    if (id === 1) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? imgResultsSlides1.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }
  }

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      {/* <div className={overlayStyles}>
        <h3 className="text-center">Результати до курсу</h3>
      </div> */}
      <div className="relative flex max-h-[700px] max-w-[400px]">
        {/* Left Arrow */}
        <div className="absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
          <BsChevronCompactLeft size={60} onClick={() => previousSlide(id)} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
          <BsChevronCompactRight size={60} onClick={() => nextSlide(id)} />
        </div>
        <img
          className="h-auto w-auto"
          src={imgResultsSlides1[currentIndex].image}
          alt={projectTitle}
        />

        {/* <img
          className="h-auto w-auto"
          src={imgResult1Before}
          alt={projectTitle}
        /> */}
      </div>
    </motion.div>
  );
};

const Results = () => {
  const [showTextBefore, setShowTextBefore] = useState(false);

  return (
    <section
      id="projects"
      /* className="pt-28 pb-28 md:pt-28 pb-28 xxs:pt-28 pb-28 mt-0" */
      className="pt-80 pb-80 pb-60 pt-0 pb-48 xxs:mt-0 md:pt-60 lg:mt-80"
    >
      {/* pt-48 pb-48 */}
      {/* HEADINGS */}
      <motion.div
        className="mx-auto text-center md:w-2/5 lg:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <div>
            <p className="font-playfair text-4xl font-semibold">
              <span className="text-red">РЕЗ</span>УЛЬТАТИ
            </p>
            <div className="mt-5 flex justify-center">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at. At magna ornare dictum lectus. Purus massa morbi
            purus nec eget eleifend ut elit.
          </p>
        </div>
      </motion.div>

      {/* RESULTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            {!showTextBefore
              ? 'Результат після курсу 😍'
              : 'Результат до курсу 🤯'}
          </div>
          <Result
            title="Project 1"
            id={1}
            setShowTextBefore={setShowTextBefore}
          />

          {/* ROW 2 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 2" id={2} />

          {/* ROW 3 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 3" id={3} />

          {/* ROW 4 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 4" id={4} />

          {/* ROW 5 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 2" id={5} />
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
