//& Animations
import * as animation from './index';

//& animation
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
};
