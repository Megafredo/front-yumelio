//& Import SCSS
import './Work.scss';
import { ReactComponent as FullStackTitleSVG } from './Svg/01_FullStack.svg';
import { ReactComponent as FullStackSVG } from './Svg/FullStack.svg';
// import { ReactComponent as GateSVG } from '../../Assets/img/Gate.svg';
import { ReactComponent as SurfaceSVG } from '../../Assets/img/Surface.svg';
import { ReactComponent as FrontEndTitleSVG } from './Svg/01_FullStack.svg';
import { ReactComponent as BackEndTitleSVG } from './Svg/01_FullStack.svg';
import { ReactComponent as GraphisteTitleSVG } from './Svg/01_FullStack.svg';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';




const Work = ({ id, title, color, description }: any) => {

  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  const [reverse, setReverse] = useState(false);
  const isEven = (id: number) => id % 2 === 0;

  useEffect(() => {
    isEven(id) && setReverse(true);
  }, [id]);


  const sectionSVG = () => {
    if (title === 'FullStack') return <FullStackTitleSVG className="container__work__section__info__title--fullstack" />;
    if (title === 'FrontEnd') return <FrontEndTitleSVG className="container__work__section__info__title--frontend" />;
    if (title === 'BackEnd') return <BackEndTitleSVG className="container__work__section__info__title--backend" />;
    if (title === 'Graphiste') return <GraphisteTitleSVG className="container__work__section__info__title--graphiste" />;
  };

  return (
    <>
      <div className="container__work">
        <div className="container__work__section">

          {!isEven(id) && mediaScreen !== 'mobile' &&  (
            <>
              <div className="container__work__section__info">
                <div className="container__work__section__info__title">{sectionSVG()}</div>

                <div className="container__work__section__info__description">
                  <span>
                    {description.map((element: any) => (
                      <p key={uuidv4()}>
                        {element}
                        <br />
                        <br />
                      </p>
                    ))}
                  </span>
                </div>
              </div>
              <div className="container__work__section__graphic">
                <FullStackSVG className="test" />
              </div>
            </>
          )}

          {/*  */}
          {isEven(id) && mediaScreen !== 'mobile' && (
            <>
           
                <div className="container__work__section__graphic">
                <SurfaceSVG className="test"/>
              </div>
              <div className="container__work__section__info flex-row-reverse">
                <div className="container__work__section__info__title">{sectionSVG()}</div>

                <div className="container__work__section__info__description">
                  <span>
                    {description.map((element: any) => (
                      <p key={uuidv4()}>
                        {element}
                        <br />
                        <br />
                      </p>
                    ))}
                  </span>
                </div>
              </div>
            </>
          )}

          {mediaScreen === 'mobile' && ( 
             <>
              <div className="container__work__section__info flex-row-reverse">
                <div className="container__work__section__info__title">{sectionSVG()}</div>

                <div className="container__work__section__info__description">
                  <span>
                    {description.map((element: any) => (
                      <p key={uuidv4()}>
                        {element}
                        <br />
                        <br />
                      </p>
                    ))}
                  </span>
                </div>
              </div>
              <div className="container__work__section__graphic">
                <SurfaceSVG className="test" />
              </div>
            </>
                      )}


        </div>
      </div>

     
    </>
  );
};

export default Work;
