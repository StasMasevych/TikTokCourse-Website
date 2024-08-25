import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function MyCourse() {
  return (
    <section id="курс" className="xxs:pt-32 xxs:pb-28">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 md:text-left lg:w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className=" mb-5 text-center font-playfair text-4xl font-semibold">
          Знайомтесь з моїм <span className="text-red">ТікТок курсом 🤩</span>
        </p>
        {/* <p className="lg:mt-40 text-center font-playfair font-semibold text-4xl mb-5 text-red"></p> */}
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 mb-10 text-center ">
          В курсі детально розкрито такі теми
        </p>
      </motion.div>

      {/* Course list of content items */}
      <div className="flex justify-center">
        <div className="justify-items-center gap-8 sm:grid sm:grid-cols-3">
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Детальний розбір алгоритму ТікТоку 🙌
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              60 стартових ідей для вашого профілю від мене, які будуть в РЕК 😎
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Мої секретні фішки, які ви точно не знали досі 🤫
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Скільки зарлбляють тіктокери? Де і як мене знайдуть замовники і зо
              далі робити? 💰
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Багато переглядів без залежності від трендів 🥳
            </div>
          </motion.div>
          <motion.div
            /*   className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Перевірені способи пошуку замовників реклами 🔥
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">"Секретний" час активності ⌛️ </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Як зняти перше відео на мільйон переглядів? 🍋
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">Просування хештегами 💪</div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Схема 20 000 підписників за 2 відео 🔥
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">Вся правда про тіньовий бан 🫢</div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              15 типів відео, які завжди в РЕК з 0 🚀
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Як набрати свою цільову аудиторію? 🤗
            </div>
          </motion.div>
          <motion.div
            /* className="w-1/3" */
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <div className="course__item">
              Як повернути старому аккаунту бомбезний актив! 😮
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <AnchorLink
          className="mt-10 block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white xxs:w-2/3 sm:w-2/6"
          href="#ціни"
        >
          Хочу курс !
        </AnchorLink>
      </motion.div>
    </section>
  );
}
