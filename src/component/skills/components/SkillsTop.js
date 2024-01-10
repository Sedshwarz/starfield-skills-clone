import { useContext } from "react";
import { MyContext } from "../../../context/contextSkills";
import { skillTabs } from "../skills";

const SkillsTop = () => {

    const { prevTab, nextTab, activeTab, setActiveTab } = useContext(MyContext);

    return (
        <div className='skills-top'>
            <div className='skills-arrow' onClick={prevTab}>←</div>
            <ul className='skills-tabs'>
                {
                    skillTabs.map((item, ind) => (
                        <li
                            key={ind}
                            className={activeTab === item ? 'active-skill-tab' : ''}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
            <div className='skills-arrow' onClick={nextTab}>→</div>
        </div>
    )
}
export default SkillsTop;