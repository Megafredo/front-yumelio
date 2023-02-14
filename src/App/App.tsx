//~ Import style
import './App.scss';

//~ Import intern
import '../Assets/i18n';

//~ Imports Components
import { mainRoutes } from '../Routes/Routes';
import Layout from '../Layout/Layout';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {mainRoutes}
      </Route>
    </Routes>
  );
};

export { App };
