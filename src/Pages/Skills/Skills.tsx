//~ Import style
import './Skills.scss';

//& Imports components
import Skill from '../../Components/Skill/Skill';

import skillData from '../../Data/Skill.json';

interface SkillData {
  id: number;
  title: string;
  titleBackground: string;
  skills: Array<string>;
  gap: Array<string>;
  color: string;
}

const Skills = () => {
  
  return (

    <section className="skills">
      {skillData.map((data: SkillData) => (
        <Skill key={data.id} {...data} />
      ))}
    </section>

  );
};

export default Skills;
