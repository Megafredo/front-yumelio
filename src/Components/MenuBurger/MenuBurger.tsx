//& Import SCSS
import './MenuBurger.scss';

//& Import Modules
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenuBurger } from '../../Store/Reducers/NavBar';

const MenuBurger = () => {

  const dispatch = useDispatch();
  const { boolean, mode } = useSelector((state: any) => state.navBarSlice);

  return (
    <>
      <div className="menu">
        {/* <input className="menu__burger" type="checkbox" id="menu" role="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}></input> */}
        <input className="menu__burger" type="checkbox" id="menu" role="checkbox"  onClick={() => dispatch(toggleMenuBurger(boolean))}></input>
        <div className="menu__burger__rods"></div>
        <label htmlFor="menu">Menu</label>
      </div>
 
    </>
  );
};

export default MenuBurger;
