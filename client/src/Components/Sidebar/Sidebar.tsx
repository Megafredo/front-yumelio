//& Import Scss
import './Styles/Sidebar.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

//& Import Types
import { SidebarProps } from './Types';

const Sidebar = ({ offsetValueFullstack, offsetValueFrontend, offsetValueBackend, offsetValueWebdesigner }: SidebarProps) => {
  return (
    <motion.nav className="sidebar">
      <Link activeClass={`sidebar__fullstack--active sidebar__color__fullstack`} title='Ancrage Fullstack' href='#fullstack' to="fullstack" spy={true} smooth={true} offset={offsetValueFullstack} duration={50}>
        <div className={`sidebar__fullstack`} data-cursor-pointer="active"></div>
      </Link>
      <Link activeClass={`sidebar__frontend--active sidebar__color__frontend`}  title="Ancrage Frontend" href='#frontend' to="frontend" spy={true} smooth={true} offset={offsetValueFrontend} duration={50}>
        <div className={`sidebar__frontend`} data-cursor-pointer="active"></div>
      </Link>
      <Link activeClass={`sidebar__backend--active sidebar__color__backend`}  title="Ancrage Backend" href='#backend'  to="backend" spy={true} smooth={true} offset={offsetValueBackend} duration={50}>
        <div className={`sidebar__backend`} data-cursor-pointer="active"></div>
      </Link>
      <Link activeClass={`sidebar__webdesigner--active sidebar__color__webdesigner`} title="Ancrage Webdesigner" href='#webdesigner' to="webdesigner" spy={true} smooth={true} offset={offsetValueWebdesigner} duration={50}>
        <div className={`sidebar__webdesigner`} data-cursor-pointer="active"></div>
      </Link>
    </motion.nav>
  );
};
export default Sidebar;
