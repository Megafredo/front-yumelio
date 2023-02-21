//& Import Module
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import { Spinner } from '../Components';
import { Spinner } from '../Components';
import { setTargetScreen } from '../Store/Reducers/Media';

//& Import SCSS
import './Layout.scss';

const Layout = () => {
  const { mode } = useSelector((state: any) => state.themeSlice);
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  const dispatch = useDispatch();

  window.addEventListener('resize', () => {
    dispatch(setTargetScreen());
  });

  window.removeEventListener('resize', () => {
    dispatch(setTargetScreen());
  });

  
  return (
    <div className={`layout theme--${mode}`}>
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
