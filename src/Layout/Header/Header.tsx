//& Import modules
import { useSelector } from 'react-redux';

//& Imports SCSS
import './Header.scss';

//& Import Component
import { Logo, Navbar, ThemeBtn, MenuBurger } from '../../Components';

const Header = () => {
  const { mode } = useSelector((state: any) => state.themeSlice);

  return (
    <header className={`header theme--${mode}`}>
      <div className="header__available"></div>
      <p>Disponible</p>
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
