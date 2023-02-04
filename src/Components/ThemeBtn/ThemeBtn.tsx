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
        <input className="theme__button" type="checkbox" onClick={() => dispatch(toggleTheme(boolean))} ></input>
        <label>{titleMode}</label>
      </div>
    </>
  );
};

export default ThemeBtn;
