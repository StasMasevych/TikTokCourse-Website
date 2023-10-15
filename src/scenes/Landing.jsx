import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { customersImgs } from '../data/data-customers/data-customers';
/* const img =
  "https://mail.google.com/mail/u/0?ui=2&ik=34e704a98e&attid=0.1&permmsgid=msg-a:r8694891675252838291&th=18a7a3c4c99c91a9&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_HyWUiKK8tLujWFpgvFZ7YnwWhFdnD-kydWIeM55IlXvm7W7d4DfgEYn9wK0ZXK2mWyNoPAcJ0qlkzic7qds5EMJrhrhmVSUPwmESLAyeZhv7b8N8wuecBiss&disp=emb&realattid=18a7a3c40c260d3e82c1"; */

import profileImg from '../assets/lera.png';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:z-[-1]
            before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue md:before:max-w-[600px]"
          >
            <img
              alt="profile"
              className="z-10 h-[36rem] w-full max-w-[400px] rounded-lg transition duration-500 hover:saturate-150 hover:filter md:max-w-[600px]"
              src={profileImg}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] rounded-lg md:max-w-[600px]"
            src={profileImg}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-center font-playfair text-6xl md:text-start">
            <div className="hero__textblock">
              <p>TikToker</p>
              <div
                className="z-20 before:absolute before:-left-[45px] before:-top-[70px] before:z-[-1]
                xxs:relative xxs:font-semibold xxs:text-deep-blue xxs:before:content-brush "
              >
                <a href="https://www.tiktok.com/@xomaa666">Хома</a>
              </div>
            </div>
          </p>

          <p className="mt-10 mb-7 text-center text-lg md:text-start">
            Навчу заробляти 2000$ з ТікТоку з 0❗️підписників та особисто
            допоможу вивести твоє кожне відео у РЕК!🔥
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue py-3 px-7 font-semibold text-deep-blue
              transition duration-500 hover:bg-blue hover:text-white"
            onClick={() => setSelectedPage('contact')}
            href="#payment"
          >
            Придбати
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
            href="#контакт"
          >
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
              Безкоштовна Консультація
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div>
          <div className="free-consultation">
            <p className="free-consultation__description">
              Безкоштовна консультація по Вашому ТікТоку особисто зі мною
              допоможе зрозуміти чи допоможе мій Курс🔥 в вирішені Ваших проблем
              профілю та дійти до бажаного результату🔥
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="hero__customers">
            <div className="hero__customers-images">
              {customersImgs.map((el) => {
                return <img src={el.img} alt="customer" />;
              })}
            </div>
            <h4>200+ учнів, що вже мають результат від курсу!🔥</h4>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
