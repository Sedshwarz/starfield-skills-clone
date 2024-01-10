import './style/style.css';
import line from '../../assets/other/line.png';
import Button from '../button';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/contextSettings';

import SettingsMenu from './components/settingsMenu';
import SettingWrapper from './components/settingWrapper';

const Settings = () => {

    const { activeSettingName, setActiveSettingName, bindMode, defaultSettings } = useContext(MyContext);
    const navigate = useNavigate();

    const backTo = () => {
        if (activeSettingName === null) {
            navigate('/');
        } else {
            navigate('/settings');
            setActiveSettingName(null);
        }
    }

    const openSetting = (stg) => {
        navigate(stg);
        setActiveSettingName(stg);
    }

    return (
        <div className='settings'>

            <div className='stg-bottom'>
                {
                    !bindMode ? (
                        <>
                            {
                                activeSettingName !== null ?
                                    <Button keyCode='B' title='DEFAULTS' func={defaultSettings} /> : null
                            }
                            <Button keyCode='TAB' title='BACK' func={backTo} />
                        </>
                    ) : <span className='stgb-btxt'>PRESS A BUTTON TO MAP TO THIS ACTION.</span>

                }
            </div>

            <div className='settings-left'>
                <span>SETTINGS</span>
                <img src={line} alt='line' width={37} height={622} />
                <h6>94898052 V1.7.36.0</h6>
            </div>

            {
                activeSettingName === null ? (
                    
                    <SettingsMenu openSetting={openSetting} />
                ) :
                    (
                        <SettingWrapper />
                    )
            }

        </div>
    )
}
export default Settings;