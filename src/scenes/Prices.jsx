import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Prices() {
  return (
    <section id="питання" className="pt-18">
      <div className="prices">
        <div className="text-center">
          <p className="text font-playfair text-4xl font-semibold">
            <span className="text-red">ОБИРАЙ</span> ЗРУЧНИЙ ФОРМАТ
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <div className="prices__grid grid-prices">
          <div class="pricing-plan pricing-plan--complete">
            <header className="pricing-plan__header header-pricing-plan">
              <div className="header-pricing-plan__title-block">
                <h3 className="header-pricing-plan__title">
                  ТікТок Курс <br />
                </h3>
                <span>Standard 🔥</span>
              </div>
              <p className="header-pricing-plan__price">2000 грн</p>
              <p className="header-pricing-plan__paragraph">Що включає курс</p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  68 авторських сторінок з найефективнішими алгоритмами,
                  лайфхаками, особистими фішками потрапляння з кожним відео у
                  РЕК з 0 ❗️ та монетизації 💸 60 сценаріїв від мене в твій
                  профіль, які будуть в РЕК 🔥 4.100₴ ⭐
                </p>
              </li>
            </ul>
            <AnchorLink
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="#payment"
            >
              Придбати курс
            </AnchorLink>
          </div>
          <div class="pricing-plan pricing-plan--complete">
            <header className="pricing-plan__header header-pricing-plan">
              <div className="header-pricing-plan__title-block">
                <h3 className="header-pricing-plan__title">
                  ТікТок Курс <br />
                </h3>
                <span>VIP 🔥</span>
              </div>
              <p className="header-pricing-plan__price">5000 грн</p>
              <p className="header-pricing-plan__paragraph">Що включає курс</p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  68 авторських сторінок з найефективнішими алгоритмами,
                  лайфхаками, особистими фішками потрапляння з кожним відео у
                  РЕК з 0 ❗️ та монетизації 💸 60 сценаріїв від мене в твій
                  профіль, які будуть в РЕК 🔥 4.100₴ ⭐
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Моє кураторство Вашим профілем 3 місяці 🔥 Я особисто
                  допомагаю доводити кожне відео у РЕК 😎 Аналізуємо кожне відео
                  кожен день 🔥 Поки не дійдемо бажаного результату в розвитку і
                  заробітку не закінчуємо співпрацю ❤️‍🔥 6.300₴ ЗНИЖКА 🔥 10.000₴
                  перечеркнуто
                </p>
              </li>
            </ul>
            <AnchorLink
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="#payment"
            >
              Придбати курс
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
