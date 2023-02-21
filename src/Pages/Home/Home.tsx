//& Import modules
import './Home.scss';
import { ReactComponent as GateSVG } from '../../Assets/img/Gate.svg';
import { ReactComponent as SurfaceSVG } from '../../Assets/img/Surface.svg';

import LeafBlur01 from '../../Assets/img/leaf-blur-01.png';
import LeafBlur02 from '../../Assets/img/leaf-blur-02.png';
import LeafBlur03 from '../../Assets/img/leaf-blur-03.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home__contain__left">
        <h1>Développeur Full stack</h1>
        <p>
          Développeur full stack et graphiste expérimenté dans la conception, création de sites web et d’application mobiles. Possède des compétences en développement front-end, back-end, ainsi qu’en design graphique et en UX/UI. Maîtrise des
          technologies telles que HTML/CSS, Javascript, React, NodeJS et des outils graphique comme Photoshop et Illustrator.
        </p>
      </div>
      <div className="home__contain__right">
        <div className="home__contain__right__element">
          <GateSVG />
          <SurfaceSVG />
          <img src={LeafBlur01} />
          <img src={LeafBlur02} />
          <img src={LeafBlur03} />
        </div>
      </div>
    </section>
  );
};

export default Home;
