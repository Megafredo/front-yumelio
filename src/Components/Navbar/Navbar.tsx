//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

//& Import Routes
import { Router } from '../../Routes/Routes';

const Navbar = () => {

  const { mode } = useSelector((state: any) => state.navBarSlice);

  return (
    <nav className="navbar">
      {mode === 'active' && 
      <ul>
        {Router.map(
          ({ id, isNav, name, mainPath }) =>
            isNav && (
              <li key={id}>
                <NavLink className={({ isActive }) => (isActive ? 'navbar__item--active' : 'navbar__item')} to={mainPath} role="link">
                  {name}
                </NavLink>
              </li>
            )
        )}
        </ul>
      }
    </nav>
  );
};

export default Navbar;
