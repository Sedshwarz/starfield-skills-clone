import { useEffect, useState, useRef } from 'react';
import '../style/style.css';
import { ContinueItems, LoadItemsArray, Characters } from './menu-content';
import Button from '../../button';
import { Link } from 'react-router-dom';

const Menu = ({ setMenuActive }) => {

    const menuConRef = useRef();

    const [loadItems, setLoadItems] = useState(LoadItemsArray);
    const [disableMenu, setDisableMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0);
    const [activeLoad, setActiveLoad] = useState(1);
    const [activeLoadID, setActiveLoadID] = useState(0);
    const [activeContinue, setActiveContinue] = useState(1);
    const [activeMenuContent, setActiveMenuContent] = useState(0);
    const [activeCountinueRecord, setActiveCountinueRecord] = useState(false);
    const [activeLoadRecord, setActiveLoadRecord] = useState(false);
    const [activeCharacters, setActiveCharacters] = useState(false);

    useEffect(() => {
        if (activeMenu === 3 && menuConRef.current) {
            menuConRef.current.scrollTop = menuConRef.current.scrollHeight;
        }
    }, [activeMenu]);

    const openContinue = () => {
        setActiveMenuContent(1);
        setActiveMenu(1);
        setMenuActive(true);
    }
    const openLoad = () => {
        setActiveMenuContent(2);
        setActiveMenu(3);
        setMenuActive(true);
    }
    const openNew = () => {
        setActiveMenuContent(0);
        setActiveMenu(2);
        setMenuActive(true);
        setDisableMenu(true);
    }
    const cancelNewGame = () => {
        setDisableMenu(false);
        setActiveMenuContent(0);
        setActiveMenu(0);
        setMenuActive(false);
    }
    const openContinueConfirm = () => {
        setDisableMenu(true);
        setActiveCountinueRecord(true);
    }
    const cancelContinue = () => {
        setDisableMenu(false);
        setActiveCountinueRecord(false);
    }
    const openLoadConfirm = () => {
        setDisableMenu(true);
        setActiveLoadRecord(true);
    }
    const cancelLoad = () => {
        setDisableMenu(false);
        setActiveLoadRecord(false);
    }
    const openCharacters = () => {
        setActiveCharacters(true);
        cancelLoad();
        setActiveMenu(4);
        setActiveMenuContent(4);
    }
    const returnToLoads = () => {
        setActiveMenu(3);
        setActiveCharacters(false);
        setActiveMenuContent(2);
    }
    const returnToLoby = () => {
        setActiveMenu(0);
        setActiveCharacters(false);
        setActiveMenuContent(0);
        setMenuActive(false);
        setDisableMenu(false);
    }
    const deleteLoad = () => {
        const newLoads = loadItems.filter((load) => load.id !== activeLoadID);
        setLoadItems(newLoads);
        cancelLoad();
    }

    return (
        <>
            <div className='menu-wrapper'>
                <div className={`menu ${disableMenu ? 'disable' : ''}`}>
                    <div
                        className={`menu-item ${activeMenu === 1 ? 'active-menu-item' : ''}`}
                        onClick={() => openContinue()}
                    >
                        CONTINUE
                    </div>
                    <div
                        className={`menu-item ${activeMenu === 2 ? 'active-menu-item' : ''}`}
                        onClick={() => openNew()}
                    >
                        NEW
                    </div>
                    <div
                        className={`menu-item ${activeMenu === 3 || activeMenu === 4 ? 'active-menu-item' : ''}`}
                        onClick={() => openLoad()}
                    >
                        LOAD
                    </div>
                    <Link to='/settings'>
                        <div className='menu-item'>SETTINGS</div>
                    </Link>
                    <Link to='/gallery'>
                        <div className='menu-item'>PHOTO GALLERY</div>
                    </Link>
                    <Link to='/crew'>
                        <div className='menu-item'>CREW</div>
                    </Link>
                    <Link to='/skills'>
                        <div className='menu-item'>SKILLS</div>
                    </Link>
                    <div className='menu-item'>QUIT</div>
                </div>

                <div
                    className={`menu-content ${disableMenu ? 'disable' : ''}`}
                    ref={menuConRef}
                >
                    <div className={activeMenuContent === 1 ? 'continue-items' : 'none'}>
                        {
                            ContinueItems.map(({ profile, location, level, date, time, journal }, index) => (
                                <div
                                    className={`continue-items-item ${activeContinue === (index + 1) ? 'cii-active' : ''}`}
                                    key={index}
                                    onMouseOver={() => setActiveContinue(index + 1)}
                                    onClick={() => openContinueConfirm()}
                                >
                                    <div className='cii-left'>
                                        <span id='ciil-profile'>{profile}</span>
                                        <span id='ciil-location'>{location}</span>
                                        <span id='ciil-level'>Level {level}</span>
                                    </div>
                                    <div className='cii-right'>
                                        <div>
                                            <span id='ciir-1'>{date}</span>
                                            <span id='ciir-2'>{time}</span>
                                        </div>
                                        <span id='ciir-jrn'>{journal}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className={activeMenuContent === 2 ? 'load-items' : 'none'}>
                        {
                            loadItems.map(({ id, location, level, date, time, journal }, index) => (
                                <div
                                    className={`load-items-item ${activeLoad === (index + 1) ? 'lii-active' : ''}`}
                                    key={index}
                                    onMouseOver={() => setActiveLoad(index + 1)}
                                    onClick={() => { openLoadConfirm(); setActiveLoadID(id); }}
                                >
                                    <div className='list-no'>{index + 1}</div>
                                    <div className='lii-left'>
                                        <span id='liil-location'>{location}</span>
                                        <span id='liil-level'>Level {level}</span>
                                    </div>
                                    <div className='lii-right'>
                                        <div>
                                            <span id='liir-1'>{date}</span>
                                            <span id='liir-2'>{time}</span>
                                        </div>
                                        <span id='liir-jrn'>{journal}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                    <div className={activeCharacters && activeMenu === 4 ? 'characters' : 'none'}>
                        <div className='characters-item'
                            onClick={() => returnToLoads()}>SHOW ALL SAVES</div>
                        {
                            Characters.map((item) => (
                                <div
                                    className='characters-item'
                                    key={item.id}
                                    onClick={() => returnToLoby()}
                                >{item.name}</div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className={activeMenu === 2 ? 'new-block' : 'none'}>
                <h1>START A NEW GAME?</h1>
                <div className='new-block-buttons'>
                    <Button keyCode='E' title='CONFIRM' func={cancelNewGame} />
                    <Button keyCode='TAB' title='CANCEL' func={cancelNewGame} />
                </div>
            </div>

            <div className={activeCountinueRecord && activeMenu === 1 ? 'new-block' : 'none'}>
                <div className='new-block-buttons'>
                    <Button keyCode='E' title='CONFIRM' func={returnToLoby} />
                    <Button keyCode='TAB' title='CANCEL' func={cancelContinue} />
                </div>
            </div>

            <div className={activeLoadRecord ? 'new-block' : 'none'}>
                <div className='new-block-buttons'>
                    <Button keyCode='R' title='DELETE' func={deleteLoad} />
                    <Button keyCode='B' title='SELECT CHARACTER' func={openCharacters} />
                    <Button keyCode='TAB' title='CANCEL' func={cancelLoad} />
                </div>
            </div>

            <div className={activeCharacters && activeMenu === 4 ? 'new-block' : 'none'}>
                <Button keyCode='TAB' title='CANCEL' func={returnToLoads} />
            </div>
        </>
    )
}
export default Menu;