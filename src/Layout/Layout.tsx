//& Import Module
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

//& Imports Components
import Footer from './Footer/Footer';
import Header from './Header/Header';
// import { Spinner } from '../Components';
import { Spinner } from '../Components';

//& Import SCSS
import './Layout.scss';

const Layout = () => {

  const { mode } = useSelector((state: any) => state.themeSlice);


  return (
    <div className={`layout theme--${mode}`}>
      <Header />
      <main>
        {/* <Spinner /> */}
        <Spinner />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
