import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Prices() {
  return (
    <section id="ціни" className="pt-18">
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
            <a
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="https://t.me/homushkaa"
            >
              Замовити курс
            </a>
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
            <a
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="https://t.me/homushkaa"
            >
              Замовити курс
            </a>
          </div>
          <div class="pricing-plan pricing-plan--complete">
            <header className="pricing-plan__header header-pricing-plan">
              <div className="header-pricing-plan__title-block">
                <h3 className="header-pricing-plan__title">
                  Ведення ТікТоку під ключ 🔑 <br />
                </h3>
                <span> Відео, які набрали 30.000+ переглядів 🔥</span>
              </div>
              <p className="header-pricing-plan__price">5000 грн</p>
              <p className="header-pricing-plan__paragraph">
                Що включає ведення
              </p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  гарантія переглядів 30.000+ на кожному відео
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  створення та/або правильне оформлення профілю
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">зйомка</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  якісна камера: IPhone 13 Pro Max
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  ідеї/ сценарії /пошук трендів
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">монтаж</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">озвучка</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  підбір/ пошук/ домовленість з моделями/ акторами/ медія за
                  потреби
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  також моя участь у відео, як моделі/ актора/ популяріті
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">постінг</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">актив на відео</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  зв’язок 24/7 мо всім питанням
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  можливий виїзд на локацію(додаткова оплата 🙏🏻) Ви платите
                  тільки за РЕЗУЛЬТАТ! 🔥 Ціна: 3.000₴ - 1 відео (перші 10
                  відео) Надалі 2.000₴ - 1 відео
                </p>
              </li>
            </ul>
            <a
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="https://t.me/homushkaa"
            >
              Замовити послугу
            </a>
          </div>
          <div class="pricing-plan pricing-plan--complete">
            <header className="pricing-plan__header header-pricing-plan">
              <div className="header-pricing-plan__title-block">
                <h3 className="header-pricing-plan__title">
                  Реклама у ТікТок/Інстаграм ⭐ <br />
                </h3>
                <span>Гарантія переглядів: 200.000 людей 🔥</span>
              </div>
              <p className="header-pricing-plan__price">від 3000 грн</p>
              <p className="header-pricing-plan__paragraph">
                {' '}
                Можливі варіанти
              </p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  мінімум 1 відео - 6.000грн Виїзд на відкриття/ огляд
                  магазину(салону, тощо) - 10.000₴ + дорога 🤍 Інстаграм: 3-4
                  сторіс: 3.000грн (з підводками)
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">Пост: 5.000грн</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">Reels: 6.000грн</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Фото-макет: 1.500грн
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Відео-макет: 1600грн
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Виїзд на відкриття: 5.000грн + дорога🫶
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Бартер: дитячі товари/одяг, меблі, бьюті салони, шоу,
                  інтерв’ю, тощо.
                </p>
              </li>
            </ul>
            <a
              className="block rounded-full bg-gradient-rainblue py-3 px-7 text-center text-xl font-semibold text-deep-blue transition duration-500
              hover:bg-blue hover:text-white"
              href="https://t.me/homushkaa"
            >
              Замовити рекламу
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prices;
