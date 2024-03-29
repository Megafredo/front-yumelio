//& Import SCSS
import './Styles/MenuBurger.scss';

//& Import Modules
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

//& Imports Components
import { toggleMenuBurger } from '../../Store/Reducers/NavBar';

//& Animations
import { animateTypeSpring } from '../../Utils/Animations';
// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const menuBurgerOptions = animateTypeSpring('menuBurger', 'x', 0, 0);

//& Types
import { RootState } from '../../Store';

const MenuBurger = () => {
  const dispatch = useDispatch();
  const { boolean, mode } = useSelector((state: RootState) => state.navBarSlice);

  return (
    <>
      <motion.div className="menu" {...menuBurgerOptions} data-cursor-pointer="active">

        <input className="menu__burger" type="checkbox" id="menu" role="checkbox" onClick={() => dispatch(toggleMenuBurger())} defaultChecked={mode === 'active' ? true : false}></input>

        <div className="menu__burger__rods"></div>
        <label htmlFor="menu">Menu</label>
      </motion.div>
    </>
  );
};

export default MenuBurger;
