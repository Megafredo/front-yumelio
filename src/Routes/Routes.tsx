import { NoPage, Home, Skills, Projects, Contact, Login } from '../Pages';
//~ Import Module
import { Route } from 'react-router-dom';
import i18n from '../Assets/i18n';
import { Navigate } from 'react-router-dom';

// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();


const Router = [
  { id: 1, isNav : false, name: 'NoPage', mainPath: '/404', mainElement: <NoPage /> },
  { id: 2, isNav: false, name: 'NoPage', mainPath: '/*', mainElement: <Navigate to="/404" /> },
  { id: 3, isNav: true, name: i18n.t('route_name_home'), mainPath: '/', mainElement: <Home /> },
  { id: 4, isNav : true, name: i18n.t('route_name_skills'), mainPath: '/skills', mainElement: <Skills /> },
  { id: 5, isNav : true, name: i18n.t('route_name_projects'), mainPath: '/projects', mainElement: <Projects /> },
  { id: 6, isNav : true, name: i18n.t('route_name_contact'), mainPath: '/contact', mainElement: <Contact /> },
  { id: 7, isNav: false, name: i18n.t('route_name_login'), mainPath: '/login', mainElement: <Login /> },
];

//& Router map
const mainRoutes = Router.map(({ id, mainPath, mainElement }) => <Route key={id} path={mainPath} element={mainElement} />);

// const articleRoutes = Router.map(({ id, articlePath, articleElement }) => <Route key={id} path={articlePath} element={articleElement} />);

// const { articlePath, articleElement } = ArticlesRoutes;
// const articleRoutes = <Route path={articlePath} element={articleElement} />;


export { Router, mainRoutes };