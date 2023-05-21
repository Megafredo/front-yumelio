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
import TitleCategorie from '../TitleCategorie/TitleCategorie';
import * as Svg from './Svg';

//& Imports Types
import { SkillData } from './Types';
import { RootState } from '../../Store';

//& Animations
import * as animate from '../../Utils/Animations/animate';

const Skill = ({ id, title, titleBackground, skills, gap, color, logotypes }: SkillData) => {
  const backgroundColor = { backgroundColor: `${color}` };
  const borderColor = { borderColor: `${color}` };

  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

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
    const softSkillGreenArea: HTMLElement | null = document.querySelector('.soft-skill__green-area');
    const hobbiesGreenArea: HTMLElement | null = document.querySelector('.hobbies__green-area');
    const softSkillSquare: HTMLElement | null = document.querySelector('.hexagon__container__soft-skill');
    const hobbiesSquare: HTMLElement | null = document.querySelector('.hexagon__container__hobbies');

    if (softSkillGreenArea !== null && hobbiesGreenArea !== null) {
      if (isInView) {
        softSkillGreenArea.style.display = 'block';
        hobbiesGreenArea.style.display = 'block';

        softSkillSquare?.classList.add('square-animation');
        hobbiesSquare?.classList.add('square-animation');
      } else {
        softSkillGreenArea.style.display = 'none';
        hobbiesGreenArea.style.display = 'none';

        softSkillSquare?.classList.remove('square-animation');
        hobbiesSquare?.classList.remove('square-animation');
      }
    }
  });

  return (
    <>
      <section>
        <TitleCategorie title={title} color={color} />

        {title === 'Compétences' && (
          <div className="hexagon__container">
            <motion.div {...animate.hexagonSoftSkill} ref={hexagonContainer}>
              <Svg.SoftSkill className="hexagon__container__soft-skill square-animation" />
            </motion.div>
            <motion.div {...animate.hexagonHobbies} ref={hexagonContainer}>
              <Svg.Hobbies className="hexagon__container__hobbies square-animation" />
            </motion.div>
          </div>
        )}

        {title !== 'Compétences' && (
          <>
            <SkillVelocity baseVelocity={-1}>{titleBackground}</SkillVelocity>
            <SkillVelocity baseVelocity={1}>{titleBackground}</SkillVelocity>

            <div className={`global__container ${reverse && mediaScreen === 'desktop' && 'reverse-row'}`}>
              <motion.span className="skills__big__hexagon__number" style={{ left: `${reverse && mediaScreen === 'desktop' ? '-5rem' : '5rem'}` }} {...animate.skillSmallNumberTop}>
                <p>0{id}</p>
                <motion.span className="skills__big__hexagon__number__after" style={backgroundColor}></motion.span>
              </motion.span>
              <ul className="skills__container__list">
                {listSkills().map((skill) => (
                  <motion.li className={`skills__container__list__item__align${reverse ? '--end' : '--start'}`} {...(!reverse && mediaScreen === 'desktop' ? animate.translateTextRight : animate.translateTextLeft)} key={uuidv4()}>
                    {skill}
                    <motion.span className="reveal-bg" {...(!reverse && mediaScreen === 'desktop' ? animate.revealBackgroundRight : animate.revealBackgroundLeft)}></motion.span>
                    <motion.span className="selector-bg" {...(!reverse && mediaScreen === 'desktop' ? animate.revealSelectorRight : animate.revealSelectorLeft)} style={backgroundColor}></motion.span>
                  </motion.li>
                ))}
              </ul>

              <div className="skills__container">
                <motion.div className={`skills__big__hexagon ${reverse ? 'skills__big__hexagon__right' : 'skills__big__hexagon__left'}`} style={backgroundColor} {...(reverse ? animate.bigHexagonTranslateRight : animate.bigHexagonTranslateLeft)}>
                  <span className="skills__big__hexagon__before" style={backgroundColor}></span>
                  <span className="skills__big__hexagon__after" style={backgroundColor}>
                    <Svg.GraphicHexagon />
                  </span>
                </motion.div>

                <div className="skills__grid">
                  {skills.map((skill, index: number) => (
                    <div className="skills__grid__hexagon" key={uuidv4()}>
                      <motion.div
                        className={`skills__grid__hexagon__icon ${gap.find((element) => element === skill) ? `gap ${skill}` : `${skill}`}`}
                        style={backgroundColor}
                        {...(reverse && mediaScreen === 'desktop' ? animate.smallHexagonTranslateLeft : animate.smallHexagonTranslateRight)}
                        {...(mediaScreen !== 'desktop' && animate.smallHexagonTranslateTopMobile)}
                      >
                        <span className="skills__grid__hexagon__icon__before" style={backgroundColor}></span>
                        <span className="skills__grid__hexagon__icon__after" style={backgroundColor}>
                          <img src={logotypes[index] ?? ''} alt="logo"></img>
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${reverse ? 'svg__wrapper' : 'svg__wrapper svg__wrapper--left'}`}>
              <motion.div className="svg__icons-graphic" {...animate.iconsGraphic}>
                {title === 'Front-End' && <Svg.FrontEnd className="svg__icons-graphic__front-end" />}
                {title === 'Back-End' && <Svg.BackEnd className="svg__icons-graphic__back-end" />}
                {title === 'Graphiste' && <Svg.Designer className="svg__icons-graphic__designer" />}
                {title === 'Technologies Diverses' && <Svg.Other className="svg__icons-graphic__other" />}
                {title === 'Veille Informatique' && <Svg.Search className="svg__icons-graphic__search" />}
                <Svg.Grid className="svg__icons-graphic--background" />
              </motion.div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Skill;
