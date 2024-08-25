import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-64 bg-red pt-10">
      <div className="mx-auto w-10/12">
        {/* w-10/12  */}
        <SocialMediaIcons />
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="font-playfair text-2xl font-semibold text-yellow">
            ТікТок Курс
          </p>
          <p className="text-md font-playfair text-yellow">
            ©{currentYear} ТікТок Курс. Всі права захищено
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
