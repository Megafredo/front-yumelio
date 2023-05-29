//& Import SCSS
import './Styles/NoPage.scss';

//& Imports Modules
import { motion } from 'framer-motion';

//& Imports Components
import * as Svg from './Svg';

//& Animations
import { scaleBounce } from '../../Utils/Animations';

const NoPage = () => {
  return (
    <section className="nopage">
      <div className="nopage__container">
        <motion.div {...scaleBounce(2, 0)} className="nopage__container__circle">
          <Svg.NfCircle data-parallax-axis="-0.002" />
        </motion.div>

        <motion.div {...scaleBounce(5, 0.3)} className="nopage__container__island">
          <Svg.NfIsland data-parallax-axis="0.004" />
        </motion.div>

        <motion.div {...scaleBounce(1, 0.4)} className="nopage__container__water">
          <Svg.NfWater data-parallax-axis="-0.004" />
        </motion.div>

        <div className="nopage__container__number">
          <motion.div {...scaleBounce(5, 0.5)} className="nopage__container__number__left">
            <Svg.Nf4Left data-parallax-axis="0.03" />
          </motion.div>

          <motion.div {...scaleBounce(5, 0.6)} className="nopage__container__number__center">
            <Svg.Nf0Center data-parallax-axis="0.03" />
          </motion.div>

          <motion.div {...scaleBounce(5, 0.7)} className="nopage__container__number__right">
            <Svg.Nf4Right data-parallax-axis="0.03" />
          </motion.div>
        </div>

        <div className="nopage__container__cloud">
          <motion.div {...scaleBounce(1, 0.5)} className="nopage__container__cloud__four">
            <Svg.NfCloud4 data-parallax-axis="0.004" />
          </motion.div>

          <motion.div {...scaleBounce(1, 0.4)} className="nopage__container__cloud__three">
            <Svg.NfCloud3 data-parallax-axis="0.006" />
          </motion.div>

          <motion.div {...scaleBounce(1, 0.3)} className="nopage__container__cloud__two">
            <Svg.NfCloud2 data-parallax-axis="0.015" />
          </motion.div>

          <motion.div {...scaleBounce(1, 0.2)} className="nopage__container__cloud__one">
            <Svg.NfCloud1 data-parallax-axis="-0.02" />
          </motion.div>
        </div>

        <motion.div {...scaleBounce(5, 0.6)} className="nopage__container__text">
          <Svg.NfText data-parallax-axis="0.04" />
        </motion.div>

        <motion.div {...scaleBounce(1, 0.7)} className="nopage__container__moon">
          <Svg.NfMoon data-parallax-axis="-0.004" />
        </motion.div>

        <div className="nopage__container__butterfly">
          <motion.div {...scaleBounce(1, 0.8)} className="nopage__container__butterfly__left">
            <Svg.NfButtefly1 data-parallax-axis="0.01" />
          </motion.div>

          <motion.div {...scaleBounce(1, 0.9)} className="nopage__container__butterfly__right">
            <Svg.NfButterfly2 data-parallax-axis="-0.01" />
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default NoPage;
