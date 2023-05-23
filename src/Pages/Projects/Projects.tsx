//& Import Scss
import './Styles/Projects.scss';

//& Imports Modules
import Project from '../../Components/Project/Project';

//& Imports Data
import projectsData from '../../Data/Projects.json';

const Projects = () => {

  return (
    <section className="projects">
      {projectsData.map((data) => (
        <Project key={data.id} {...data} />
      ))}
    </section>
  );
};

export default Projects;
