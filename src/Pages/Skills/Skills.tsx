//~ Import style
import './Skills.scss';

//& Imports components
import Skill from '../../Components/Skill/Skill';

import skillData from '../../Data/Skill.json';

const Skills = () => {
  return (
    <section className="skills">
      {skillData.map((data) => (
        <Skill key={data.id} {...data} />
      ))}
    </section>
  );
};

export default Skills;
