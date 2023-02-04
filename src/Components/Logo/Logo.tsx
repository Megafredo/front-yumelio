//& Import SCSS
import './Logo.scss';
import { ReactComponent as LogoSVG } from './Logo.svg';

//& Imports Modules
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <div className="logo">
        <NavLink to={'/'}>
          <LogoSVG />
        {/* <span className="logo__name">VisualKoding</span> */}
        </NavLink>
      </div>
    </>
  );
};

export default Logo;
