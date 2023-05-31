import { easeIn } from 'framer-motion';

export const animateWithoutExit = (nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) => {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0 },
    animate: { [axis]: valueAxisAnimate, opacity: 1 },
    transition: { type: 'spring', stiffness: 40, duration: 0, ease: 'easeIn' },
  };
};

export const animateTypeSpring = (nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) => {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0, scale: 0.1 },
    animate: { [axis]: valueAxisAnimate, opacity: 1, scale: 1 },
    transition: { type: 'spring', stiffness: 200, duration: 0.35, ease: 'easeIn' },
  };
};

export const animateWithExit = (nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number, exitAxis: string, valueExitAxis: number) => {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0 },
    animate: { [axis]: valueAxisAnimate, opacity: 1 },
    exit: { [exitAxis]: valueExitAxis, opacity: 0 },
    transition: { duration: 0.25, ease: 'easeIn' },
  };
};

export const leafInfinite = (nameKey: string, xAxisInitialValue: number, yAxisInitialValue: number, xAxisAnimateValue: number, yAxisAnimateValue: number, delay: number) => {
  const repeatTypeValue: 'reverse' = 'reverse';

  return {
    key: nameKey,
    initial: { x: xAxisInitialValue, y: yAxisInitialValue },
    animate: { x: xAxisAnimateValue, y: yAxisAnimateValue },
    transition: { delay: delay, duration: 1.8, ease: 'easeIn', repeat: Infinity, repeatType: repeatTypeValue },
  };
};

export const translateWithRotate = (axis: string, valueAxisInitial: number, valueAxisWhileInViewl: number, valueRotate: number = 0) => {
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
        ease: 'easeInOut',
      },
    },
  };
};

export const translateWhileInView = (axis: string, valueAxisInitial: number, valueAxisWhileInViewl: number, valueDelay: number) => {
  return {
    initial: {
      [axis]: valueAxisInitial,
      opacity: 0,
    },
    whileInView: {
      [axis]: valueAxisWhileInViewl,
      opacity: 1,
      transition: {
        delay: valueDelay,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
};

export const hexagonTranslate = (axis: string, valueAxisInitial: number) => {
  return {
    initial: {
      scale: 0,
      rotate: 90,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      scale: 1,
      [axis]: 0,
      transition: {
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };
};

export const translateText = (axis: string, valueAxisInitial: number) => {
  return {
    initial: {
      [axis]: valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      transition: {
        delay: 0.15,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
};

export const revealBackground = (axis: string, valueAxisWhileInView: number) => {
  return {
    initial: {
      [axis]: 0,
    },
    whileInView: {
      [axis]: valueAxisWhileInView,
      transition: {
        delay: 0.15,
        duration: 0.5,
        ease: [0.8, 0.71, 0.2, 1.01],
      },
    },
  };
};

export const revealSelector = (axis: string, valueAxisWhileInView: number) => {
  return {
    initial: {
      scale: 1,
      [axis]: 0,
    },
    whileInView: {
      scale: 0,
      [axis]: valueAxisWhileInView,
      transition: {
        duration: 5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };
};

export const translateAndScale = (axis: string, valueAxisInitial: number) => {
  return {
    initial: {
      scale: 0,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 12,
          stiffness: 100,
          restDelta: 0.001,
        },
      },
    },
  };
};

//Todo : A refacto !
export const animateParent = (nameKey: string) => {
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
};

export const animateChildren = () => {
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
};

export const translateScaleDuration = (axis: string, valueAxisInitial: number, valueDuration: number) => {
  return {
    initial: {
      scale: 0,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      scale: 1,
      transition: {
        duration: valueDuration,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 10,
          stiffness: 200,
          restDelta: 0.001,
        },
      },
    },
  };
};

export const translateDurationRotate = (axis: string, valueAxisInitial: number, valueDuration: number, valueRotate: number) => {
  return {
    initial: {
      rotate: valueRotate,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      [axis]: 0,
      transition: {
        duration: valueDuration,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
};

export const simpleTranslation = (axis: string, valueAxisInitial: number, zIndex: number, delay: number, duration: number) => {
  return {
    initial: {
      opacity: 0,
      [axis]: valueAxisInitial,
    },
    animate: {
      opacity: 1,
      [axis]: 0,
      zIndex: zIndex,
    },
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      delay: delay,
      duration: duration,
    },
  };
};

export const socialNetwork = (delay: number, duration: number) => {
  return {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 10,
        stiffness: 300,
        restDelta: 0.001,
      },
      delay: delay,
      duration: duration,
    },
  };
};

export const simpleScale = () => {
  return {
    initial: {
      opacity: 0,
      scale: 0,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 15,
          stiffness: 300,
          restDelta: 0.001,
        },
        delay: 0.25,
      },
    },
  };
};

export const whileInViewTranslation = (axis: string, valueAxisInitial: number, delay: number, duration: number) => {
  return {
    initial: {
      opacity: 0,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      opacity: 1,
      [axis]: 0,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        delay: delay,
        duration: duration,
      },
    },
  };
};


export const scaleBounce = (zIndex: number, valueDelay: number) => {
  return {
    initial: {
      opacity: 0,
      scale: 0,
      zIndex: zIndex,
    },
    animate: {
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 10,
          stiffness: 300,
          restDelta: 0.001,
        },
        delay: valueDelay,
        duration: 0.25,
      },
    },
  };
};


export const translateBounce = (axis: string, valueAxisInitial: number, zIndex: number, valueDelay: number) => {
  return {
    initial: {
      opacity: 1,
      scale:0,
      zIndex: zIndex,
      [axis]: valueAxisInitial,
    },
    whileInView: {
      opacity: 1,
      scale:1,
      [axis]: 0,
      zIndex: zIndex,
      transition: {
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 50,
          stiffness: 600,
          restDelta: 0.001,
        },
        delay: valueDelay,
        duration: 1,
      },
    },
  };
};


