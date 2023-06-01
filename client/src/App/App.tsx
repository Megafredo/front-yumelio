//~ Import style
import './App.scss';

//~ Import intern
import '../Assets/i18n';

//~ Imports Components
import { mainRoutes } from '../Routes/Routes';
import Layout from '../Layout/Layout';

//~ Import Module
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {mainRoutes}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export { App };
