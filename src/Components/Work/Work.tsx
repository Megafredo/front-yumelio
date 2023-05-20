//& Import SCSS
import './Styles/Work.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

//& Imports Components
import { Sidebar } from '../../Components';
import { ReactComponent as HexaGraphicSVG } from './Svg/HexaGraphic.svg';

import { ReactComponent as Line1SVG } from './Svg/Line_01.svg';
import { ReactComponent as Line2SVG } from './Svg/Line_02.svg';
import { ReactComponent as Line3SVG } from './Svg/Line_03.svg';
import { ReactComponent as Line4SVG } from './Svg/Line_04.svg';
import { ReactComponent as Cross } from './Svg/Cross.svg';
import { ReactComponent as ProfileSVG } from '../../Assets/img/iconsGraphic/Profile.svg';
import { ReactComponent as FrontEndSVG } from '../../Assets/img/iconsGraphic/FrontEnd.svg';
import { ReactComponent as BackEndSVG } from '../../Assets/img/iconsGraphic/BackEnd.svg';
import { ReactComponent as WebdesignerSVG } from '../../Assets/img/iconsGraphic/Designer.svg';

import { leafAnimateInfinite } from '../../Utils/Animations';

import LeafBlur01 from '../../Assets/img/leafs/leaf-blur-01.png';
import LeafBlur02 from '../../Assets/img/leafs/leaf-blur-02.png';
import LeafBlur03 from '../../Assets/img/leafs/leaf-blur-03.png';

import LeafNett01 from '../../Assets/img/leafs/leaf-nett-01.png';
import LeafNett02 from '../../Assets/img/leafs/leaf-nett-02.png';
import LeafNett03 from '../../Assets/img/leafs/leaf-nett-03.png';
import LeafNett04 from '../../Assets/img/leafs/leaf-nett-04.png';

//(nameKey, (xAxisInitialValue, yAxisInitialValue), (xAxisAnimateValue, yAxisAnimateValue), delay)
const leafAnimate01 = leafAnimateInfinite('leaf__nett01', 0, 4, 4, 0, 0);
const leafAnimate02 = leafAnimateInfinite('leaf__nett02', 0, 4, 4, 0, 0.25);
const leafAnimate03 = leafAnimateInfinite('leaf__nett03', 0, 4, 4, 0, 0.35);
const leafAnimate04 = leafAnimateInfinite('leaf__nett04', 0, 4, 4, 0, 0.55);

//& Animations
import { whileInViewTranslateWithRotate, whileInViewHexagonTranslate, whileInViewRevealBackground, whileInViewTranslateText, whileInViewRevealSelector, whileInViewTranslateAndScale } from '../../Utils/Animations';

const animateSkillSmallNumberTop = whileInViewTranslateAndScale('y', 100);

const Work = ({ id, title, subtitle, color, description }: any) => {
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  const [reverse, setReverse] = useState(false);
  const isEven = (id: number) => id % 2 === 0;

  useEffect(() => {
    isEven(id) && setReverse(true);
  }, [id]);

  const sidebarOptionDesktop = {
    offsetValueFullstack: -400,
    offsetValueFrontend: -300,
    offsetValueBackend: -400,
    offsetValueWebdesigner: -470,
  };

  const sidebarOptionMobile = {
    offsetValueFullstack: -100,
    offsetValueFrontend: -25,
    offsetValueBackend: -25,
    offsetValueWebdesigner: -25,
  };

  const sectionSubtitleSVG = (titleName: string) => {
    if (subtitle.secondLine === `${titleName}`) {
      return (
        <motion.span className="container__work__section__info__subtitle--number" style={{ left: `${mediaScreen === 'desktop' ? '2rem' : '1rem'}` }} {...animateSkillSmallNumberTop}>
          <p>0{id}</p>
          <motion.span className="container__work__section__info__subtitle--after" style={{ backgroundColor: `${color}` }}></motion.span>
          <span>
            <p className="container__work__section__info__subtitle--first-line">{subtitle.firstLine}</p>
            <p className="container__work__section__info__subtitle--second-line" style={{ color: color }}>
              {subtitle.secondLine}
            </p>
          </span>
        </motion.span>
      );
    }
  };

  const sectionGraphicSVG = () => {
    return (
      <div className="container__work__section__graphic">
        <Element name={title.secondLine.toLowerCase()} className="section">
          <div className={`container__work__section__graphic__zone--${title.secondLine.toLowerCase()}`}>
            <HexaGraphicSVG style={{ fill: `${color}` }} />
            {title.secondLine === 'FULLSTACK' && (
              <>
                <ProfileSVG className="container__work__section__graphic__profile" />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="0.04" alt="A single green leaf that is blurred 01" src={LeafBlur01} />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="-0.04" alt="A single green leaf that is blurred 02" src={LeafBlur02} />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="0.08" alt="A single green leaf that is blurred 03" src={LeafBlur03} />
              </>
            )}
            {title.secondLine === 'FRONTEND' && <FrontEndSVG className="container__work__section__graphic__frontend" />}
            {title.secondLine === 'BACKEND' && <BackEndSVG className="container__work__section__graphic__backend" />}
            {title.secondLine === 'WEBDESIGNER' && <WebdesignerSVG className="container__work__section__graphic__webdesigner" />}
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 01" src={LeafNett01} {...leafAnimate01} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 02" src={LeafNett02} {...leafAnimate02} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 03" src={LeafNett03} {...leafAnimate03} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 04" src={LeafNett04} {...leafAnimate04} />
            {title.secondLine === 'FULLSTACK' && <Line1SVG />}
            {title.secondLine === 'FRONTEND' && <Line2SVG />}
            {title.secondLine === 'BACKEND' && <Line3SVG />}
            {title.secondLine === 'WEBDESIGNER' && <Line4SVG />}
            <Cross />
            <Cross />
            <Cross />
          </div>
        </Element>
      </div>
    );
  };

  return (
    <>
      <div className="container__work">
        <div className={`container__work__section  ${mediaScreen !== 'desktop' && !reverse && 'flex-column-reverse'}`}>
          {reverse && sectionGraphicSVG()}

          {mediaScreen !== 'mobile' ? <Sidebar {...sidebarOptionDesktop} /> : <Sidebar {...sidebarOptionMobile} />}

          <div className={`container__work__section__info`}>
            <div className="container__work__section__info__subtitle">{sectionSubtitleSVG(subtitle.secondLine)}</div>

            <div className="container__work__section__info__description">
              <motion.span className="container__work__section__info__title">
                {title.secondLine === 'FULLSTACK' && (
                  <>
                    <h1 className="container__work__section__info__title--firstLine" style={{ color: `${color}` }}>
                      {title.firstLine}
                    </h1>
                    <h1 className="container__work__section__info__title--secondLine">{title.secondLine}</h1>
                    <div className="container__work__section__info__title--separator" style={{ backgroundColor: `${color}` }}></div>
                  </>
                )}
                {title.secondLine !== 'FULLSTACK' && (
                  <>
                    <h2 className="container__work__section__info__title--firstLine" style={{ color: `${color}` }}>
                      {title.firstLine}
                    </h2>
                    <h2 className="container__work__section__info__title--secondLine">{title.secondLine}</h2>
                    <div className="container__work__section__info__title--separator" style={{ backgroundColor: `${color}` }}></div>
                  </>
                )}
              </motion.span>

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
          {!reverse && sectionGraphicSVG()}
        </div>
      </div>
    </>
  );
};

export default Work;
