//& Import modules
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../Store/Reducers/Theme';
import './ThemeBtn.scss';

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const { boolean } = useSelector((state: any) => state.themeSlice);
  const titleMode = boolean === true ? 'Dark' : 'Light';

  return (
    <>
      <div className="theme">
        <input id="theme" className="theme__button" type="checkbox" onClick={() => dispatch(toggleTheme(boolean))} role="checkbox"></input>
        <label htmlFor="theme">{titleMode}</label>
      </div>
    </>
  );
};

export default ThemeBtn;
