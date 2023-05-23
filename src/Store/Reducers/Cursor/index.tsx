//~ Import Module
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  x: 0,
  y: 0,
};

//~ Exports
export const cursorSlice = createSlice({
  name: 'parallaxSlice',
  initialState,

  reducers: {
    mousePosition: (state, action) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },

    parallaxEffectOnMouseMove: (state) => {
      const transformAxisElement = (dataElements: HTMLElement[], xAxis: string, yAxis: string | null) => {
        for (let i = 0; i < dataElements.length; i++) {
          yAxis === null && (yAxis = xAxis);
          const xAxisValue = +(dataElements[i].dataset[xAxis] || '0');
          const yAxisValue = +(dataElements[i].dataset[yAxis] || '0');
          let x = state.x * xAxisValue;
          let y = state.y * yAxisValue;
          (dataElements[i] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
        }
      };

      const allDataAxis: HTMLElement[] = Array.from(document.querySelectorAll(`[data-parallax-axis]`));
      const allDataXAxis: HTMLElement[] = Array.from(document.querySelectorAll(`[data-parallax-x-axis]`));
      const allDataYAxis: HTMLElement[] = Array.from(document.querySelectorAll(`[data-parallax-y-axis]`));

      if (allDataAxis) transformAxisElement(allDataAxis, 'parallaxAxis', null);
      if (allDataXAxis && allDataYAxis) transformAxisElement(allDataXAxis, 'parallaxXAxis', 'parallaxYAxis');
    },

    magneticCursor: (state) => {
      const allDataMagnetic: HTMLElement[] = Array.from(document.querySelectorAll(`[data-cursor="magnetic"]`));

      let x = state.x;
      let y = state.y;

      allDataMagnetic.forEach((element: Element) => {
        const dataElement = element as HTMLElement;
        const { top, left, width, height } = dataElement.getBoundingClientRect();

        const posX = x - left - width / 2;
        const posY = y - top - height / 2;

        const mouseMoveEffect = () => {
          dataElement.style.transition = 'all 0.15s linear';
          dataElement.style.transform = `translate(${posX}px, ${posY}px)`;
          dataElement.removeEventListener('mousemove', mouseMoveEffect);
        };

        const mouseLeaveEffect = () => {
          dataElement.style.transition = 'all 0.15s ease';
          dataElement.style.transform = `translate(0px,0px)`;
          dataElement.removeEventListener('mouseleave', mouseLeaveEffect);
        };

        dataElement.addEventListener('mousemove', mouseMoveEffect);
        dataElement.addEventListener('mouseleave', mouseLeaveEffect);
      });
    },

    customCursor: (state) => {
      const cursorInner: HTMLElement | null = document.querySelector('.inner');
      const cursorOuter: HTMLElement | null = document.querySelector('.outer');

      if (cursorInner && cursorOuter) {
        const posX = state.x;
        const posY = state.y;

        cursorInner.style.left = `${posX}px`;
        cursorInner.style.top = `${posY}px`;
        cursorInner.style.opacity = '1';

        cursorOuter.animate(
          [
            {
              left: `${posX}px`,
              top: `${posY}px`,
              opacity: 1,
            },
          ],
          {
            duration: 700,
            fill: 'forwards',
          }
        );
      }

      const cursorPointer = document.querySelectorAll(`[data-cursor-pointer="active"]`);

      if (cursorPointer) {
        cursorPointer.forEach((element) => {
          element.addEventListener('mouseenter', () => {
            const cssOuterStyle = 'height: 2.5rem; width: 2.5rem; transition: all 0.25s ease; backdrop-filter: blur(0.05rem);';

            const cssInnerStyle =
              'height:1.2rem; width:1.2rem;  background: linear-gradient(90deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%), linear-gradient(0deg, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 43%,#fff 45%,#fff 55%,rgba(0,0,0,0) 57%,rgba(0,0,0,0) 100%); transition: (background,height,width) 0.25s ease; box-shadow:none; ';

            cursorOuter?.setAttribute('style', cssOuterStyle);
            cursorInner?.setAttribute('style', cssInnerStyle);
          });

          element.addEventListener('mouseleave', () => {
            const cssOuterStyle = 'height: 1.2rem; width: 1.2rem; transition: all 0.25s ease; ';

            cursorOuter?.setAttribute('style', cssOuterStyle);
            cursorInner?.removeAttribute('style');
          });
        });
      }
    },
  },
});

export const { mousePosition, parallaxEffectOnMouseMove, magneticCursor, customCursor } = cursorSlice.actions;
export default cursorSlice.reducer;
