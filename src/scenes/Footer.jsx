import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="mx-auto w-10/12">
        {/* w-10/12  */}
        <SocialMediaIcons />
        <div className="justify-center text-center md:flex md:justify-between ">
          <p className="font-playfair text-2xl font-semibold text-yellow">
            JANE ESPER
          </p>
          <p className="text-md font-playfair text-yellow">
            ©2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
