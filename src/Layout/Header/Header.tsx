//& Imports SCSS
import './Header.scss';

//& Imports modules
import { useSelector,TypedUseSelectorHook } from 'react-redux';
// import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

//& Imports Components
import { Logo, Navbar, ThemeBtn, MenuBurger } from '../../Components';
import { animateWithoutExit } from '../../Utils/Animations';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const headerOptions = animateWithoutExit('header', 'y', -20, 0);

const Header = () => {
  const { mode } = useSelector((state:any) => state.themeSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  // const { t } = useTranslation();

  return (
    <header className={`header theme--${mode} media--${mediaScreen}`}>
      {mediaScreen !== 'mobile' && <motion.div className="header__available" {...headerOptions}></motion.div>}
      {/* <p>{t('available')}</p> */}
      <div className="header__container">
        <div className="header__container__logo">
          <Logo />
        </div>
        <div className="header__container__nav">
          <Navbar />
        </div>
        <div className="header__container__menu">
          {mediaScreen !== 'desktop' && <MenuBurger />}
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
