import './style/style.css';
import ContextSkills from '../../context/contextSkills';
import SkillsComp from './components/SkillsComp';

const Skills = () => {
    return (
        <ContextSkills>
            <SkillsComp />
        </ContextSkills>
    )
}
export default Skills;