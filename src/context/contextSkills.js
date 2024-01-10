import { createContext, useEffect, useState } from "react";
import { skillTabs, SkillsAry } from "../component/skills/skills";

export const MyContext = createContext();

const importAll = (context) => context.keys().map(context);
const imagesContext = require.context('../assets/skills', false, /\.(png|jpe?g|svg)$/);
const images = importAll(imagesContext);


const ContextSkills = ({ children }) => {

    const [activeTab, setActiveTab] = useState('physical');
    const [skills, setSkills] = useState(SkillsAry);
    const [activeSkill, setActiveSkill] = useState({});
    const [infoBox, setInfoBox] = useState(false);
    const [hoveredTab, setHoveredTab] = useState({});
    const [increaseModal, setIncreaseModal] = useState(false);
    const [skillPoints, setSkillPoints] = useState(100);
    const [activeRank, setActiveRank] = useState(1);
    const [activeCascading, setActiveCascading] = useState(1);
    const [rankUpActive, setRankUpActive] = useState(false);


    const fetchImage = (specificImageName, rankNum) => {
        rankNum = rankNum === 4 ? '4' : (
            rankNum === 3 ? '3' : (
                rankNum === 2 ? '2' : '1'
            )
        )
        specificImageName = specificImageName?.toLowerCase().replace(/\s+/g, '_') + '_' + rankNum;

        const specificImage = images.find((imagePath) => {
            const imageName = imagePath.split('/').pop();
            return imageName.includes(specificImageName);
        });

        return specificImage ? specificImage : null;
    };



    const prevTab = () => {
        const indexOfTab = skillTabs.indexOf(activeTab);
        if (indexOfTab !== 0) {
            setActiveTab(skillTabs[indexOfTab - 1]);
        }
    }
    const nextTab = () => {
        const indexOfTab = skillTabs.indexOf(activeTab);
        if (indexOfTab !== 4) {
            setActiveTab(skillTabs[indexOfTab + 1]);
        }
    }


    /* ---------USE EFFECTS------------ */

    useEffect(() => {
        setActiveRank(1);
    }, [increaseModal]);

    useEffect(() => {
        setHoveredTab(skills.filter(itm => itm.title === activeTab));
    }, [skills, activeTab]);


    useEffect(() => {
        let sss;
        switch (activeSkill.rankSituation) {
            case 1:
                sss = activeSkill.rank1;
                break;
            case 2:
                sss = activeSkill.rank2;
                break;
            case 3:
                sss = activeSkill.rank3;
                break;
            default: sss = activeSkill.rank1;
        }
        const tmp = Math.floor((sss?.score * 100) / sss?.target);
        document.documentElement.style.setProperty('--progress2', tmp + '%');
    }, [activeSkill]);


    useEffect(() => {
        const { rank1, rank2, rank3, active, rankSituation } = activeSkill;
        const ranks = [rank1, rank2, rank3];

        if ((ranks[rankSituation - 1]?.target === ranks[rankSituation - 1]?.score || (active && rankSituation === 0)) && rankSituation !== 4 &&  active) {
            setRankUpActive(true);
        } else {
            setRankUpActive(false);
        }
    }, [activeSkill, increaseModal]);


    useEffect(()=>{
        let controller = false;
        const tempSkills = skills.map(skill => {
            let tempAry;

            if (skill.totalPoints === 3) {
                tempAry = skill.cascading2;
                controller = skill.cascading2[0].active ? false : true;
                const updatedCascading = tempAry.map(elm => ({ ...elm, active: true }));
                return { ...skill, cascading2: updatedCascading };
            } else if (skill.totalPoints === 10) {
                tempAry = skill.cascading3;
                controller = skill.cascading3[0].active ? false : true;
                const updatedCascading = tempAry.map(elm => ({ ...elm, active: true }));
                return { ...skill, cascading3: updatedCascading };
            } else if (skill.totalPoints === 15) {
                tempAry = skill.cascading4;
                controller = skill.cascading4[0].active ? false : true;
                const updatedCascading = tempAry.map(elm => ({ ...elm, active: true }));
                return { ...skill, cascading4: updatedCascading };
            }else{
                return skill;
            }
        });
        if (controller) {
            setSkills(tempSkills);
        }
    }, [skills]);


    /* -------------------------------------- */


    return (
        <MyContext.Provider value={{
            skills,
            setSkills,
            fetchImage,
            prevTab,
            nextTab,
            activeTab,
            setActiveTab,
            activeSkill,
            setActiveSkill,
            infoBox,
            setInfoBox,
            hoveredTab,
            setHoveredTab,
            increaseModal,
            setIncreaseModal,
            skillPoints,
            setSkillPoints,
            activeRank,
            setActiveRank,
            activeCascading,
            setActiveCascading,
            rankUpActive,
            setRankUpActive
        }}>
            {children}
        </MyContext.Provider>
    )
}
export default ContextSkills;