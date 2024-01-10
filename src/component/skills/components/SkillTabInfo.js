import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/contextSkills";

const SkillTabInfo = () => {

    const { activeSkill, infoBox, hoveredTab } = useContext(MyContext);
    const [tempObj, setTempObj] = useState({});


    useEffect(() => {

        if (activeSkill.rankSituation === 3) {
            setTempObj(activeSkill.rank3);
        } else if (activeSkill.rankSituation === 2) {
            setTempObj(activeSkill.rank2);
        } else if (activeSkill.rankSituation === 1) {
            setTempObj(activeSkill.rank1);
        } else if (activeSkill.rankSituation === 4) {
            setTempObj(activeSkill.rank4);
        }

        const tmp = Math.floor((tempObj.score * 100) / tempObj.target);
        document.documentElement.style.setProperty('--progress', tmp + '%');

    }, [activeSkill, tempObj]);




    const generateLockedText = () => {

        const tempObj2 = { ...hoveredTab[0] };
        const casc = tempObj2?.cascading2?.find(elm => elm === activeSkill) ? 2 : (
            tempObj2?.cascading3?.find(elm2 => elm2 === activeSkill) ? 3 : 4
        );

        let respondText = '',
            tempTitle = tempObj2?.title?.charAt(0).toLocaleUpperCase() + tempObj2?.title?.slice(1);

        if (casc === 2) {
            respondText = `Spend ${3 - tempObj2.totalPoints} more points in ${tempTitle} to unlock Level 2 ${tempTitle} Skills`;
        } else if (casc === 3) {
            respondText = `Spend ${10 - tempObj2.totalPoints} more points in ${tempTitle} to unlock Level 3 ${tempTitle} Skills`;
        } else if (casc === 4) {
            respondText = `Spend ${15 - tempObj2.totalPoints} more points in ${tempTitle} to unlock Level 4 ${tempTitle} Skills`;
        }
        return respondText;
    }


    return (
        <div className={`skill-tab-info ${!infoBox ? 'none' : 'flex'}`}>
            <div className='sti-left'>
                {
                    activeSkill.active === false || activeSkill.rankSituation === 0 ? (
                        <>{activeSkill.description}</>
                    ) : (
                        activeSkill.rankSituation < 4 ? (
                            <div className='challange-progress'>
                                <div className='cp-top'>
                                    <span>CHALLANGE PROGRESS</span>
                                    <span className='cp-top-value'>({tempObj.score}/{tempObj.target})</span>
                                </div>
                                <font color='#b4b6bb'>{tempObj.challange}</font>
                            </div>
                        ) : (
                            <div className='challange-progress'>
                                <div className='cp-top cptv2'>
                                    <span>CHALLANGE PROGRESS</span>
                                </div>
                                <font color='#b4b6bb'>Skill maxed out</font>
                            </div>
                        )
                    )
                }
            </div>
            <div className='sti-right'>
                <div className='sti-right-top'>
                    {
                        activeSkill.active === false ? (
                            <span className='stirt-locked'>LOCKED</span>
                        ) : (
                            <>
                                CURRENT RANK <span>({activeSkill.rankSituation}/4)</span>
                            </>
                        )
                    }
                </div>
                <div className='sti-right-bottom'>
                    {
                        activeSkill.active ? (
                            activeSkill.rankSituation === 0 ? (
                                <span className='stirb-unlock'>
                                    UNLOCK: {activeSkill.rank1.bonuses}
                                </span>
                            ) : (
                                <>{tempObj.bonuses}</>
                            )
                        ) : (
                            <>{generateLockedText()}</>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default SkillTabInfo;