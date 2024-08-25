import { motion } from 'framer-motion';

import LineGradient from '../components/LineGradient';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const faqs = [
  {
    title: ' 🙋‍♀️ Для кого підходить?',
    text: 'Курс - універсальний🔥 З єдиний найефективнішим алгоритмом для всіх🎉 перевіреним роками на власному досвіді та на сотнях акаунтів моїх учнів та клієнтів з 0 Підйде як для бізнес так і особистих акаунтів, для будь-якої ніші, тематики, послуг та товарів❤️ Для всіх буде 60 сценаріїв від мене в Ваш профіль, які гарантовано залетять у РЕК🔥',
  },
  {
    title: ' 🙋‍♀️ Коли старт?',
    text: 'Курс🔥 - онлайн📱, тож Ви можете придбати його в будь-який час, з будь-якої точки світу І почати проходити🎉, коли Вам зручно',
  },
  {
    title: '🙋‍♀️ Які гарантії? ',
    text: 'Мій Курс🔥 гарантовано принесе Вам результат, якщо слідувати всім інструкціям❤️ Також в разі придбання ВІП Курсу⭐️ я стаю куратором Вашого акаунту на 3 місяці⭐️ і особисто допомагаю потрапляти з кожним відео у РЕК🔥 і дійти до бажаного результату💸 Тому результат неминуємий!😎 ✅Гарантії - це мої результати і результати моїх учнів💪Бажаєте такі ж - чекаю на Курсі!🔥',
  },
  {
    title: '🙋‍♀️ Який формат, як і де проходить? ',
    text: 'Мій Курс🔥 - повноцінна авторська, ексклюзивна ,універсальна ТікТок Книга📕на 68 сторінок інформації з десятками прикладів, ідей для Ваших відео, лайфхаків, фішок та алгоритмів🔥 Авторська - так як написана виключно мною та виключно з власного досвіду🫡 Ексклюзивна - так як цієї інформації ви більше не знайдете ніде: ні на просторах інтернету, ні в одній соц.мережі, ні один блогер/медіа про це не розповідає, тим більш не залишається на зв’язку і не пише ідеї в Ваші профілі з гарантією результату🫡 Універсальна - так як підходить під будь-який профіль. Так, будь-який❤️',
  },
  {
    title: '🙋‍♀️ Доступ назавжди?',
    text: 'Так 🎉',
  },
  {
    title: '🙋‍♀️ Можна оплатити частинами?',
    text: 'Так❤️ У Вас є така можливість в розділі оплата❤️',
  },
];

function QuestionsAndAnswers() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section id="питання" className="mt-0 pt-28">
      <motion.div
        className="mx-auto text-center md:w-4/5 "
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
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-red">ПИТАННЯ ТА</span> ВІДПОВІДІ
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
          {/* додати */}
          <div className="accordion">
            {faqs.map((item, index) => {
              return (
                <AccordionItem
                  title={item.title}
                  index={index}
                  curOpen={curOpen}
                  onOpen={setCurOpen}
                >
                  {item.text}
                </AccordionItem>
              );
            })}
          </div>
        </div>
      </motion.div>

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
          className="mb-20 block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white xxs:w-2/3 sm:w-2/6"
          href="#payment"
        >
          Замовити курс
        </AnchorLink>
      </motion.div>
    </section>
  );
}

function AccordionItem({ title, index, curOpen, onOpen, children }) {
  console.log(curOpen);
  const isOpen = index === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen ? <div className="content-box">{children}</div> : null}
    </div>
  );
}

export default QuestionsAndAnswers;
