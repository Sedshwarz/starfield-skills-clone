import { useEffect, useState } from "react";

const Value = ({ id, array, value, setSettings, activeSettingName, resetToDefault }) => {

    const [activeIndex, setActiveIndex] = useState(array.indexOf(value));

    useEffect(() => {
        if (!resetToDefault) {
            setSettings(prevSettings => {
                return prevSettings.map(setting => {
                    if (setting.title === activeSettingName) {
                        return {
                            ...setting,
                            options: setting.options.map(option =>
                                option.id === id ? { ...option, value: array[activeIndex] } : option
                            ),
                        };
                    }
                    return setting;
                });
            });
        } else {
            setActiveIndex(array.indexOf(value));
        }
    }, [activeIndex, activeSettingName, array, id, resetToDefault, setSettings, value]);

    return (
        <>
            {

                array === "nopt" ? (
                    <div className='value-wrapper'>
                        <div className='on-off-value'>
                            {value}
                        </div>
                    </div>
                ) : (
                    array === "nopt2" ? (
                        <div className='value-wrapper'>
                            <div className='on-off-value'>
                                <span className='xl-wid'>
                                    {value}
                                </span>
                            </div>
                        </div>
                    ) : (

                        array[0] === 'on' ? (
                            <div className='value-wrapper' onClick={() => setActiveIndex(activeIndex === 1 ? 0 : 1)}>
                                <div className='on-off-value'>
                                    {
                                        array[activeIndex]
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className='value-wrapper'>
                                <div
                                    className={`value-wrapper-arrow ${activeIndex === 0 ? 'disabled' : ''}`}
                                    onClick={() => setActiveIndex(activeIndex - 1)}
                                >
                                    ◀
                                </div>

                                {
                                    array[activeIndex]
                                }

                                <div
                                    className={`value-wrapper-arrow ${array.length - 1 === activeIndex ? 'disabled' : ''}`}
                                    onClick={() => setActiveIndex(activeIndex + 1)}
                                >
                                    ▶
                                </div>
                            </div>
                        )

                    )
                )


            }
        </>
    )
}
export default Value;


export const RangeValue = ({ id, value, valueType, setSettings, activeSettingName, min, max, parity, resetToDefault }) => {

    const [rangeValue, setRangeValue] = useState(value);

    useEffect(() => {
        if (!resetToDefault) {
            setSettings(prevSettings => {
                return prevSettings.map(setting => {
                    if (setting.title === activeSettingName) {
                        return {
                            ...setting,
                            options: setting.options.map(option =>
                                option.id === id ? { ...option, value: parseInt(rangeValue) } : option
                            ),
                        };
                    }
                    return setting;
                });
            });
        }else{
            setRangeValue(value);
        }
    }, [rangeValue, id, activeSettingName, setSettings, resetToDefault, value]);

    return (
        <div className='value-wrapper'>
            <div className='value-wrapper-range'>
                {
                    valueType === 'range' ? (
                        <>
                            <span>
                                {rangeValue.toString() + (parity !== 'none' ? '%' : '')}
                            </span>
                            <input
                                type='range'
                                min={min}
                                max={max}
                                value={rangeValue}
                                onChange={(e) => setRangeValue(e.target.value)}
                            />
                        </>
                    ) : (
                        valueType === 'range m' ? (
                            <>
                                <span>
                                    {parseFloat(rangeValue).toFixed(1)}m
                                </span>
                                <input
                                    type='range'
                                    min={min}
                                    max={max}
                                    value={rangeValue}
                                    onChange={(e) => setRangeValue(e.target.value)}
                                />
                            </>
                        ) : (
                            valueType === 'range x' ? (
                                <>
                                    <span>
                                        {parseFloat(rangeValue).toFixed(2)}x
                                    </span>
                                    <input
                                        type='range'
                                        min={min}
                                        max={max}
                                        step={0.5}
                                        value={rangeValue}
                                        onChange={(e) => setRangeValue(e.target.value)}
                                    />
                                </>
                            ) : (
                                valueType === 'range n' ? (
                                    <>
                                        <span>
                                            {parseFloat(rangeValue).toFixed(2)}
                                        </span>
                                        <input
                                            type='range'
                                            min={min}
                                            max={max}
                                            step={0.05}
                                            value={rangeValue}
                                            onChange={(e) => setRangeValue(e.target.value)}
                                        />
                                    </>
                                ) : null
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}