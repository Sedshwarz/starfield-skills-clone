import './style/style.css';
import Bethesda from '../../assets/other/bethesda-logo.png';
import Menu from './menu/index';
import { useState } from 'react';

const Home = () => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className='home'>
            <img src={Bethesda} className='bethesda-logo' alt='Bethesda' />
            {
                menuActive === false ?
                    (
                        <div className='home-card'>
                            <div>WELCOME TO STARFIELD</div>
                            <p>Follow Starfield on all major social media platforms at @StarfieldGame to stay up-to-date on the latest news!</p>
                        </div>
                    ) : null
            }

            <Menu setMenuActive={setMenuActive} />

        </div>
    )
}
export default Home;