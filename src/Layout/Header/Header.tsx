//& Import modules
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

//& Imports SCSS
import './Header.scss';

//& Import Component
import { Logo, Navbar, ThemeBtn, MenuBurger } from '../../Components';

const Header = () => {
  const { mode } = useSelector((state: any) => state.themeSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);
  // const { size } = useSelector((state: any) => state.mediaSlice);
  const { t } = useTranslation();

  // const matchMedia = window.matchMedia('(max-width: 768px)')
  // console.log('matchMedia: ', matchMedia.matches);


//   matchMedia.onchange = (e) => {
//     if (e.matches) {
//     /* the viewport is 600 pixels wide or less */
//     console.log('This is a narrow screen — less than 768px wide.')
//   } else {
//     /* the viewport is more than 600 pixels wide */
//     console.log('This is a wide screen — more than 768px wide.')
//   }
// }

  
  return (
    <header className={`header theme--${mode} media--${mediaScreen}`}>
      <div className="header__available"></div>
      <p>{t('available')}</p>
      <div className="header__container">
        <div className="header__container__logo">
          <Logo />
        </div>
        <div className="header__container__nav">
          <Navbar />
        </div>
        <div className="header__container__menu">
          <MenuBurger />
          <ThemeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
