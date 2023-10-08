import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

import imgResult1Before from '../assets/result1_before.jpeg';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Result = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-60 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

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
      <div className={overlayStyles}>
        <h3>Результати до курсу</h3>
      </div>
      <div className="flex max-h-[700px] max-w-[400px]">
        <img
          className="h-auto w-auto"
          src={imgResult1Before}
          alt={projectTitle}
        />
      </div>
    </motion.div>
  );
};

const Results = () => {
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
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 1" />

          {/* ROW 2 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 2" />

          {/* ROW 3 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 3" />

          {/* ROW 4 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-blue
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 4" />

          {/* ROW 5 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Result title="Project 2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
