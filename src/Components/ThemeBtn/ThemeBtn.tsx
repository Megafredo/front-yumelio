//& Import SCSS
import './Styles/ThemeBtn.scss';

//& Import modules
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

//& Imports components
import { toggleTheme } from '../../Store/Reducers/Theme';
import { animateTypeSpring } from '../../Utils/Animations';
import { ThemeState } from '../../Types/GlobalTypes';

// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const themeOptions = animateTypeSpring('theme', 'x', 0, 0);

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const { mode }: { mode: string } = useSelector((state: ThemeState) => state.themeSlice);
  const titleMode = mode === 'light' ? 'Dark' : 'Light';

  return (
    <>
      <motion.div className="theme" {...themeOptions} data-cursor-pointer="active">
        <input name="theme" id="theme" className="theme__button" type="checkbox" onClick={() => dispatch(toggleTheme())} role="checkbox" defaultChecked={mode === 'dark' ? true : false}></input>
        <label htmlFor="theme">{titleMode}</label>
      </motion.div>
    </>
  );
};

export default ThemeBtn;
