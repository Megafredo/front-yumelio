//& Import SCSS
import './Home.scss';
import { Work } from '../../Components';
import HomeData from '../../Data/Home.json';

const Home = () => {
  return (
    <section className="home">
      {HomeData.map((data) => (
        <Work key={data.id} {...data} />
      ))}
    </section>
  );
};

export default Home;
