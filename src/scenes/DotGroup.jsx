import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="fixed top-[60%] right-7 flex flex-col gap-6">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === 'home' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('home')}
      />

      <AnchorLink
        href="#про мене"
        className={`${
          selectedPage === 'Про мене' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Про мене')}
      />
      <AnchorLink
        href="#курс"
        className={`${
          selectedPage === 'Курс' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Курс')}
      />

      <AnchorLink
        href="#результати"
        className={`${
          selectedPage === 'Результати' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Результати')}
      />

      <AnchorLink
        href="#відгуки"
        className={`${
          selectedPage === 'Відгуки' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Відгуки')}
      />

      <AnchorLink
        href="#питання"
        className={`${
          selectedPage === 'Питання' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Питання')}
      />

      <AnchorLink
        href="#контакт"
        className={`${
          selectedPage === 'Контакт' ? selectedStyles : 'bg-dark-grey'
        } h-3 w-3 rounded-full`}
        onClick={() => setSelectedPage('Контакт')}
      />
    </div>
  );
};

export default DotGroup;
