import { useContext } from "react";
import { MyContext } from "../../../context/contextSettings";

const SettingDefinations = () => {

    const {
        activeSettingAry,
        activeSettingIndex,
        activeSettingName,
        conflicts
    } = useContext(MyContext);

    return (
        <div className='setting-defination'>
            {
                activeSettingName && activeSettingName !== 'bindings' ? (
                    <>
                        <span>
                            {
                                activeSettingAry &&
                                activeSettingAry.options &&
                                [...activeSettingAry.options].reverse()[activeSettingIndex].optionTitle
                            }
                        </span>
                        <p>
                            {
                                activeSettingAry &&
                                activeSettingAry.options &&
                                [...activeSettingAry.options].reverse()[activeSettingIndex].defination
                            }
                        </p>
                    </>
                ) : (
                    <>
                        <span>* Denotes actions that requires binding</span>
                        <div className='bnd-r-bc'>BINDING CONFLICTS</div>
                        <div className='conflicts'>
                            {
                                conflicts.map((item, index) => (
                                    <div className='conflict' key={index}>
                                        <div className='conflict-left'>
                                            <span>{item.headline1}</span>
                                            <span>{item.headline2}</span>
                                        </div>
                                        <div className='conflict-right'>
                                            <span>{item.option1}</span>
                                            <span>{item.option2}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}
export default SettingDefinations;

