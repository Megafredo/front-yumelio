//& Animations
import * as animation from './index';

//& whileInViews
const effectLozenge = animation.translateWithRotate('y', -20, 0, 45);
const effectCross = animation.translateWithRotate('x', -20, 0);
const effectTitle = animation.translateWithRotate('x', 20, 0);
const effectSeparator = animation.translateWithRotate('y', 10, 0);

const smallHexagonTranslateLeft = animation.hexagonTranslate('x', -200);
const smallHexagonTranslateRight = animation.hexagonTranslate('x', 200);
const bigHexagonTranslateLeft = animation.hexagonTranslate('x', -150);
const bigHexagonTranslateRight = animation.hexagonTranslate('x', 150);

const revealBackgroundLeft = animation.revealBackground('x', -200);
const revealBackgroundRight = animation.revealBackground('x', 200);

const revealSelectorLeft = animation.revealSelector('x', 150);
const revealSelectorRight = animation.revealSelector('x', -150);

const translateTextLeft = animation.translateText('x', -200);
const translateTextRight = animation.translateText('x', 200);

const skillSmallNumberTop = animation.translateAndScale('y', 100);

const hexagonSoftSkill = animation.translateAndScale('x', 0);
const hexagonHobbies = animation.translateAndScale('x', 0);

const translateTextLeftMobile = animation.translateText('x', -40);
const revealSelectorLeftMobile = animation.revealSelector('x', 150);
const smallHexagonTranslateTopMobile = animation.hexagonTranslate('y', -20);

const iconsGraphic = animation.translateAndScale('y', -50);

//& Animate
//(nameKey, (xAxisInitialValue, yAxisInitialValue), (xAxisAnimateValue, yAxisAnimateValue), delay)
const leaf01 = animation.leafInfinite('leaf__nett01', 0, 4, 4, 0, 0);
const leaf02 = animation.leafInfinite('leaf__nett02', 0, 4, 4, 0, 0.25);
const leaf03 = animation.leafInfinite('leaf__nett03', 0, 4, 4, 0, 0.35);
const leaf04 = animation.leafInfinite('leaf__nett04', 0, 4, 4, 0, 0.55);


//& Home
const smallCross = animation.translateScaleDuration('y', 50, 1.20);
const mediumCross = animation.translateScaleDuration('y', 50, 1.40);
const largerCross = animation.translateScaleDuration('y', -50, 1.60);
const workSvg = animation.translateScaleDuration('y', -50, 0.20);

const subtitleFirstLine = animation.translateDurationRotate('y', 80, 1.20, 180);
const subtitleSecondtLine = animation.translateDurationRotate('y', 80, 2, 180);
const subtitleNumber = animation.translateDurationRotate('y', -80, 0.80, 0);
const subtitleSeparator = animation.translateDurationRotate('x', 50, 1.50, 0);

//& Contact
  // zoneContact(axis: string, valueAxisInitial: number, zIndex: number, delay: number, duration: number)
  const zoneContact01 = animation.simpleTranslation('x', 100, 1, 0.6, 1);
  const zoneContact01Mobile = animation.simpleTranslation('y', 100, 1, 0.6, 1);
  const zoneContact02 = animation.simpleTranslation('y', 100, 2, 0, 1);
  const zoneContact03 = animation.simpleTranslation('x', -200, 1, 0.7, 0.6);
  const zoneContact03Mobile = animation.simpleTranslation('y', -200, 1, 0.7, 0.6);

  // socialNetwork(delay: number, duration: number)
  const socialNetwork01 = animation.socialNetwork(1, 0.25);
  const socialNetwork02 = animation.socialNetwork(1.25, 0.25);
  const socialNetwork03 = animation.socialNetwork(1.5, 0.25);
  

//& Project
const projectSeparator = animation.translateWhileInView('x', -80, 0, 0.25);
const projectSeparatorMobile = animation.translateWhileInView('x', -80, 0, 0);
const projectSkills = animation.simpleScale();

const projectCategorie = animation.whileInViewTranslation('y', 50, 0.15, 1);
const projectName = animation.whileInViewTranslation('y', 50, 0.5, 1);


export {
  effectLozenge,
  effectCross,
  effectTitle,
  effectSeparator,
  smallHexagonTranslateLeft,
  smallHexagonTranslateRight,
  bigHexagonTranslateLeft,
  bigHexagonTranslateRight,
  revealBackgroundLeft,
  revealBackgroundRight,
  revealSelectorLeft,
  revealSelectorRight,
  translateTextLeft,
  translateTextRight,
  skillSmallNumberTop,
  hexagonSoftSkill,
  hexagonHobbies,
  translateTextLeftMobile,
  revealSelectorLeftMobile,
  smallHexagonTranslateTopMobile,
  iconsGraphic,
  leaf01,
  leaf02,
  leaf03,
  leaf04,
  smallCross,
  mediumCross,
  largerCross,
  subtitleFirstLine,
  subtitleSecondtLine,
  subtitleNumber,
  subtitleSeparator,
  workSvg,
  zoneContact01,
  zoneContact01Mobile,
  zoneContact02,
  zoneContact03,
  zoneContact03Mobile,
  socialNetwork01,
  socialNetwork02,
  socialNetwork03,
  projectSeparator,
  projectSeparatorMobile,
  projectSkills,
  projectCategorie,
  projectName,
};
