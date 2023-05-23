//& Imports SCSS
import './Header.scss';

//& Imports modules
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

//& Imports Components
import { Logo, Navbar, ThemeBtn, MenuBurger } from '../../Components';

//& Imports Types
import { RootState } from '../../Store';

//& Animations
import { animateWithoutExit } from '../../Utils/Animations';
// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const headerOptions = animateWithoutExit('header', 'y', -20, 0);

const Header = () => {
  const { mode } = useSelector((state: RootState) => state.themeSlice);
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

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
