//& Import Scss
import './Styles/Skill.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'framer-motion';

//& Imports Components
import SkillVelocity from '../SkillVelocity/SkillVelocity';
import { ReactComponent as GraphicHexagonSVG } from './Svg/GraphicHexagon.svg';
import { ReactComponent as HobbiesSVG } from './Svg/Hobbies.svg';
import { ReactComponent as SoftSkillSVG } from './Svg/SoftSkill.svg';
import { ReactComponent as GridSVG } from '../../Assets/img/Grid.svg';

import { ReactComponent as FrontEndSVG } from '../../Assets/img/iconsGraphic/FrontEnd.svg';
import { ReactComponent as BackEndSVG } from '../../Assets/img/iconsGraphic/BackEnd.svg';
import { ReactComponent as DesignerSVG } from '../../Assets/img/iconsGraphic/Designer.svg';
import { ReactComponent as OtherSVG } from '../../Assets/img/iconsGraphic/Other.svg';
import { ReactComponent as SearchSVG } from '../../Assets/img/iconsGraphic/Search.svg';

//& Animations
import { whileInViewTranslateWithRotate, whileInViewHexagonTranslate, whileInViewRevealBackground, whileInViewTranslateText, whileInViewRevealSelector, whileInViewTranslateAndScale } from '../../Utils/Animations';

const Skill = ({ id, title, titleBackground, skills, gap, color, logotypes }: any) => {
  // whileInViewTranslateWithRotate(axis: string, valueAxisInitial: number, valueAxisWhileInViewl: number, valueRotate:number = 0 )
  const animateEffectLozenge = whileInViewTranslateWithRotate('y', -20, 0, 45);
  const animateEffectCross = whileInViewTranslateWithRotate('x', -20, 0);
  const animateEffectTitle = whileInViewTranslateWithRotate('x', 20, 0);
  const animateEffectSeparator = whileInViewTranslateWithRotate('y', 10, 0);

  const animateSmallHexagonTranslateLeft = whileInViewHexagonTranslate('x', 200);
  const animateSmallHexagonTranslateRight = whileInViewHexagonTranslate('x', -200);
  const animateBigHexagonTranslateLeft = whileInViewHexagonTranslate('x', -150);
  const animateBigHexagonTranslateRight = whileInViewHexagonTranslate('x', 150);

  const animateRevealBackgroundLeft = whileInViewRevealBackground('x', -200);
  const animateRevealBackgroundRight = whileInViewRevealBackground('x', 200);

  const animateRevealSelectorLeft = whileInViewRevealSelector('x', 150);
  const animateRevealSelectorRight = whileInViewRevealSelector('x', -150);

  const animateTranslateTextLeft = whileInViewTranslateText('x', -200);
  const animateTranslateTextRight = whileInViewTranslateText('x', 200);

  const animateSkillSmallNumberTop = whileInViewTranslateAndScale('y', 100);

  const animateHexagonSoftSkill = whileInViewTranslateAndScale('x', 0);
  const animateHexagonHobbies = whileInViewTranslateAndScale('x', 0);

  const animateTranslateTextLeftMobile = whileInViewTranslateText('x', -40);
  const animateRevealSelectorLeftMobile = whileInViewRevealSelector('x', 150);
  const animateSmallHexagonTranslateTopMobile = whileInViewHexagonTranslate('y', -20);

  const animateIconsGraphic = whileInViewTranslateAndScale('y', -50);

  const backgroundColor = { backgroundColor: `${color}` };
  const { mediaScreen } = useSelector((state: any) => state.mediaSlice);

  const [reverse, setReverse] = useState(false);
  const isEven = (id: number) => id % 2 === 0;

  useEffect(() => {
    isEven(id) && setReverse(true);
  }, [id]);

  const listSkills = () => {
    const newArraySkills = [];

    for (let i = 0; i < skills.length; i++) {
      const element = skills[i];
      if (element !== 'void') newArraySkills.push(element.toUpperCase());
    }
    return newArraySkills;
  };

  const hexagonContainer = useRef(null);
  const isInView = useInView(hexagonContainer);

  useEffect(() => {
    const softSkillGreenArea: any = document.querySelector('.soft-skill__green-area');
    const hobbiesGreenArea: any = document.querySelector('.hobbies__green-area');
    const softSkillSquare: any = document.querySelector('.hexagon__container__soft-skill');
    const hobbiesSquare: any = document.querySelector('.hexagon__container__hobbies');

    if (softSkillGreenArea !== null && hobbiesGreenArea !== null) {
      if (isInView) {
        softSkillGreenArea.style.display = 'block';
        hobbiesGreenArea.style.display = 'block';

        softSkillSquare.classList.add('square-animation');
        hobbiesSquare.classList.add('square-animation');
      } else {
        softSkillGreenArea.style.display = 'none';
        hobbiesGreenArea.style.display = 'none';

        softSkillSquare.classList.remove('square-animation');
        hobbiesSquare.classList.remove('square-animation');
      }
    }
  });

  return (
    <>
      <section>
        <motion.div className="skills__categorie">
          <motion.div className="skills__categorie__icon">
            <motion.div className="skills__categorie__icon__lozenge" style={{ borderColor: `${color}` }} {...animateEffectLozenge}></motion.div>
            <motion.div className="skills__categorie__icon__cross" {...animateEffectCross}>
              <span className="skills__categorie__icon__cross__before" style={backgroundColor}></span>
              <span className="skills__categorie__icon__cross__after" style={backgroundColor}></span>
            </motion.div>
          </motion.div>
          <motion.h1 {...animateEffectTitle}>{title}</motion.h1>
          <motion.div className="skills__categorie__separator" style={backgroundColor} {...animateEffectSeparator}></motion.div>
        </motion.div>
        {id !== 1 && (
          <>
            <SkillVelocity baseVelocity={-1}>{titleBackground}</SkillVelocity>
            <SkillVelocity baseVelocity={1}>{titleBackground}</SkillVelocity>
          </>
        )}

        {id === 1 && (
          <div className="hexagon__container">
            <motion.div {...animateHexagonSoftSkill} ref={hexagonContainer}>
              <SoftSkillSVG className="hexagon__container__soft-skill square-animation" />
            </motion.div>
            <motion.div {...animateHexagonHobbies} ref={hexagonContainer}>
              <HobbiesSVG className="hexagon__container__hobbies square-animation" />
            </motion.div>
          </div>
        )}

        {id !== 1 && (
          <div className={`global__container ${reverse && mediaScreen === 'desktop' && 'reverse-row'}`}>
            <motion.span className="skills__big__hexagon__number" style={{ left: `${reverse && mediaScreen === 'desktop' ? '-5rem' : '5rem'}` }} {...animateSkillSmallNumberTop}>
              <p>0{id}</p>
              <motion.span className="skills__big__hexagon__number__after" style={backgroundColor}></motion.span>
            </motion.span>
            <ul className="skills__container__list">
              {listSkills().map((skill: Array<string>) => (
                <motion.li className={`skills__container__list__item__align${reverse ? '--end' : '--start'}`} {...(!reverse && mediaScreen === 'desktop' ? animateTranslateTextRight : animateTranslateTextLeft)} key={uuidv4()}>
                  {skill}
                  <motion.span className="reveal-bg" {...(!reverse && mediaScreen === 'desktop' ? animateRevealBackgroundRight : animateRevealBackgroundLeft)}></motion.span>
                  <motion.span className="selector-bg" {...(!reverse && mediaScreen === 'desktop' ? animateRevealSelectorRight : animateRevealSelectorLeft)} style={backgroundColor}></motion.span>
                </motion.li>
              ))}
            </ul>

            <div className="skills__container">
              <motion.div className={`skills__big__hexagon ${reverse ? 'skills__big__hexagon__right' : 'skills__big__hexagon__left'}`} style={backgroundColor} {...(reverse ? animateBigHexagonTranslateRight : animateBigHexagonTranslateLeft)}>
                <span className="skills__big__hexagon__before" style={backgroundColor}></span>
                <span className="skills__big__hexagon__after" style={backgroundColor}>
                  <GraphicHexagonSVG />
                </span>
              </motion.div>

              <div className="skills__grid">
                {skills.map((skill: Array<string>, index: number) => (
                  <div className="skills__grid__hexagon" key={uuidv4()}>
                    <motion.div
                      className={`skills__grid__hexagon__icon ${gap.find((element: any) => element === skill) ? `gap ${skill}` : `${skill}`}`}
                      style={backgroundColor}
                      {...(reverse && mediaScreen === 'desktop' ? animateSmallHexagonTranslateLeft : animateSmallHexagonTranslateRight)}
                      {...(mediaScreen !== 'desktop' && animateSmallHexagonTranslateTopMobile)}
                    >
                      <span className="skills__grid__hexagon__icon__before" style={backgroundColor}></span>
                      <span className="skills__grid__hexagon__icon__after" style={backgroundColor}>
                        <img src={logotypes[index]} alt="logo"></img>
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {id !== 1 && (
          <div className={`${reverse ? 'testgrid' : 'testgrid testgrid--left'}`}>
            <motion.div className="svg__icons-graphic" {...animateIconsGraphic}>
              {title === 'Front-End' && <FrontEndSVG className="svg__icons-graphic__front-end" />}
              {title === 'Back-End' && <BackEndSVG className="svg__icons-graphic__back-end" />}
              {title === 'Graphiste' && <DesignerSVG className="svg__icons-graphic__designer" />}
              {title === 'Technologies Diverses' && <OtherSVG className="svg__icons-graphic__other" />}
              {title === 'Veille Informatique' && <SearchSVG className="svg__icons-graphic__search" />}
              <GridSVG className="svg__icons-graphic--background" />
            </motion.div>
          </div>
        )}
      </section>
    </>
  );
};

export default Skill;
