//& Import SCSS
import './MenuBurger.scss';

//& Import Modules
import { useSelector, useDispatch } from 'react-redux';

// const dispatch = useDispatch();

const MenuBurger = () => {
  return (
    <>
        <div className="menu">
          <input className="menu__burger" type="checkbox"></input>
          <div className="menu__burger__rods"></div>
          <label>Menu</label>
      </div>
    </>
  );
};

export default MenuBurger;
