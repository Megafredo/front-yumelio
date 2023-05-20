//& Import SCSS
import './Home.scss';
import { Work } from '../../Components';
import HomeData from '../../Data/Home.json';

interface HomeData {
  id: number;
  title: object;
  description: Array<string>;
}

const Home = () => {
  return (
    <section className="home">
      {HomeData.map((data: HomeData) => (
        <Work key={data.id} {...data} />
      ))}
    </section>
  );
};

export default Home;
