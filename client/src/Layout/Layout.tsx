//& Import SCSS
import './Layout.scss';

//& Import Module
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Spinner } from '../Components';
// import { setTargetScrollY } from '../Utils/Scroll';
import { setTargetScreen } from '../Store/Reducers/Media';
import { setTargetScrollY } from '../Store/Reducers/Scroll';
import { mousePosition, parallaxEffectOnMouseMove, customCursor } from '../Store/Reducers/Cursor';
import Cursor from '../Components/Cursor/Cursor';

//& Imports Types
import { RootState } from '../Store';

const Layout = () => {
  const { mode } = useSelector((state: RootState) => state.themeSlice);
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

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
      dispatch(setTargetScrollY());
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //? ONMOUSEMOVE EFFECT
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      let x = event.clientX;
      let y = event.clientY;

      dispatch(mousePosition({ x, y }));
      // dispatch(magneticCursor());
      dispatch(parallaxEffectOnMouseMove());
      dispatch(customCursor());
    };

    if (mediaScreen === 'desktop') {
      window.addEventListener('mousemove', handleMove);
      return () => {
        window.removeEventListener('mousemove', handleMove);
      };
    }
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
