import { useContext, useEffect, useMemo } from 'react';
import { MyContext } from '../../../context/contextSkills';
import Button from '../../button';

const IncreaseSkillModal = () => {

    const {
        setIncreaseModal,
        activeSkill,
        fetchImage,
        activeTab,
        activeRank,
        setActiveRank,
        setSkills,
        activeCascading,
        hoveredTab,
        skills,
        setActiveSkill,
        skillPoints,
        setSkillPoints,
        rankUpActive,
        setRankUpActive
    } = useContext(MyContext);

    const {
        active,
        skillTitle,
        description,
        rankSituation,
        rank1,
        rank2,
        rank3,
        rank4
    } = activeSkill;


    const ranks = useMemo(() => {
        return [rank1, rank2, rank3, rank4];
    }, [rank1, rank2, rank3, rank4]);



    const createRank = (num, rank) => {
        return <>
            <div className={`rankHeader rh${num}`}>
                {
                    !active || (ranks[num - 2]?.target !== ranks[num - 2]?.score && num !== 1) ? <>RANK {num} <b>🔒</b></> : (
                        (rankSituation === num - 1 && (ranks[num - 2]?.target === ranks[num - 2]?.score)) || (num === 1 && rankSituation === 0) ?
                            <font className='rank-ava' color='#169bd1'>RANK {num} AVAILABLE</font> :
                            <font>RANK {num}</font>
                    )
                }
            </div>
            <p>{rank?.bonuses}</p>
        </>
    }

    const createRankClass = (num) => {
        return (
            !active || (ranks[num - 2]?.target !== ranks[num - 2]?.score && num !== 1) ?
                `rank ${num === activeRank ? 'hovered-rank' : ''}` :
                `rank white-painted ${num === activeRank ? 'hovered-rank' : ''}`
        )
    }


    const increasePoint = (itm) => {
        let tempTarget = ranks[itm - 1].target;
        let tempScore = ranks[itm - 1].score;
        let tempStep = ranks[itm - 1].step;
        let tempTab = hoveredTab[0];

        const situation = tempScore !== tempTarget && skillPoints > 0 && itm === rankSituation ? 1 :    //1 increases, 2 ranks up
            ranks[itm - 2]?.target === ranks[itm - 2]?.score && rankSituation === itm - 1 && active ? 2 : 3;


        tempScore = tempScore + tempStep > tempTarget ?
            tempTarget : tempScore + tempStep;


        let tempCascading = activeCascading === 1 ? tempTab.cascading1 :
            activeCascading === 2 ? tempTab.cascading2 :
                activeCascading === 3 ? tempTab.cascading3 :
                    tempTab.cascading4;


        tempCascading = tempCascading.map(tmc => tmc === activeSkill ?
            {
                ...tmc,
                rankSituation: situation === 2 ? tmc.rankSituation + 1 : tmc.rankSituation,
                rank1: itm === 1 && situation === 1 ? { ...tmc.rank1, score: tempScore } : tmc.rank1,
                rank2: itm === 2 && situation === 1 ? { ...tmc.rank2, score: tempScore } : tmc.rank2,
                rank3: itm === 3 && situation === 1 ? { ...tmc.rank3, score: tempScore } : tmc.rank3
            }
            : tmc
        )


        tempTab = {
            ...tempTab,
            totalPoints: tempTab.totalPoints + 1,
            cascading1: activeCascading === 1 ? tempCascading : tempTab.cascading1,
            cascading2: activeCascading === 2 ? tempCascading : tempTab.cascading2,
            cascading3: activeCascading === 3 ? tempCascading : tempTab.cascading3,
            cascading4: activeCascading === 4 ? tempCascading : tempTab.cascading4
        }

        if (situation < 3) {
            setSkills(
                skills.map(skill =>
                    skill.title === activeTab ? tempTab : skill
                )
            )

            const tempActiveSkill = tempCascading.find(elm => elm.id === activeSkill.id);
            setActiveSkill(tempActiveSkill);
            setSkillPoints(skillPoints - 1);
        }
    }


    const rankUp = () => {
        if (rankUpActive) {
            increasePoint(rankSituation + 1);
            setRankUpActive(false);
        }
    };

    const handleKeyDown = (e) => {
        if ((e.key === 'e' || e.key === 'E') && rankUpActive) {
            rankUp();
        }
    };

    useEffect(() => {
        if (rankUpActive) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rankUpActive]);

    return (
            <div className='modal'>
                <div className='modal-fade' onClick={() => setIncreaseModal(false)}></div>

                <div className='modal-content'>
                    <div className={`modal-content-head theme-${activeTab}`}>
                        {skillTitle}
                    </div>
                    <div className='modal-content-explanation'>
                        {description}
                    </div>
                    <div className='modal-content-body'>
                        <div className='modal-content-body-left'>
                            <div className='badge-area'>
                                <img src={fetchImage(skillTitle, activeRank)} alt='Badge' />
                            </div>
                            <div className='mcbl-bottom'>
                                <div className='mcblb-info'>
                                    {
                                        activeRank === rankSituation && activeRank !== 4 ? (
                                            <>
                                                <div className='cp-top'>
                                                    <span>CHALLANGE PROGGRESS</span>
                                                    <span>({ranks[activeRank - 1].score + '/' + ranks[activeRank - 1].target})</span>
                                                </div>
                                                <div className='cp-prg-stc'></div>
                                                <p>
                                                    Kill 20 enemies with an unarmed attack.
                                                </p>
                                            </>
                                        ) : activeRank === 4 && rankSituation === 4 ? (
                                            <>
                                                <div className='cp-top'>
                                                    <font color='#169bd1'>MAXIMUM RANK</font>
                                                </div>
                                                <div className='cp-prg-stc cpsf'></div>
                                                <p>
                                                    You have mastered this skill.
                                                </p>
                                            </>
                                        ) : activeRank > rankSituation ? (
                                            <>
                                                <div className='cp-top'>
                                                    <span><b>🔒</b> LOCKED</span>
                                                </div>
                                                <div className='cp-prg-stc cpsf'></div>
                                            </>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='modal-content-body-right'>
                            {
                                [1, 2, 3, 4].map((item, index) => (
                                    <div
                                        className={createRankClass(item)}
                                        key={index}
                                        onMouseOver={() => setActiveRank(item)}
                                        onClick={() => increasePoint(item)}
                                    >
                                        {
                                            createRank(item, ranks[index])
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='modal-content-actions'>
                        <div
                            className={!rankUpActive ? 'disabled' : ''}
                            onClick={rankUp}
                        >
                            <Button keyCode='E' title='RANK UP' func={() => { return false }} />
                        </div>
                        <div onClick={()=>setIncreaseModal(false)}>
                            <Button keyCode='TAB' title='BACK' func={() => { return false }} />
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default IncreaseSkillModal;