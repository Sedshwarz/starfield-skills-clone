import { useNavigate } from 'react-router-dom';
import Button from '../../button/index';
import SkillTabInfo from './SkillTabInfo';
import SkillsTop from './SkillsTop';
import { useContext } from 'react';
import { MyContext } from '../../../context/contextSkills';
import IncreaseSkillModal from './IncreaseModal';

const SkillsComp = () => {

    const {
        skills,
        activeTab,
        fetchImage,
        setActiveSkill,
        setInfoBox,
        increaseModal,
        setIncreaseModal,
        skillPoints,
        setActiveCascading,
    } = useContext(MyContext);

    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }

    const badgeHover = (item) => {
        setActiveSkill(item);
        setInfoBox(true);
    }

    return (
        <div className='skills'>

            <SkillsTop />

            {
                increaseModal ? <IncreaseSkillModal /> : null
            }

            <div className='skill-points'>
                SKILL POINTS
                <span>{skillPoints}</span>
            </div>

            <Button keyCode='TAB' title='BACK' func={goBack} />





            <div className='tabs-wrapper'>
                <div className={`tabs-container active-${activeTab}`}>

                    {
                        skills.map(({ title, totalPoints, cascading1, cascading2, cascading3, cascading4 }, index) => (

                            <div
                                className={`skill-tab ${title} ${title === activeTab ? 'active-skill-tab' : ''}`}
                                key={index}
                            >
                                <div className='skill-tab-head'>{title}</div>
                                <div className='cascading cascading1'>
                                    {
                                        cascading1.map((item, ind) => (
                                            <div
                                                className='cascading-item'
                                                key={ind}
                                                data-title={item.skillTitle}
                                                onMouseOver={() => badgeHover(item)}
                                                onMouseLeave={() => setInfoBox(false)}
                                                onClick={() => {setIncreaseModal(true); setActiveCascading(1);}}
                                            >
                                                <div
                                                    className={item.rankSituation < 2 ? 'level1-badge' : ''}
                                                >
                                                    <img
                                                        className={item.rankSituation === 1 ? 'level1' : ''}
                                                        src={fetchImage(item.skillTitle, item.rankSituation)}
                                                        alt='Badge'
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='cascading cascading2'>
                                    {
                                        cascading2.map((item, ind) => (
                                            <div
                                                className='cascading-item'
                                                key={ind}
                                                data-title={item.skillTitle}
                                                onMouseOver={() => badgeHover(item)}
                                                onMouseLeave={() => setInfoBox(false)}
                                                onClick={() => {setIncreaseModal(true); setActiveCascading(2);}}
                                            >
                                                <div
                                                    className={
                                                        totalPoints < 3 ? 'level1-badge locked-badge' : (
                                                            item.rankSituation < 2 ? 'level1-badge' : ''
                                                        )
                                                    }
                                                >
                                                    <img
                                                        className={item.rankSituation === 1 ? 'level1' : ''}
                                                        src={fetchImage(item.skillTitle, item.rankSituation)}
                                                        alt='Badge'
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='cascading cascading3'>
                                    {
                                        cascading3.map((item, ind) => (
                                            <div
                                                className='cascading-item'
                                                key={ind}
                                                data-title={item.skillTitle}
                                                onMouseOver={() => badgeHover(item)}
                                                onMouseLeave={() => setInfoBox(false)}
                                                onClick={() => {setIncreaseModal(true); setActiveCascading(3);}}
                                            >
                                                <div
                                                    className={
                                                        totalPoints < 10 ? 'level1-badge locked-badge' : (
                                                            item.rankSituation < 2 ? 'level1-badge' : ''
                                                        )
                                                    }
                                                >
                                                    <img
                                                        className={item.rankSituation === 1 ? 'level1' : ''}
                                                        src={fetchImage(item.skillTitle, item.rankSituation)}
                                                        alt='Badge'
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='cascading cascading4'>
                                    {
                                        cascading4.map((item, ind) => (
                                            <div
                                                className='cascading-item'
                                                key={ind}
                                                data-title={item.skillTitle}
                                                onMouseOver={() => badgeHover(item)}
                                                onMouseLeave={() => setInfoBox(false)}
                                                onClick={() => {setIncreaseModal(true); setActiveCascading(4);}}
                                            >
                                                <div
                                                    className={
                                                        totalPoints < 15 ? 'level1-badge locked-badge' : (
                                                            item.rankSituation < 2 ? 'level1-badge' : ''
                                                        )
                                                    }
                                                >
                                                    <img
                                                        className={item.rankSituation === 1 ? 'level1' : ''}
                                                        src={fetchImage(item.skillTitle, item.rankSituation)}
                                                        alt='Badge'
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                title === activeTab ? <SkillTabInfo /> : null
                                }
                </div>

                )
                )
                    }

            </div>
        </div>
        </div >
    )
}
export default SkillsComp;