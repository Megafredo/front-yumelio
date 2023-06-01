//& Imports Modules
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

//& Imports Data
import MetaData from '../../Data/MetaData.json';

const Seo = () => {
  const location = useLocation();
  const titleLocationPage = location.pathname.slice(1);
  const pathName = location.pathname;
  return (
    <>
      {MetaData.map(
        ({ pageName, seoTitle, seoMetaContent }): any =>
          pageName === titleLocationPage && (
            <Helmet key={uuidv4()}>
              <title >{seoTitle}</title>
              <meta name="description" content={seoMetaContent} />
              <link rel="canonical" href={`https://www.visualkoding.com` + pathName}></link>
            </Helmet>
          )
      )}
    </>
  );
};

export default Seo;
