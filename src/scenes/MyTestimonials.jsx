import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const MyTestimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="text-center md:w-1/3 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-5 font-playfair text-4xl font-semibold text-red">
          ВІДГУКИ
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Сотні учнів уже пройшли мій ТікТок курс, і можуть дати йому оцінку! 🤩
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="gap-8 md:flex md:flex-wrap md:justify-between">
        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end bg-blue
            before:absolute before:left-1/2 before:-ml-[110px] before:content-person1 xxs:p-12 xxs:before:top-[-120px] md:p-8 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="md: text-center text-sm ">
            Привіт! нарешті мій тік ток прийшов до тями після твого курсу 🥰 а
            то відео набирали до 300 переглядів і ставало все сумніше. Дуже
            тішусь☺️ думаю після консультації буде ще крутіший результат 🥰 Дуже
            дякую за твій курс 🥰
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end bg-red
            before:absolute before:left-1/2 before:-ml-[110px] before:content-person2 xxs:p-16 xxs:before:top-[-120px] md:p-14 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="md: text-center text-sm">
            Привіт!🥰 Прочитала находу курс, просто по алгоритму записала відео,
            витратила 5 хвилин 😂 І що ти думаєш - 40К 😂 я в шоці Дяяяякую!!!
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end bg-yellow
            before:absolute before:left-1/2 before:-ml-[110px] before:content-person3 xxs:p-16 xxs:before:top-[-120px] md:p-11 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="md: text-center text-sm">
            Привіт✨ Прочитала твій Курс вже кілька раз, і ні разу не
            пожалкувала, що взяла 🙂 Все розжовано по полочках, інформації куча,
            стільки фішок. Брати варто 100 проц👍🥰
          </p>
        </motion.div>

        <motion.div
          className="before:content-person4 relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end
            bg-blue before:absolute before:left-1/2 before:-ml-[110px] xxs:p-10 xxs:before:top-[-120px] md:p-6 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="md: text-center text-sm">
            Хочу записати чесний відгук про Курс по тіктоку 🤭 Дуже
            інформативно, все з прикладами, що дуже круто 🔥 одразу розумієш що
            і до чого 👍🏻 Багато цікавинок, які я не знала про ТТ, тому вже за
            сьогодні залила два відоси, з певним тікток часом 😎 Реанімую своє
            дитя під ім’ям - ТікТок 🥺 дякую!
          </p>
        </motion.div>

        <motion.div
          className="before:content-person5 relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end
            bg-red before:absolute before:left-1/2 before:-ml-[110px] xxs:p-4 xxs:before:top-[-120px] md:p-2 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="md: text-center text-sm">
            Лера, доброго дня 🙂 Побачила відгуки та згадала що нічого не писала
            🙂 Довго не могла потрапити в рек, пробувала, але все не те Були мої
            помилки та коли відео залетіли, то зрозуміла що зробила все по твоїм
            рекомендаціям, тому вони взлетіли Дякую, корисний курс 🙂 А ще я
            заробила з перших відео 400$ 🤯 хоча відео набрало 30тисяч, але
            певно цільових! Буду продовжувати далі 💪
          </p>
        </motion.div>

        <motion.div
          className="before:content-person6 relative mx-auto mt-48 flex h-[350px] basis-1/4 flex-col justify-end
            bg-yellow before:absolute before:left-1/2 before:-ml-[110px] xxs:p-2 xxs:before:top-[-120px] md:p-2 md:before:top-[-170px] "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="xxs:text-md text-center md:text-sm">
            Те, що я отримав - це прост вау! Ви даєте головне - сценарії для
            відео! Ви змінили мене! І тепер маю розгрібати дірект, відповідати
            великій кількості людей! Тому я дуже дуже вдячний!!! І з першого
            відео в профіль у мене вже 50.000 переглядів🫣 хоча у мене 100
            підписників і вже 20 продаж по 350гривень, з повного 0. Буду
            дякувати вам вічно!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MyTestimonials;
