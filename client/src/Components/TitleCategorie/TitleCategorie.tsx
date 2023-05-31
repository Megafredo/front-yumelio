//& Import Scss
import './Styles/TitleCategorie.scss';

//& Imports Modules
import { motion } from 'framer-motion';
//& Imports Components

//& Animations
import * as animate from '../../Utils/Animations/animate';

const TitleCategorie = ({ title, color }: { title: string; color: string }) => {
  const backgroundColor = { backgroundColor: `${color}` };
  const borderColor = { borderColor: `${color}` };

  return (
    <section>
      <motion.div className="title__categorie">
        <motion.div className="title__categorie__icon">
          <motion.div className="title__categorie__icon__lozenge" style={borderColor} {...animate.effectLozenge}></motion.div>
          <motion.div className="title__categorie__icon__cross" {...animate.effectCross}>
            <span className="title__categorie__icon__cross__before" style={backgroundColor}></span>
            <span className="title__categorie__icon__cross__after" style={backgroundColor}></span>
          </motion.div>
        </motion.div>
        <motion.h2 {...animate.effectTitle}>{title}</motion.h2>
        <motion.div className="title__categorie__separator" style={backgroundColor} {...animate.effectSeparator}></motion.div>
      </motion.div>
    </section>
  );
};
export default TitleCategorie;
