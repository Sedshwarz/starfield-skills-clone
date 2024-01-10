import { useContext, Fragment } from "react";
import { MyContext } from "../../../context/contextSettings";

const RangeValues = () => {

    const {
        activeSettingAry,
        activeSettingIndex,
        setActiveSettingIndex,
        activeBindId,
        bindMode,
        activateBindMode
    } = useContext(MyContext);

    return (
        <Fragment>
            {
                activeSettingAry &&
                activeSettingAry.options &&
                [...activeSettingAry.options]
                    .reverse().map(({ id, optionTitle, keyName, altKeyName, optionType }, index) => (
                        <Fragment key={index}>
                            {
                                optionType ? (
                                    <div className='setting-item binding-headline bnd-stg-item'>
                                        <span className='si-title'>{optionTitle}</span>
                                        <div className='si-stick'></div>
                                    </div>
                                ) : (
                                    <div
                                        className={`setting-item bnd-stg-item ${index === activeSettingIndex ? 'active-setting-item' : ''}`}
                                        onMouseOver={() => !bindMode ? setActiveSettingIndex(index) : null}
                                    >
                                        <span className='si-title'>{optionTitle}</span>
                                        <div className='si-value'>
                                            <div
                                                className={
                                                    'main-key si-value-key' +
                                                    (id === activeBindId[0] && activeBindId[1] === 0 ? ' active-si-value-key' : '') +
                                                    (keyName === 'MOUSEWHEELUP' || keyName === 'MOUSEWHEELDOWN' ? ' smalledFont' : '')
                                                }
                                                onClick={() => activateBindMode(id, 0)}
                                            >
                                                {keyName !== '' ? (keyName + ')') : ''}
                                            </div>
                                            <div
                                                className={
                                                    'alt-key si-value-key' +
                                                    (id === activeBindId[0] && activeBindId[1] === 1 ? ' active-si-value-key' : '') +
                                                    (altKeyName === 'MOUSEWHEELUP' || altKeyName === 'MOUSEWHEELDOWN' ? ' smalledFont' : '')
                                                }
                                                onClick={() => activateBindMode(id, 1)}
                                            >
                                                {altKeyName !== '' ? (altKeyName + ')') : ''}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </Fragment>
                    )
                    )
            }
        </Fragment>
    )
}
export default RangeValues;

