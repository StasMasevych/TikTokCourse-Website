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
        {/* List */}
        <div className="prices__grid grid-prices">
          <div class="pricing-plan pricing-plan--complete">
            <header className="pricing-plan__header header-pricing-plan">
              <div className="header-pricing-plan__title-block">
                <h3 className="header-pricing-plan__title">
                  ТікТок Курс <br />
                </h3>
                <span>Standard 🔥</span>
              </div>
              <p className="header-pricing-plan__price">4 999грн</p>
              <p className="header-pricing-plan__paragraph">Що включає курс</p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  68 авторських сторінок теорія/практика/монетизація🔥:з
                  найефективнішим алгоритмом, всіма моїми лайфхаками та
                  особистими фішками потрапляння з кожним відео у РЕК з 0 ❗️
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  ~10 способів монетизації 💸
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  40 форматів відео, які залетять з 0❗️
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  схема набору 20.000 підписників за 2 відео!💥
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  схема виходу з воронки 500 переглядів
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  схема виходу з тіньового бану
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  просування хештегами🔥 та багато іншого!💥💥💥
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
              <p className="header-pricing-plan__price">9 999грн</p>
              <p className="header-pricing-plan__paragraph">Що включає курс</p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Все, що є у Стандарт Курсі🔥
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  ❗️УВАГА❗️👉 Моє кураторство Вашим профілем ДО РЕЗУЛЬТАТУ! 🔥
                  без обмежень у часі😌 і так - це ексклюзив! Я особисто
                  допомагаю доводити кожне ваше відео у рек 😎 Аналізуємо кожне
                  відео кожен день 🔥 Поки не дійдемо бажаного результату в
                  розвитку і заробітку - не закінчуємо співпрацю!❤️‍🔥
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
                <h3 className="header-pricing-plan__title text-center">
                  Ведення ТікТоку повністю під 🔑
                  <br />
                </h3>
                <span> Особисто мною 😎 </span>
              </div>
              <p className="header-pricing-plan__price text-center">
                2 000-3 000грн/ 1 відео
              </p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  оплата лише за відео у рек🔥 з перших відео😈 *контент, який
                  набрав менше 10.000 переглядів залишається у подарунок🎁
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  отримуєте значно більше контенту, ніж купуєте🔥 *для розгону
                  активності та особливо з 0 треба буде більше відео, більше
                  контенту🔥
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  оформлення профілю/ реоформлення профілю впродовж співпраці за
                  потребою{' '}
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">зйомка</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  камера: IPhone 13 Pro Max
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  ідеї/ сценарії /пошук трендів{' '}
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
                  необхідності
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  також моя участь у відео, як моделі/актриси(за освітою я
                  актриса🙂)та впізнаваного тіктокера *відео зі мною завжди
                  набирають більше🔥
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
                  можливий виїзд на локації *сплачується окремо
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  можлива зйомка на студії + проф.світло + проф. відеокамера
                  (оплачується окремо)
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  постійний звʼязок з вами та виконання ваших запитів
                  (враховуючи алгоритм тіктоку) у домовлені дедлайни
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
                <h3 className="header-pricing-plan__title text-center">
                  Реклама у ТікТок/Інстаграм ⭐ <br />
                </h3>
                <span className="text-center">
                  Гарантія переглядів: 100 000 людей 🔥
                </span>
              </div>
              <p className="header-pricing-plan__price ">від 2 000 грн</p>
              <p className="header-pricing-plan__paragraph">
                {' '}
                Можливі варіанти
              </p>
            </header>
            <ul className="pricing-plan__list list-pricing-plan">
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Фото-макет: 2 000грн
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Відео-макет: 3 000грн
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  1 сторіс: 1 500грн, 3 сторіс - 2 500грн *враховуючи «підігрів»
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Безліміт сторіс (у день реклами) - 5 000грн
                </p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">Пост: 4 000грн</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">Reels: 6 000грн</p>
              </li>
              <li className="list-pricing-plan__item item-list-pricing-plan">
                <span className="item-list-pricing-plan__icon">✅</span>
                <p className="item-list-pricing-plan__text">
                  Виїзд на відкриття/ локацію/ захід: 12 000грн
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
