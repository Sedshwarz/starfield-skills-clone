import { Fragment } from 'react';
import logo from '../../../assets/other/logo.png';

const SettingsMenu = ({openSetting}) => {
    return (
        <Fragment>
            <img
                src={logo}
                alt='starfield'
                className='settings-logo'
            />
            <div className='settings-menu'>
                <div className='settings-menu-item' onClick={() => openSetting('gameplay')}>GAMEPLAY</div>
                <div className='settings-menu-item' onClick={() => openSetting('display')}>DISPLAY</div>
                <div className='settings-menu-item' onClick={() => openSetting('interface')}>INTERFACE</div>
                <div className='settings-menu-item' onClick={() => openSetting('controls')}>CONTROLS</div>
                <div className='settings-menu-item' onClick={() => openSetting('bindings')}>BINDINGS</div>
                <div className='settings-menu-item' onClick={() => openSetting('audio')}>AUDIO</div>
                <div className='settings-menu-item' onClick={() => openSetting('accessibility')}>ACCESSIBILITY</div>
            </div>
        </Fragment>
    )
}
export default SettingsMenu;