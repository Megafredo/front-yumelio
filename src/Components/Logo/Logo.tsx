//& Import SCSS
import './Logo.scss';
import { ReactComponent as LogoSVG } from './Logo.svg';

//& Imports Modules
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  const redirectHome = () => navigate('/');

  return (
    <>
      <div className="logo">
        <button className="logo__link" tabIndex={0} role="button" onClick={redirectHome}>
          <LogoSVG />
          {/* <span className="logo__link__name">VisualKoding</span> */}
        </button>
      </div>
    </>
  );
};

export default Logo;
