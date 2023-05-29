//& Import SCSS
import './Styles/ThemeBtn.scss';

//& Import modules
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

//& Imports components
import { toggleTheme } from '../../Store/Reducers/Theme';
import { animateTypeSpring } from '../../Utils/Animations';

//& Imports Types
import { RootState } from '../../Store';

//& Animations
// (nameKey, axis, valueAxisInitial, valueAxisAnimate)
const themeOptions = animateTypeSpring('theme', 'x', 0, 0);

const ThemeBtn = () => {
  
  const dispatch = useDispatch();
  const { mode }: { mode: string } = useSelector((state: RootState) => state.themeSlice);
  const titleMode = mode === 'light' ? 'Dark' : 'Light';

  const inputId = uuidv4();

  return (
    <>
      <motion.div className="theme" {...themeOptions} data-cursor-pointer="active">
        <input name="theme" id={inputId} className="theme__button" type="checkbox" onClick={() => dispatch(toggleTheme())} role="checkbox" defaultChecked={mode === 'dark' ? true : false}></input>
        <label htmlFor={inputId}>{titleMode}</label>
      </motion.div>
    </>
  );
};

export default ThemeBtn;
