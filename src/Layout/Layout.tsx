//& Import Module
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import { Spinner } from '../Components';
import { Spinner } from '../Components';
import { setTargetScreen } from '../Store/Reducers/Media';
import { setTargetScrollY } from '../Store/Reducers/Scroll';
import { mousePosition, parallaxEffectOnMouseMove, customCursor } from '../Store/Reducers/Cursor';

// import { setTargetScrollY } from '../Utils/Scroll';
import Cursor from '../Components/Cursor/Cursor';
//& Import SCSS
import './Layout.scss';
import { useEffect } from 'react';

const Layout = () => {
  const { mode } = useSelector((state: any) => state.themeSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  const dispatch = useDispatch();

  //? ADDEVENTLISTENER RESIZE
  useEffect(() => {
    const handleResize = () => {
      dispatch(setTargetScreen());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //? ADDEVENTLISTENER SCROLL
  useEffect(() => {
    const handleScroll = () => {
      dispatch((setTargetScrollY()));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //? ONMOUSEMOVE EFFECT
  useEffect(() => {
    const handleMove = (event: any) => {
      let x = event.clientX;
      let y = event.clientY;

      if (mediaScreen === 'desktop') {
        dispatch(mousePosition({ x, y }));
        // dispatch(magneticCursor());
        dispatch(parallaxEffectOnMouseMove());
        dispatch(customCursor());
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    
    <div className={`layout theme--${mode}`}>
      <Cursor />
      <Header />
      <main className={`media--${mediaScreen}`}>
        {/* <Spinner /> */}
        <Spinner />
        <Outlet />
      </main>
      <Footer />
      </div>

  );
};

export default Layout;
