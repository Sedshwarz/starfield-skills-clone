import React, { useContext } from "react";
import { MyContext } from "../../../context/contextSettings";

import NormalValues from "./NormalValues";
import RangeValues from "./RangeValues";
import SettingDefinations from "./SettingDefinations";

const SettingWrapper = () => {

    const {
        activeSettingName,
        activeSettingAry,
        stgItms
    } = useContext(MyContext);

    return (
        <div className={'setting-wrapper wrapper-' + activeSettingName}>
            <h1>{activeSettingName}</h1>
            <div className={activeSettingName === 'bindings' ? 'bindings-th' : 'none'}>
                <span>ACTION</span>
                <div>
                    <span>MAIN KEY</span>
                    <span>ALT KEY</span>
                </div>
            </div>
            
            <div className='setting-container'>

                <div className='setting-items' ref={stgItms}>
                    {
                        activeSettingAry && activeSettingAry.title !== 'bindings' ? (

                            <NormalValues />

                        ) : (

                            <RangeValues />

                        )}
                </div>

                <SettingDefinations />

            </div>
        </div>
    )
}
export default SettingWrapper;