// //& Import SCSS
// import './Home.scss';

// //& Imports Modules
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// //& Imports Components
// import { ReactComponent as GateSVG } from '../../Assets/img/Gate.svg';
// import { ReactComponent as SurfaceSVG } from '../../Assets/img/Surface.svg';
// import { ReactComponent as WaveSVG } from '../../Assets/img/Wave.svg';
// import { ReactComponent as WaveWhiteSVG } from '../../Assets/img/WaveWhite.svg';
// import { ReactComponent as FirstNameSVG } from '../../Assets/img/FirstName.svg';
// import { ReactComponent as LastNameSVG } from '../../Assets/img/LastName.svg';
// import { ReactComponent as ProfileSVG } from '../../Assets/img/Profile.svg';

// import LeafBlur01 from '../../Assets/img/leaf-blur-01.png';
// import LeafBlur02 from '../../Assets/img/leaf-blur-02.png';
// import LeafBlur03 from '../../Assets/img/leaf-blur-03.png';

// import LeafNett01 from '../../Assets/img/leaf-nett-01.png';
// import LeafNett02 from '../../Assets/img/leaf-nett-02.png';
// import LeafNett03 from '../../Assets/img/leaf-nett-03.png';
// import LeafNett04 from '../../Assets/img/leaf-nett-04.png';

// import { leafAnimateInfinite } from '../../Utils/Animations';

// //(nameKey, (xAxisInitialValue, yAxisInitialValue), (xAxisAnimateValue, yAxisAnimateValue), delay)
// const leafAnimate01 = leafAnimateInfinite('leaf__nett01', 0, 4, 4, 0, 0);
// const leafAnimate02 = leafAnimateInfinite('leaf__nett02', 0, 4, 4, 0, 0.25);
// const leafAnimate03 = leafAnimateInfinite('leaf__nett03', 0, 4, 4, 0, 0.35);
// const leafAnimate04 = leafAnimateInfinite('leaf__nett04', 0, 4, 4, 0, 0.55);

// const Home = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="home">
//       <div className="home__contain__left">
//         <h1>{t('home_h1')}</h1>
//         <p>{t('home_description')}</p>
//       </div>
//       <div className="home__contain__right">
//         <div className="home__contain__right__elements">
//           <GateSVG />
//           <SurfaceSVG />
//           <img className="element__leaf__blur" data-parallax-axis="-0.03" alt="A single green leaf that is blurred 01" src={LeafBlur01} />
//           <img className="element__leaf__blur" data-parallax-axis="-0.02" alt="A single green leaf that is blurred 02" src={LeafBlur02} />
//           <img className="element__leaf__blur" data-parallax-axis="0.02" alt="A single green leaf that is blurred 03" src={LeafBlur03} />
//           <motion.img className="element__leaf__nett" alt="A simple green leaf that is nett 01" src={LeafNett01} {...leafAnimate01} />
//           <motion.img className="element__leaf__nett" alt="A simple green leaf that is nett 02" src={LeafNett02} {...leafAnimate02} />
//           <motion.img className="element__leaf__nett" alt="A simple green leaf that is nett 03" src={LeafNett03} {...leafAnimate03} />
//           <motion.img className="element__leaf__nett" alt="A simple green leaf that is nett 04" src={LeafNett04} {...leafAnimate04} />
//         <FirstNameSVG data-parallax-axis="0.01"/>
//         <LastNameSVG data-parallax-axis="0.01"/>
//         <ProfileSVG/>
//         </div>
//       </div>
//         {/* <WaveSVG /> */}

//       <div className="zone-test">
//       </div>
//     </section>
//   );
// };

// export default Home;
