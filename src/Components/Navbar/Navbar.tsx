//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

//& Imports Components
import { Router } from '../../Routes/Routes';
import { animateWithExit } from '../../Utils/Animations';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate, exitAxis, valueExitAxis)
const navbarOptions = animateWithExit('navbar', 'x', 20, 0, 'x', -20);

const Navbar = () => {
  const { mode } = useSelector((state: any) => state.navBarSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  return (
    <nav className="navbar">
      <AnimatePresence>
        {(mode === 'active' || mediaScreen === 'desktop') && (
          <motion.ul {...navbarOptions}>
            {Router.map(
              ({ id, isNav, name, mainPath }) =>
                isNav && (
                  <li key={id}>
                    <NavLink className={({ isActive }) => (isActive ? 'navbar__item--active' : 'navbar__item')} to={mainPath} role="link">
                      {name}
                    </NavLink>
                  </li>
                )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
