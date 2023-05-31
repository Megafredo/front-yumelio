//& Import SCSS
import './Home.scss';
import { Work } from '../../Components';
import HomeData from '../../Data/Data.json';

const Home = () => {

  const { profil: ProfilData } = HomeData[0];
  return (
    <section className="home">
      {ProfilData.map((data) => (
        <Work key={data.id} {...data} />
      ))}
    </section>
  );
};

export default Home;
