//~ Import style
import './Skills.scss';

import { motion } from 'framer-motion';

const test = {
  initial: { x: -150,  opacity: 0 },
  animate: { x: 0,  opacity: 1 },
  exit: {
    transition: { duration: 0.2 },
    x: -150,
    opacity: 0
  },
}

const Skills = () => {
  return (
    <section className="skills">
      <motion.h1 {...test}>Compétences</motion.h1>
    </section>
  );
};

export default Skills;
