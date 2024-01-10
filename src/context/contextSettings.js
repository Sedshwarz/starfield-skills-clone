import { createContext, useState, useRef, useEffect } from "react";
import { SettingsAry, optionsAry, bindingNames } from "../component/settings_page/settings";

export const MyContext = createContext();

const ContextStructure = (props) => {


    const [activeSettingName, setActiveSettingName] = useState(null);
    const [settings, setSettings] = useState(SettingsAry);
    const [activeSettingAry, setActiveSettingAry] = useState([]);
    const [activeSettingIndex, setActiveSettingIndex] = useState(0);
    const [bindMode, setBindMode] = useState(false);
    const [activeBindId, setActiveBindId] = useState([0, 0]);
    const [conflicts, setConflicts] = useState([]);
    const [resetToDefault, setResetToDefault] = useState(false);
    const stgItms = useRef(null);



    useEffect(() => {

        const tempAry = settings.filter(elm => elm.title === activeSettingName)[0];

        if (activeSettingName !== null) {
            setActiveSettingAry(tempAry);
        }

        const acvIndLn = tempAry?.options?.length - 1;
        if (acvIndLn !== undefined) {
            setActiveSettingIndex(acvIndLn);
        }

        const timeout = setTimeout(() => {
            if (stgItms.current) {
                stgItms.current.scrollTop = stgItms.current.scrollHeight;
            }
        }, 10);

        return () => clearTimeout(timeout);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSettingName]);



    useEffect(() => {
        const tempAry = settings.filter(elm => elm.title === activeSettingName)[0];
        setActiveSettingAry(tempAry);

        const conflictsControl = () => {

            const tempConfAry = [];

            const ary = (settings.find(elm => elm.title === 'bindings')).options;
            ary.forEach(elm => {
                if (elm.inclusiveID) {
                    const grp = ary.filter(el => el.id >= elm.inclusiveID && el.id <= elm.inclusiveID2);

                    for (let index = 0; index < grp.length; index++) {
                        for (let index2 = index + 1; index2 < grp.length; index2++) {
                            if ((grp[index].keyCode === grp[index2].keyCode && grp[index].keyCode !== null) ||
                                (grp[index].altKeyCode === grp[index2].altKeyCode && grp[index].altKeyCode !== null) ||
                                (grp[index].keyCode === grp[index2].altKeyCode && grp[index].keyCode !== null) ||
                                (grp[index].altKeyCode === grp[index2].keyCode && grp[index].altKeyCode !== null)) {
                                tempConfAry.push({
                                    headline1: elm.optionTitle,
                                    headline2: elm.optionTitle,
                                    option1: grp[index].optionTitle,
                                    option2: grp[index2].optionTitle
                                });
                            }
                        }
                    }
                }
            });
            setConflicts(tempConfAry);
        }

        if (activeSettingName === 'bindings') {
            conflictsControl();
        }
    }, [activeSettingName, settings]);



    const activateBindMode = (idNum, whichKey) => {
        if (!bindMode) {
            setActiveBindId([idNum, whichKey]);
            setBindMode(true);
        }
    }


    useEffect(() => {

        const changeKeyBinding = (kName, kCode) => {
            const matchedBnd = bindingNames.find(elm => elm.normalName === kName);
            const newKeyName = matchedBnd !== undefined ? matchedBnd.targetName : kName;

            setSettings(prevSettings => {
                return prevSettings.map(setting => {
                    if (setting.title === 'bindings') {
                        return {
                            ...setting,
                            options: setting.options.map(option =>
                                option.id === activeBindId[0] && activeBindId[1] === 0
                                    ? (option.altKeyCode === kCode ?
                                        { ...option, keyName: newKeyName, keyCode: kCode, altKeyCode: null, altKeyName: "" } :
                                        { ...option, keyName: newKeyName, keyCode: kCode })
                                    : option.id === activeBindId[0] && activeBindId[1] === 1
                                        ? (option.keyCode === kCode ?
                                            { ...option, altKeyName: newKeyName, altKeyCode: kCode, keyCode: null, keyName: "" } :
                                            { ...option, altKeyName: newKeyName, altKeyCode: kCode })
                                        : option
                            ),
                        };
                    }
                    return setting;
                });
            });
        }

        const handleKeyDown = (event) => {
            if (bindMode) {
                const bindData = event.key ? event.key :
                    (event.button ? (event.button === 0 ? 'click1' :
                        (event.button === 1 ? 'click3' : 'click2')) :
                        (event.deltaY && event.deltaY < 0 ? 'click4' :
                            (event.deltaY && event.deltaY > 0 ? 'click5' : 'click1'))
                    );

                const bindDataCode = event.key ? event.which :
                    (event.button !== undefined || event.deltaY !== undefined ? bindData : 'undefined');

                bindDataCode === 46 ?
                    changeKeyBinding("", null) :
                    changeKeyBinding(bindData, bindDataCode);

                setActiveBindId([0, 0]);
                setBindMode(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleKeyDown);
        document.addEventListener('wheel', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleKeyDown);
            document.removeEventListener('wheel', handleKeyDown);
        };

    }, [activeBindId, bindMode]);



    const defaultSettings = () => {
        if (activeSettingName === 'bindings') {

            let defaultBindings = activeSettingAry.options;

            defaultBindings = defaultBindings.map(
                item =>
                    item.keyCode ?
                        {
                            ...item,
                            keyCode: item.defaultKeyCode,
                            keyName: item.defaultKeyName,
                            altKeyCode: item.defaultAltKeyCode,
                            altKeyName: item.defaultAltKeyName
                        } : item
            )

            setSettings(prevSettings => {
                return prevSettings.map(
                    setting => setting.title === 'bindings' ?
                        { ...setting, options: defaultBindings }
                        : setting
                );
            });

        } else {
            setResetToDefault(true);
            let defaultStgs = activeSettingAry.options;

            defaultStgs = defaultStgs.map(
                item =>
                    Number.isInteger(item.valueType) && item.valueType < 6 ?
                        {
                            ...item,
                            value: optionsAry[item.valueType][item.defaultVal]
                        } : (
                            typeof item.valueType === 'string' ?
                                {
                                    ...item,
                                    value: item.defaultVal
                                } : item
                        )
            );

            setSettings(settings.map(
                stt => stt.title === activeSettingName ?
                    { ...stt, options: defaultStgs } :
                    stt
            )
            );

            setTimeout(() => {
                setResetToDefault(false);
            }, 100);
        }
    }



    return (
        <MyContext.Provider value={{
            activeSettingName,
            setActiveSettingName,
            settings,
            setSettings,
            activeSettingAry,
            setActiveSettingAry,
            activeSettingIndex,
            setActiveSettingIndex,
            bindMode,
            setBindMode,
            activeBindId,
            setActiveBindId,
            conflicts,
            setConflicts,
            resetToDefault,
            setResetToDefault,
            stgItms,
            activateBindMode,
            defaultSettings
        }}>
            {props.children}
        </MyContext.Provider>
    )
}
export default ContextStructure;