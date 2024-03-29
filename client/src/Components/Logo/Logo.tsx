//& Import SCSS
import './Styles/Logo.scss';

//& Imports Modules
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

//& Imports Components
import { animateTypeSpring } from '../../Utils/Animations';
import { ReactComponent as LogoSVG } from './Svg/Logo.svg';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const logoOptions = animateTypeSpring('logo', 'x', 0, 0);

const Logo = () => {
  const navigate = useNavigate();
  const redirectHome = () => navigate('/');

  return (
    <>
      <motion.div className="logo" data-cursor-pointer="active">
        <motion.button title="VisualKoding" className="logo__link" tabIndex={0} role="button" onClick={redirectHome} {...logoOptions}>
          <LogoSVG aria-label="Logo de VisualKoding" />
        </motion.button>
      </motion.div>
    </>
  );
};

export default Logo;
