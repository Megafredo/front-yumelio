//& Import Scss
import './Skill.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//& Imports Components
import SkillVelocity from '../SkillVelocity/SkillVelocity';
import { ReactComponent as GraphicHexagon } from '../../Assets/img/GraphicHexagon.svg';
import { ReactComponent as Hobbies } from '../../Assets/img/Hobbies.svg';
import { ReactComponent as SoftSkill } from '../../Assets/img/SoftSkill.svg';

//& Animations
import { whileInViewTranslateWithRotate, whileInViewHexagonTranslate, whileInViewRevealBackground, whileInViewTranslateText, whileInViewRevealSelector, whileInViewTranslateAndScale } from '../../Utils/Animations';

const Skill = ({ id, title, titleBackground, skills, gap, color, logotypes }: any) => {
  // whileInViewSkill(axis: string, valueAxisInitial: number, valueAxisWhileInViewl: number, valueRotate:number = 0 )
  const animateEffectLozenge = whileInViewTranslateWithRotate('y', -20, 0, 45);
  const animateEffectCross = whileInViewTranslateWithRotate('x', -20, 0);
  const animateEffectTitle = whileInViewTranslateWithRotate('x', 20, 0);
  const animateEffectSeparator = whileInViewTranslateWithRotate('y', 10, 0);

  const animateSmallHexagonTranslateLeft = whileInViewHexagonTranslate('x', -200);
  const animateSmallHexagonTranslateRight = whileInViewHexagonTranslate('x', 200);
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
  
  const animateTranslateTextLeftMobile = whileInViewTranslateText('x', -100);
  const animateRevealSelectorLeftMobile = whileInViewRevealSelector('x', 150);
  const animateSmallHexagonTranslateTopMobile = whileInViewHexagonTranslate('y', -20)

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

  return (
    <>
      {/* --------------- MEDIA DESkTOP/TABLET --------------- */}
      {mediaScreen !== 'mobile' && (
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

          <SkillVelocity baseVelocity={-1}>{titleBackground}</SkillVelocity>
          <SkillVelocity baseVelocity={1}>{titleBackground}</SkillVelocity>

          {title === 'Compétences' && (
            <div className="hexagon__container">
              <motion.div {...animateHexagonSoftSkill}>
                <SoftSkill className="hexagon__container__soft-skill" />
              </motion.div>
              <motion.div {...animateHexagonHobbies}>
                <Hobbies className="hexagon__container__hobbies" />
              </motion.div>
            </div>
          )}

          {title !== 'Compétences' && (
            <div className="global__container">
              {!isEven(id) && (
                <>
                  <motion.span className="skills__big__hexagon__number" style={{ left: '5rem' }} {...animateSkillSmallNumberTop}>
                    <p>0{id}</p>
                    <motion.span className="skills__big__hexagon__number__after" style={backgroundColor}></motion.span>
                  </motion.span>
                  <ul className="skills__container__list">
                    {listSkills().map((skill: Array<string>) => (
                      <motion.li className="skills__container__list__item__align--end" {...animateTranslateTextLeft} key={uuidv4()}>
                        {skill}
                        <motion.span className="reveal-bg" {...animateRevealBackgroundLeft}></motion.span>
                        <motion.span className="selector-bg" {...animateRevealSelectorLeft} style={backgroundColor}></motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}

              <div className="skills__container">
                <motion.div className={`skills__big__hexagon ${reverse ? 'skills__big__hexagon__right' : 'skills__big__hexagon__left'}`} style={backgroundColor} {...(isEven(id) ? animateBigHexagonTranslateRight : animateBigHexagonTranslateLeft)}>
                  <span className="skills__big__hexagon__before" style={backgroundColor}></span>
                  <span className="skills__big__hexagon__after" style={backgroundColor}>
                    <GraphicHexagon />
                  </span>
                </motion.div>

                <div className="skills__grid">
                  {skills.map((skill: Array<string>, index: number) => (
                    <div className="skills__grid__hexagon" key={uuidv4()}>
                      <motion.div
                        className={`skills__grid__hexagon__icon ${gap.find((element: any) => element === skill) ? `gap ${skill}` : `${skill}`}`}
                        style={backgroundColor}
                        {...(reverse ? animateSmallHexagonTranslateLeft : animateSmallHexagonTranslateRight)}
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

              {isEven(id) && (
                <>
                  <ul className="skills__container__list">
                    {listSkills().map((skill: Array<string>) => (
                      <motion.li className="skills__container__list__item__align--start" {...animateTranslateTextRight} key={uuidv4()}>
                        {skill}
                        <motion.span className="reveal-bg" {...animateRevealBackgroundRight}></motion.span>
                        <motion.span className="selector-bg" {...animateRevealSelectorRight} style={backgroundColor}></motion.span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.span className="skills__big__hexagon__number" style={{ left: '-5rem' }} {...animateSkillSmallNumberTop}>
                    <p>0{id}</p>
                    <motion.span className="skills__big__hexagon__number__after" style={backgroundColor}></motion.span>
                  </motion.span>
                </>
              )}
            </div>
          )}
        </section>
      )}

      {/* --------------- MEDIA MOBILE --------------- */}
      {mediaScreen === 'mobile' && (
       <>
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

          <SkillVelocity baseVelocity={-1}>{titleBackground}</SkillVelocity>
          <SkillVelocity baseVelocity={1}>{titleBackground}</SkillVelocity>

          {title === 'Compétences' && (
            <div className="hexagon__container">
              <motion.div className="hexagon__container__svg" {...animateHexagonSoftSkill}>
                <SoftSkill className="hexagon__container__svg__soft-skill" />
              </motion.div>
              <motion.div className="hexagon__container__svg" {...animateHexagonHobbies}>
                <Hobbies className="hexagon__container__svg__hobbies" />
              </motion.div>
            </div>
          )}

          {title !== 'Compétences' && (
            <div className="global__container">
              <motion.span className="skills__big__hexagon__number" style={{ left: '5rem' }} {...animateSkillSmallNumberTop}>
                <p>0{id}</p>
                <motion.span className="skills__big__hexagon__number__after" style={backgroundColor}></motion.span>
              </motion.span>
              <ul className="skills__container__list">
                {listSkills().map((skill: Array<string>) => (
                  <motion.li className="skills__container__list__item__align--end" {...animateTranslateTextLeftMobile} key={uuidv4()}>
                    {skill}
                    <motion.span className="selector-bg" {...animateRevealSelectorLeftMobile} style={backgroundColor}></motion.span>
                  </motion.li>
                ))}
              </ul>

              <div className="skills__container">
                <div className="skills__grid">
                  {skills.map((skill: Array<string>, index: number) => (
                    <div className="skills__grid__hexagon" key={uuidv4()}>
                      <motion.div className={`skills__grid__hexagon__icon ${gap.find((element: any) => element === skill) ? `gap ${skill}` : `${skill}`}`}
                        style={backgroundColor} {...animateSmallHexagonTranslateTopMobile}>
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
        </>
      )}
    </>
  );
};

export default Skill;
