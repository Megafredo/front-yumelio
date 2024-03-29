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
import * as Svg from './img/svg';
import * as leaf from './img/png';

//& Imports Types
import { WorkTypes } from './Types';
import { RootState } from '../../Store';

//& Animations
import * as animate from '../../Utils/Animations/animate';

const Work = ({ id, title, subtitle, color, description }: WorkTypes) => {
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

  const [reverse, setReverse] = useState(false);
  const isEven = (id: number) => id % 2 === 0;

  useEffect(() => {
    isEven(id) && setReverse(true);
  }, [id]);

  const sidebarOptionDesktop = {
    to: title.secondLine.toLowerCase(),
    offsetValueFullstack: -400,
    offsetValueFrontend: -300,
    offsetValueBackend: -400,
    offsetValueWebdesigner: -470,
  };

  const sidebarOptionMobile = {
    to: title.secondLine.toLowerCase(),
    offsetValueFullstack: -100,
    offsetValueFrontend: -25,
    offsetValueBackend: -25,
    offsetValueWebdesigner: -25,
  };

  const sectionSubtitleSVG = (titleName: string) => {
    if (subtitle.secondLine === `${titleName}`) {
      return (
        <span className="container__work__section__info__subtitle--number" style={{ left: `${mediaScreen === 'desktop' ? '2rem' : '1rem'}` }}>
          <motion.p {...animate.subtitleNumber}>0{id}</motion.p>
          <motion.span className="container__work__section__info__subtitle--after" style={{ backgroundColor: `${color}` }} {...animate.subtitleSeparator}></motion.span>
          <motion.span>
            <motion.p className="container__work__section__info__subtitle--first-line" {...animate.subtitleFirstLine}>
              {subtitle.firstLine}
            </motion.p>
            <motion.p className="container__work__section__info__subtitle--second-line" {...animate.subtitleSecondtLine} style={{ color: color }}>
              {subtitle.secondLine}
            </motion.p>
          </motion.span>
        </span>
      );
    }
  };

  const sectionGraphicSVG = () => {
    return (
      <div className="container__work__section__graphic">
        <Element name={title.secondLine.toLowerCase()} className="section">
          <div className={`container__work__section__graphic__zone--${title.secondLine.toLowerCase()}`}>
            <Svg.HexaGraphic style={{ fill: `${color}` }} />
            {title.secondLine === 'FULLSTACK' && (
              <>
                <Svg.Profile className="container__work__section__graphic__profile" />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="0.04" alt="A single green leaf that is blurred 01" src={leaf.blur01} />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="-0.04" alt="A single green leaf that is blurred 02" src={leaf.blur02} />
                <img className="container__work__section__graphic__leaf__blur" data-parallax-axis="0.08" alt="A single green leaf that is blurred 03" src={leaf.blur03} />
              </>
            )}
            {title.secondLine === 'FRONTEND' && <Svg.FrontEnd className="container__work__section__graphic__frontend" />}
            {title.secondLine === 'BACKEND' && <Svg.BackEnd className="container__work__section__graphic__backend" />}
            {title.secondLine === 'WEBDESIGNER' && <Svg.Webdesigner className="container__work__section__graphic__webdesigner" />}
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 01" src={leaf.nett01} {...animate.leaf01} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 02" src={leaf.nett02} {...animate.leaf02} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 03" src={leaf.nett03} {...animate.leaf03} />
            <motion.img className="container__work__section__graphic__leaf__nett" alt="A simple green leaf that is nett 04" src={leaf.nett04} {...animate.leaf04} />
            {title.secondLine === 'FULLSTACK' && <Svg.Line1 />}
            {title.secondLine === 'FRONTEND' && <Svg.Line2 />}
            {title.secondLine === 'BACKEND' && <Svg.Line3 />}
            {title.secondLine === 'WEBDESIGNER' && <Svg.Line4 />}
            <motion.div {...animate.smallCross}>
              <Svg.Cross />
            </motion.div>
            <motion.div {...animate.mediumCross}>
              <Svg.Cross />
            </motion.div>
            <motion.div {...animate.largerCross}>
              <Svg.Cross />
            </motion.div>
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
              <span className="container__work__section__info__title">
                {title.secondLine === 'FULLSTACK' && (
                  <>
                    <motion.h1 className="container__work__section__info__title--firstLine" style={{ color: `${color}` }} {...animate.effectCross}>
                      {title.firstLine}
                    </motion.h1>
                    <motion.h1 className="container__work__section__info__title--secondLine" {...animate.effectTitle}>
                      {title.secondLine}
                    </motion.h1>
                    <motion.div className="container__work__section__info__title--separator" style={{ backgroundColor: `${color}` }} {...animate.effectSeparator}></motion.div>
                  </>
                )}
                {title.secondLine !== 'FULLSTACK' && (
                  <>
                    <motion.h2 className="container__work__section__info__title--firstLine" style={{ color: `${color}` }} {...animate.effectCross}>
                      {title.firstLine}
                    </motion.h2>
                    <motion.h2 className="container__work__section__info__title--secondLine" {...animate.effectTitle}>
                      {title.secondLine}
                    </motion.h2>
                    <motion.div className="container__work__section__info__title--separator" style={{ backgroundColor: `${color}` }} {...animate.effectSeparator}></motion.div>
                  </>
                )}
              </span>

              <span>
                {description.map((element) => (
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
