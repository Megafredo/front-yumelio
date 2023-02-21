export function animateWithoutExit(nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0},
    animate: { [axis]: valueAxisAnimate, opacity: 1 },
    transition: { type: "spring", stiffness: 40, duration: 0, ease: 'easeIn' },
  };
}

export function animateTypeSpring(nameKey: string, axis: string, valueAxisInitial: number, valueAxisAnimate: number) {
  return {
    key: nameKey,
    initial: { [axis]: valueAxisInitial, opacity: 0, scale: 0.1 },
    animate: { [axis]: valueAxisAnimate, opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 200, duration: 0.35, ease: 'easeIn'}
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

