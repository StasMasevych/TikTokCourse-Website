import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

import imgProfile from "../assets/tiktok-gallery5.png";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* pt-10 pb-24 */}
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        {/* mt-32 */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            МОЇ <span className="text-red">РЕЗУЛЬТАТИ</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            ТікТок відкрив мені нові можливості, тепер я хочу передати вам свій
            досвід. Уже понад 400 учнів, які пройшли мій курс, навчилися
            попадати в РЕК 🤩
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                /* src="assets/skills-image.png" */
                src={imgProfile}
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10"
              /* src="assets/skills-image.png" */ src={imgProfile}
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-62">
            {/* h-32 */}
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                💰 Заробіток з 0 грн до 2 000 $ за пів року під час війни🫢
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            {/* "w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" */}
          </div>
          <p className="mt-5">
            Я набивала шишки та шукала всі можливі способи заробітку, а Ви
            отримаєте найефективніші ~10 способів в одному списку з покроковими
            діями🥳, з кожного з яких можна мати 500$+💰, Ви просто оберете
            найцікавіші для Вас❤️‍🔥
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-62">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Співпраця з відомими брендами та медіа
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            ParfumCity, RAKETA, Binance, Cococard, Yezzy Salon,
            AppleDreamUkraine; Треки: Злата Огнєвіч, Леся Кава, тисячі
            комерційних замовлень та вигідних бартерів (меблі, комплекси
            відпочинку, салони, ресторани, одяг, міроприємства)
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-62">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Десятки кооперацій з блогерами і нові знайомства
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Я вчилася довго і сама, а Ви отримаєте найефективніші алгоритми ТТ,
            слідуючи яким, з першого відео потрапите в РЕК гарантовано, навіть
            якщо зараз у Вас 1 підписник
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
