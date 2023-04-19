//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

//& Imports Components
import { Router } from '../../Routes/Routes';
import { animateWithExit, animateChildren, animateParent } from '../../Utils/Animations';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate, exitAxis, valueExitAxis)
const navbarOptions = animateWithExit('navbar', 'y', 20, 0, 'y', -20);
const navbarParentOptions = animateParent('navbar');
const navBarChildrenOptions = animateChildren();


const Navbar = () => {
  const { mode } = useSelector((state: any) => state.navBarSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  return (
    <nav className="navbar">
      {(mode === 'active' || mediaScreen === 'desktop') && (
        <motion.ul variants={navbarParentOptions} initial="hidden" animate="visible" exit="exit">
          {Router.map(
            ({ id, isNav, name, mainPath }) =>
              isNav && (
                <motion.li key={id} variants={navBarChildrenOptions}>
                  <NavLink className={({ isActive }) => (isActive ? 'navbar__item--active' : 'navbar__item')} to={mainPath} role="link" data-cursor-pointer="active">
                    {name}
                  </NavLink>
                </motion.li>
              )
          )}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
