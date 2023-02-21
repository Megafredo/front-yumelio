//& Import SCSS
import './ThemeBtn.scss';

//& Import modules
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

//& Imports components
import { toggleTheme } from '../../Store/Reducers/Theme';
import { animateTypeSpring } from '../../Utils/Animations';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const themeOptions = animateTypeSpring('theme', 'x', 0, 0);

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const { boolean, mode } = useSelector((state: any) => state.themeSlice);
  const titleMode = boolean === true ? 'Dark' : 'Light';

  return (
    <>
      <motion.div className="theme" {...themeOptions}>
        <input id="theme" className="theme__button" type="checkbox" onClick={() => dispatch(toggleTheme(boolean))} role="checkbox" defaultChecked={mode === 'dark' ? true : false}></input>
        <label htmlFor="theme">{titleMode}</label>
      </motion.div>
    </>
  );
};

export default ThemeBtn;
