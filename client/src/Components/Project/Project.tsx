//& Import Scss
import './Styles/Project.scss';

//& Imports Modules
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

//& Imports Components
import TitleCategorie from '../TitleCategorie/TitleCategorie';
import * as Svg from './img/Svg';
import * as Png from './img/Png';

//& Imports Types
import { ProjectsType } from './Types';
import { RootState } from '../../Store';

//& Animations
import * as animate from '../../Utils/Animations/animate';
import { translateBounce } from '../../Utils/Animations';

const Project = ({ id, title, color, projects }: ProjectsType) => {
  const { mediaScreen } = useSelector((state: RootState) => state.mediaSlice);

  return (
    <section>
      {projects[0] && <TitleCategorie title={title} color={color} />}

      {projects.map((project) => (
        <div key={uuidv4()} className="project__container">
          <div className="project__container__global">
            <div className="project__container__global__left">
              <motion.div className="project__container__global__left__wrapper">
                <motion.div {...animate.projectCategorie}>
                  <Svg.HexaGraphic style={{ fill: color }} className="project__container__global__left__wrapper__hexagraphic" />
                </motion.div>

                <motion.div className="project__container__global__left__wrapper__desktop">
                  <motion.div {...translateBounce('y', -80, 1, 0.4)}>
                    <Svg.MockupDesktop className="project__container__global__left__wrapper__desktop__mockup" />
                  </motion.div>

                  <motion.img {...translateBounce('y', -80, 3, 0.7)} className="project__container__global__left__wrapper__desktop__image" alt="Image mockup du projet" src={`${Png[project['image-mockup'] as keyof typeof Png]}`} />

                  {/* <div>
                    <Svg.MockupReflectDesktop className="project__container__global__left__wrapper__desktop__reflect" />
                  </div>
                   */}
                </motion.div>
              </motion.div>
            </div>

            <div className="project__container__global__right" style={{ backgroundColor: color }}>
              <div className="project__container__global__right__wrapper">
                <div className="project__container__global__right__wrapper__tech">
                  <div className="project__container__global__right__wrapper__tech__hexagon">
                    {project.logotypes.map((logotype, index) => (
                      <motion.div {...animate.projectSkills} key={uuidv4()}>
                        <div className="project__container__global__right__wrapper__tech__hexagon__form">
                          <div className="project__container__global__right__wrapper__tech__hexagon__form--before"></div>
                          <div className="project__container__global__right__wrapper__tech__hexagon__form--after">
                            <img src={logotype ?? ''} title={project['name-logotypes'][index]} alt={`logo ${project['name-logotypes'][index]}`}></img>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div {...(mediaScreen !== 'mobile' ? animate.projectSeparator : animate.projectSeparatorMobile)} className="project__container__global__right__wrapper__tech__separator"></motion.div>
                </div>

                <div className="project__container__global__right__wrapper__info">
                  <div className="project__container__global__right__wrapper__info__number">
                    <p>0{project.id}</p>
                  </div>
                  <div className="project__container__global__right__wrapper__info__description">
                    <p>{project.description}</p>
                    {project['link-demo'] && (
                      <a href={project['link-demo']} role="link" target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">
                        Lien démo
                      </a>
                    )}
                    {project['link-swaggerdocs'] && (
                      <a href={project['link-swaggerdocs']} role="link" target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">
                        Lien SwaggerDocs
                      </a>
                    )}
                  </div>
                  <div className="project__container__global__right__wrapper__info__title">
                    <motion.h2 {...animate.projectCategorie}>{title}</motion.h2>
                    <motion.h2 {...animate.projectName}>{project.name}</motion.h2>
                  </div>
                </div>
              </div>
            </div>

            {project['link-github'] && (
              <a className="project__container__global__link" role="link" href={project['link-github']} target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">
                EN SAVOIR PLUS
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Project;
