//& Import Scss
import './Styles/Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

//& Imports Components
import { Router } from '../../Routes/Routes';
import { animateChildren, animateParent } from '../../Utils/Animations';
import { toggleMenuBurger } from '../../Store/Reducers/NavBar';

//& Animations
const navbarParentOptions = animateParent('navbar');
const navBarChildrenOptions = animateChildren();

//& Types
import { RootState } from '../../Store';

const Navbar = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: RootState) => state.navBarSlice);
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

  return (
    <nav className="navbar">
      {(mode === 'active' || mediaScreen === 'desktop') && (
        <motion.ul variants={navbarParentOptions} initial="hidden" animate="visible" exit="exit">
          {Router.map(
            ({ id, isNav, name, mainPath }) =>
              isNav && (
                <motion.li key={id} variants={navBarChildrenOptions}>
                  <NavLink className={({ isActive }) => (isActive ? 'navbar__item--active' : 'navbar__item')} to={mainPath} role="link" data-cursor-pointer="active" onClick={()=> mode === 'active' && dispatch(toggleMenuBurger())}>
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
