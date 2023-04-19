export function animateWithoutExit(nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0 },
    animate: { [axis]: valueAxisAnimate, opacity: 1 },
    transition: { type: 'spring', stiffness: 40, duration: 0, ease: 'easeIn' },
  };
}

export function animateTypeSpring(nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0, scale: 0.1 },
    animate: { [axis]: valueAxisAnimate, opacity: 1, scale: 1 },
    transition: { type: 'spring', stiffness: 200, duration: 0.35, ease: 'easeIn' },
  };
}

export function animateWithExit(nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number, exitAxis: string, valueExitAxis: number) {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0 },
    animate: { [axis]: valueAxisAnimate, opacity: 1 },
    exit: { [exitAxis]: valueExitAxis, opacity: 0 },
    transition: { duration: 0.25, ease: 'easeIn' },
  };
}

export function leafAnimateInfinite(nameKey: string, xAxisInitialValue: number, yAxisInitialValue: number, xAxisAnimateValue: number, yAxisAnimateValue: number, delay: number) {
  const repeatTypeValue: 'reverse' = 'reverse';

  return {
    key: nameKey,
    initial: { x: xAxisInitialValue, y: yAxisInitialValue },
    animate: { x: xAxisAnimateValue, y: yAxisAnimateValue },
    transition: { delay: delay, duration: 1.8, ease: 'easeIn', repeat: Infinity, repeatType: repeatTypeValue },
  };
}

export function whileInViewTranslateWithRotate(axis: string, valueAxisInitial: number, valueAxisWhileInViewl: number, valueRotate: number = 0) {
  return {
    initial: {
      [axis]: valueAxisInitial,
      opacity: 0,
      rotate: valueRotate,
    },
    whileInView: {
      [axis]: valueAxisWhileInViewl,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
}

export function whileInViewHexagonTranslate(axis:string, valueAxisInitial:number) {
  return {
    initial: {
      scale: 0,
      rotate: 90,
      [axis]:valueAxisInitial,
    },
    whileInView: {
      scale: 1,
      [axis]:0,
      transition: {
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          restDelta: 0.001
        }
      },
    },
  };
}

export function whileInViewTranslateText(axis:string, valueAxisInitial:number) {
  return {
    initial: {
      [axis]:valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      transition: {
        delay:0.15,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        
      },
    },
  };
}

export function whileInViewRevealBackground(axis:string, valueAxisWhileInView:number) {
  return {
    initial: {
      [axis]: 0,
    },
    whileInView: {
      [axis]: valueAxisWhileInView,
      transition: {
        delay:0.15,
        duration: 0.5,
        ease: [0.8, 0.71, 0.2, 1.01],
      },
    },
  };
}

export function whileInViewRevealSelector(axis:string, valueAxisWhileInView:number) {
  return {
    initial: {
      scale:1,
      [axis]:0,
    },
    whileInView: {
      scale:0,
      [axis]:valueAxisWhileInView,
      transition: {
        duration: 5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          restDelta: 0.001
        }
      },
    },
  };
}

export function whileInViewTranslateAndScale(axis:string, valueAxisInitial:number) {
  return {
    initial: {
      scale:0,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 12,
          stiffness: 100,
          restDelta: 0.001
        }
      },
    },
  };
}


//Todo : A refacto !
export function animateParent(nameKey: string) {
  return {
    hidden: {
      key: nameKey,
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  };
}

export function animateChildren() {
  return {
    hidden: {
      y: -20,
      opacity: 0,
      transition: { ease: 'easeInOut' },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: 'easeInOut' },
    },
  };
}
