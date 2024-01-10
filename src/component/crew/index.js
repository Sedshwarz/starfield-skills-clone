import './style/style.css';
import { CrewCredits } from './crew-credits';
import Button from '../button';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Crew = () => {

    const goBack = () => {
        window.history.back();
    }

    const credits = useRef();
    const [calcSec, setCalcSet] = useState();

    useEffect(()=>{
        const height = credits.current.clientHeight,
        calcVal = (Math.ceil(height / 1080) * 15 + 10) + 's';
        setCalcSet(calcVal)
    },[]);

    return (
        <div className='crew'>

            <div className='marquee'>
                <div className='credits' ref={credits} style={{animationDuration: calcSec}}>
                    <div className='credits-column'>
                        <h1>For Robert</h1>
                    </div>
                    {
                        CrewCredits.map((item, index) => (
                            <div className='credits-column' key={index}>
                                <h1>{item.title}</h1>
                                <div className='credits-column-names'>
                                    {
                                        item.names.map((name, ind) => (
                                            <span key={ind}>{name}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <Button keyCode="TAB" title="SKIP" func={goBack} />

        </div>
    )
}
export default Crew;