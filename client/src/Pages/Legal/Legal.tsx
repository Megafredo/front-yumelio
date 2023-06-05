//~ Import style
import './Styles/Legal.scss';

//& Imports Data
import LegalData from '../../Data/LegalData.json';
import { Fragment } from 'react';

const Legal = () => {
  return (
    <section className="legal">
      {LegalData.map((data) => (
        <Fragment key={data.id}>
          {data.id === 1 ? <h1>{data.title}</h1> : <h2>{data.title}</h2>}
         
          {data.description.map((descriptionData) => (
            <p>{descriptionData}</p>
          ))}
        </Fragment>
      ))}
    </section>
  );
};

export default Legal;
