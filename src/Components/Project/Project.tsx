//& Import Scss
import './Styles/Project.scss';

//& Imports Modules
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

//& Imports Components

//& Imports Types
import { ProjectsData } from './Types';

//& Animations
import * as animate from '../../Utils/Animations/animate';
import TitleCategorie from '../TitleCategorie/TitleCategorie';

const Project = ({ id, title, color }: ProjectsData) => {
  return (
    <section>
      <TitleCategorie title={title} color={color} />
    </section>
  );
};
export default Project;
