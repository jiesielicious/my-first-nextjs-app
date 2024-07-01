
import data from '../data/skills';
import Heading from './Heading';
import SectionWrapper from './SectionWrapper';
import SkillComponent from './SkillComponent';

const Skills = () => {
    return( 
        <SectionWrapper>
            <Heading>Skills</Heading>
            <div className="flex flex-row flex-wrap items-center gap-5">
                {data.map(skill => (
                    <SkillComponent skill={skill} key={skill.id}/>
                ))}
            </div>
        </SectionWrapper> 
    );
}

export default Skills;