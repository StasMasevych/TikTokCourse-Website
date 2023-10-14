import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import JSConfetti from 'js-confetti';

import LineGradient from '../components/LineGradient';

//images
import imgResult1Before from '../assets/result1_before.jpeg';
import imgResult1After from '../assets/result1_after.jpeg';
import imgResult2Before from '../assets/result2_before.jpeg';
import imgResult2After from '../assets/result2_after.jpeg';
import imgResult3Before from '../assets/result3_before.jpeg';
import imgResult3After from '../assets/result3_after.jpeg';
import imgResult4Before from '../assets/result4_before.jpeg';
import imgResult4After from '../assets/result4_after.jpeg';
import imgResult5Before from '../assets/result5_before.jpeg';
import imgResult5After from '../assets/result5_after.jpeg';

const imgResultsSlides1 = [
  { id: crypto.randomUUID(), image: imgResult1After },
  { id: crypto.randomUUID(), image: imgResult1Before },
];

const imgResultsSlides2 = [
  { id: crypto.randomUUID(), image: imgResult2After },
  { id: crypto.randomUUID(), image: imgResult2Before },
];

const imgResultsSlides3 = [
  { id: crypto.randomUUID(), image: imgResult3After },
  { id: crypto.randomUUID(), image: imgResult3Before },
];

const imgResultsSlides4 = [
  { id: crypto.randomUUID(), image: imgResult4After },
  { id: crypto.randomUUID(), image: imgResult4Before },
];

const imgResultsSlides5 = [
  { id: crypto.randomUUID(), image: imgResult5After },
  { id: crypto.randomUUID(), image: imgResult5Before },
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

  /* useEffect(() => {
    if (id === 1) {
      setCurrentIndex(0);
    }
    if (id === 2) {
      setCurrentIndex(+2);
    }
    if (id === 3) {
      setCurrentIndex(+4);
    }
    if (id === 4) {
      setCurrentIndex(+6);
    }
    if (id === 5) {
      setCurrentIndex(+8);
    }
  }, []); */

  function nextSlide(id) {
    if (id === 1) {
      const isLastSlide = currentIndex === imgResultsSlides1.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 2) {
      const isLastSlide = currentIndex === imgResultsSlides2.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 3) {
      const isLastSlide = currentIndex === imgResultsSlides3.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 4) {
      const isLastSlide = currentIndex === imgResultsSlides4.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 5) {
      const isLastSlide = currentIndex === imgResultsSlides5.length - 1;
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

    if (id === 2) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? imgResultsSlides2.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 3) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? imgResultsSlides3.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 4) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? imgResultsSlides4.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    if (id === 5) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? imgResultsSlides5.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowTextBefore((prevVal) => !prevVal);
    }

    return;
  }

  function showImages() {
    if (id === 1) {
      return imgResultsSlides1[currentIndex].image;
    }

    if (id === 2) {
      return imgResultsSlides2[currentIndex].image;
    }

    if (id === 3) {
      return imgResultsSlides3[currentIndex].image;
    }

    if (id === 4) {
      return imgResultsSlides4[currentIndex].image;
    }

    if (id === 5) {
      return imgResultsSlides5[currentIndex].image;
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
          className="h-auto w-auto rounded-3xl"
          /* src={imgResultsSlides[currentIndex]?.image} */
          src={showImages()}
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

  const jsConfetti = new JSConfetti();

  useEffect(() => {
    function fireConfetti() {
      jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: ['#000', 'hotpink', 'gold'],
        confettiNumber: 100,
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        emojiSize: 100,
      });
    }
    fireConfetti();
  }, []);

  return (
    <section
      id="результати"
      /* className="pt-28 pb-28 md:pt-28 pb-28 xxs:pt-28 pb-28 mt-0" */
      className="pt-18 pb-28 xxs:mt-0"
    >
      {/* pt-48 pb-48 */}
      {/* HEADINGS */}
      <motion.div
        className="mx-auto text-center md:w-2/5"
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
            Багатьом моїм учням уже вдалося досягти чудових результатів після
            мого ТікТок курсу!
          </p>
        </div>
      </motion.div>

      {/* RESULTS */}
      <div className="flex justify-center">
        <motion.div
          className="xxs:grid xxs:auto-cols-auto xxs:gap-8 sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className="flex max-h-[400px] max-w-[400px] flex-col xxs:gap-6">
            <div className=" rounded-3xl bg-red p-10 text-center font-playfair text-sm xxs:mt-6 sm:mt-0">
              <p>Ірина, мама переселенка закордон</p>
              <p>
                📍 Старт: Невіра у алгоритми ТікТоку, мінімальні перегляди,
                зйомка на авось, бажання монетизації блогу
              </p>
              <p>
                {' '}
                🔥 Результат: півмільйонні перегляди один за одним 🥳 фуд/травел
                блогер 🔥 співпраці з закладами, місцями відпочинку,
                інстаграм-плейсами 🔥 💸 заробіток у ТікТоці та Інстаграмі(за
                допомогою ТікТоку) 🔥
              </p>
            </div>
            <p className="rounded-3xl bg-blue p-6 text-center font-playfair text-2xl font-semibold">
              {!showTextBefore
                ? 'Результат після курсу 😍'
                : 'Результат до курсу ☹️'}
            </p>
          </div>
          <Result
            title="Project 1"
            id={1}
            setShowTextBefore={setShowTextBefore}
          />

          {/* ROW 2 */}
          <div className="flex max-h-[400px] max-w-[400px] flex-col xxs:gap-6">
            <div className=" rounded-3xl bg-red p-10 text-center font-playfair text-sm xxs:mt-6 sm:mt-0">
              <p>Ангеліна, мама у декреті, акторка</p>
              <p>📍 Старт: 1500 підписників</p>
              <p>
                {' '}
                🔥 Результат: 97 тисяч підписників 🔥 Використала схему з Курсу
                🔥 20.000 підписників за 2 відео! 🥳 Кожне відео у РЕК 🔥 на
                тисячні-мільйоні перегляди! 🔥 Співпраця з брендами! 🔥
                Переведення аудиторії в Інстаграм! 🔥 💸 Заробіток з ТікТоку та
                Інстаграм 🔥
              </p>
            </div>
            <p className="rounded-3xl bg-blue p-6 text-center font-playfair text-2xl font-semibold">
              {!showTextBefore
                ? 'Результат після курсу 😍'
                : 'Результат до курсу ☹️'}
            </p>
          </div>
          <Result
            title="Project 2"
            id={2}
            setShowTextBefore={setShowTextBefore}
          />

          {/* ROW 3 */}
          <div className="flex max-h-[400px] max-w-[400px] flex-col xxs:gap-6">
            <div className=" rounded-3xl bg-red p-10 text-center font-playfair text-sm xxs:mt-6 sm:mt-0">
              <p>Вікторія, мама у декреті</p>
              <p>📍 Старт: Купувала інші Курси - не допомогли 👎</p>
              <p>
                {' '}
                🔥 Результат: Після мого Курсу 🔥 одразу пішли результати! 💪
                Використовує схему з Курсу 🔥 заробіток при маленькій кількості
                підписників 🥳 Кожне відео у РЕК 🔥 на тисячні-мільйоні
                перегляди! 🔥
              </p>
            </div>
            <p className="rounded-3xl bg-blue p-6 text-center font-playfair text-2xl font-semibold">
              {!showTextBefore
                ? 'Результат після курсу 😍'
                : 'Результат до курсу ☹️'}
            </p>
          </div>
          <Result
            title="Project 3"
            id={3}
            setShowTextBefore={setShowTextBefore}
          />

          {/* ROW 4 */}
          <div className="flex max-h-[400px] max-w-[400px] flex-col xxs:gap-6">
            <div className=" rounded-3xl bg-red p-10 text-center font-playfair text-sm xxs:mt-6 sm:mt-0">
              <p>Юлія, мама у декреті</p>
              <p>
                📍 Старт: Нерозуміння алгоритмів ТікТок, бажання розвиватися і
                заробляти в ТікТок
              </p>
              <p>
                {' '}
                🔥 Результат: Слідування найефективнішим алгоритмам з Курсу 🔥
                Кожне відео у РЕК 🔥 тисячні-півмільйонні перегляди 💸
                Монетизація блогу! 🔥
              </p>
            </div>
            <p className="rounded-3xl bg-blue p-6 text-center font-playfair text-2xl font-semibold">
              {!showTextBefore
                ? 'Результат після курсу 😍'
                : 'Результат до курсу ☹️'}
            </p>
          </div>
          <Result
            title="Project 4"
            id={4}
            setShowTextBefore={setShowTextBefore}
          />

          {/* ROW 5 */}
          <div className="fl flex max-h-[400px] max-w-[400px] flex-col xxs:gap-6">
            <div className=" rounded-3xl bg-red p-10 text-center font-playfair text-sm xxs:mt-6 sm:mt-0">
              <p>Анна, косметолог</p>
              <p>
                📍 Старт: Нерозуміння як знайти клієнтів через ТікТок та
                потрапляти у РЕК
              </p>
              <p>
                {' '}
                🔥 Результат: Розвинутий експертний блог 🔥 Тисячі потенційних
                клієнтів 🔥 Кожне відео самореклами своїх послуг у РЕК 🔥
                безкоштовно 🥳
              </p>
            </div>
            <p className="rounded-3xl bg-blue p-6 text-center font-playfair text-2xl font-semibold">
              {!showTextBefore
                ? 'Результат після курсу 😍'
                : 'Результат до курсу ☹️'}
            </p>
          </div>
          <Result
            title="Project 5"
            id={5}
            setShowTextBefore={setShowTextBefore}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
