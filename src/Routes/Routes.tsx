import { NoPage, Home, Competences, Projects, Contact, Login } from '../Pages';
//~ Import Module
import { Route } from 'react-router-dom';

const Router = [
  { id: 1, isNav : true, name: 'Accueil', mainPath: '/', mainElement: <Home /> },
  { id: 2, isNav : false, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, isNav : true, name: 'Compétences', mainPath: '/competences', mainElement: <Competences /> },
  { id: 4, isNav : true, name: 'Projets', mainPath: '/projects', mainElement: <Projects /> },
  { id: 5, isNav : true, name: 'Contact', mainPath: '/contact', mainElement: <Contact /> },
  { id: 6, isNav : true, name: 'Connexion', mainPath: '/login', mainElement: <Login /> },
];

//& Router map
const mainRoutes = Router.map(({ id, mainPath, mainElement }) => <Route key={id} path={mainPath} element={mainElement} />);

// const articleRoutes = Router.map(({ id, articlePath, articleElement }) => <Route key={id} path={articlePath} element={articleElement} />);

// const { articlePath, articleElement } = ArticlesRoutes;
// const articleRoutes = <Route path={articlePath} element={articleElement} />;


export { Router, mainRoutes };