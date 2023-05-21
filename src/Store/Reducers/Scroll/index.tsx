//~ Import Module
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  x: 0,
  y: 0,
  z: 0,
};

//~ Exports
export const scrollSlice = createSlice({
  name: 'scrollSlice',

  initialState,

  reducers: {
    setTargetScrollY: (state) => {
      //& SCROLL POURCENTS
      const scrollPourcent = () => {
        let scrollPosition = window.scrollY / (document.body.clientHeight - window.innerHeight);
        return Math.round(scrollPosition * 100);
      };

      //& SCROLL ANIMATE
      const scrollAnimate = (dataElement: HTMLElement, getScrollTransformValue: Record<string, number>) => {
        const { r: rotateValue, s: scaleValue, tx: translateXValue, ty: translateYValue } = getScrollTransformValue;

        const { top, left, bottom, right } = dataElement.getBoundingClientRect();

        const isInViewport = top >= 0 && left >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);

        //? Attention dans le cas ou une partie de l'élément dépasse le viewport celle-ci peut éventuellement empêcher le fonctionnement du isInViewport
        if (isInViewport) {
          dataElement.style.opacity = '1';
          dataElement.style.transform = 'rotate(0deg) scale(1) translate(0px)';

          // dataElement.style.animation = 'bounce-in 0.75s ease';
          // setTimeout(() => {
          //   dataElement.style.animation = null;
          // }, 750);
        }

        if (!isInViewport) {
          dataElement.style.opacity = '0';
          dataElement.style.transform = `rotate(${rotateValue}deg) scale(${scaleValue}) translate(${translateXValue}px, ${translateYValue}px)`;
        }
      };

      const allDataScrollTransform: HTMLElement[] = Array.from(document.querySelectorAll(`[data-scroll-transform]`));

      allDataScrollTransform.forEach((dataElement) => {
        const getScrollTransformValue = JSON.parse(dataElement.dataset.scrollTransform || '{}') as Record<string, number>;
        if (allDataScrollTransform) scrollAnimate(dataElement, getScrollTransformValue);
      });
    },
  },
});

export const { setTargetScrollY } = scrollSlice.actions;
export default scrollSlice.reducer;
