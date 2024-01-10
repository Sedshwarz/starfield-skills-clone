import { useContext, Fragment } from "react";
import { MyContext } from "../../../context/contextSettings";
import Value, { RangeValue } from "../value-types";
import { optionsAry } from "../settings";

const NormalValues = () => {

    const {
        activeSettingAry,
        activeSettingIndex,
        setActiveSettingIndex,
        settings,
        setSettings,
        activeSettingName,
        resetToDefault
    } = useContext(MyContext);

    return (
        <Fragment>
            {
                activeSettingAry &&
                activeSettingAry.options &&
                [...activeSettingAry.options]
                    .reverse().map(({ id, optionTitle, valueType, value, defaultVal, min, max, parity }, index) => (

                        <div
                            className={`setting-item ${valueType === 6 ? 'disable-stg' : ''} ${index === activeSettingIndex ? 'active-setting-item' : ''}`}
                            key={index}
                            onMouseOver={() => setActiveSettingIndex(index)}
                        >
                            <span className='si-title'>{optionTitle}</span>
                            <div className='si-value'>
                                {
                                    Number.isInteger(valueType) && valueType < 6 ? (
                                        <Value
                                            id={id}
                                            array={optionsAry[valueType]}
                                            value={value}
                                            settings={settings}
                                            setSettings={setSettings}
                                            activeSettingName={activeSettingName}
                                            resetToDefault={resetToDefault}
                                            defaultVal={defaultVal}
                                        />
                                    ) : (
                                        typeof valueType === 'string' && valueType.includes('range') ? (
                                            <RangeValue
                                                id={id}
                                                value={value}
                                                valueType={valueType}
                                                settings={settings}
                                                setSettings={setSettings}
                                                activeSettingName={activeSettingName}
                                                min={min}
                                                max={max}
                                                resetToDefault={resetToDefault}
                                                parity={parity}
                                            />
                                        ) : value
                                    )
                                }
                            </div>
                        </div>
                    ))
            }
        </Fragment>
    )
}
export default NormalValues;

