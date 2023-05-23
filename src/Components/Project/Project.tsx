//& Import Scss
import './Styles/Project.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

//& Imports Components
import TitleCategorie from '../TitleCategorie/TitleCategorie';
import * as Svg from './Svg';

//& Imports Types
import { ProjectsData } from './Types';

//& Animations
import * as animate from '../../Utils/Animations/animate';

const Project = ({ title, color, projects }: ProjectsData) => {
  return (
    <section>
      {projects[0] && <TitleCategorie title={title} color={color} />}

      {projects.map((project) => (
        <div key={uuidv4()} className="project__container">
          <div className="project__container__global">
            <div className="project__container__global__left">
              {/* <Grid className="project__container__global__left__grid" /> */}
              <Svg.HexaGraphic style={{ fill: color }} className="project__container__global__left__hexagraphic" />
            </div>

            <div className="project__container__global__right" style={{ backgroundColor: color }}>
              <div className="project__container__global__right__wrapper">
                <div className="project__container__global__right__wrapper__tech">
                  <div className="project__container__global__right__wrapper__tech__hexagon">
                    {project.logotypes.map((logotype, index) => (
                      <div key={uuidv4()} className="project__container__global__right__wrapper__tech__hexagon__form">
                        <div className="project__container__global__right__wrapper__tech__hexagon__form--before"></div>
                        <div className="project__container__global__right__wrapper__tech__hexagon__form--after">
                          <img src={logotype ?? ''} alt={`logo ${project['name-logotypes'][index]}`}></img>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="project__container__global__right__wrapper__tech__separator"></div>
                </div>

                <div className="project__container__global__right__wrapper__info">
                  <div className="project__container__global__right__wrapper__info__number">
                    <p>0{project.id}</p>
                  </div>
                  <div className="project__container__global__right__wrapper__info__description">
                    <p>{project.description}</p>
                    {project['link-demo'] && <a href={project['link-demo']} target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">Lien démo</a>}
                  </div>
                  <div className="project__container__global__right__wrapper__info__title">
                    <h2>{title}</h2>
                    <h2>{project.name}</h2>
                  </div>
                </div>
              </div>
            </div>
            {project['link-github'] && <a className='project__container__global__link' href={project['link-github']} target="_blank" rel="noopener noreferrer" data-cursor-pointer="active">EN SAVOIR PLUS</a>}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Project;
