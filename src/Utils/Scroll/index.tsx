// export const setTargetScrollY = () => {

//   //& SCROLL ANIMATE
//   const scrollAnimate = (dataElements: any) => {
//     for (var i = 0; i < dataElements.length; i++) {
//       const element = dataElements[i];

//       const { top, left, bottom, right } = element.getBoundingClientRect();
//       const isInViewport = top >= 0 && left >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);

//       //? initialization all css
//       const cssStyleDefault = 'opacity:1; transition: all 0.35s ease-in-out; transform: translate(0px) rotate(0deg) scale(1); animation: bounce-in 0.75s ease;';

//       const cssStyleDefaultReverse = 'opacity:0; transition: all 0.35s ease-in-out; transform: translate(0px) rotate(0deg) scale(0); animation: bounce-in 0.75s ease;';

//       if (isInViewport) {
//         element.setAttribute('style', cssStyleDefault);
//       }
//       if (!isInViewport) {
//         element.removeAttribute('style', cssStyleDefault);
//         element.style.opacity = 0.1;
//         // element.setAttribute('style', cssStyleDefaultReverse);
//       }

//     }
//   };

//   const allDataScroll = Array.from(document.querySelectorAll(`[data-scroll]`) as NodeListOf<Element>);

//   allDataScroll.forEach((element: any) => {
//     const getScrollType = element.dataset.scroll;

//     if (getScrollType === 'animate') scrollAnimate(allDataScroll);
//   });
// };
