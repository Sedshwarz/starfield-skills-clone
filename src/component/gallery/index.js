import './style/style.css';
import img from '../../assets/other/photo-icon.png';
import Button from '../button';

const Gallery = () => {

    const goBack = () => {
        window.history.back();
    }

    return(
        <div className='photo-gallery'>
            <div className='ph-stick phs-1'></div>
            <div className='photo-body'>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
                <div className='photo'>
                    <img src={img} alt='photogallery' />
                </div>
            </div>

            <div className='ph-stick phs-2'></div>

            <div className='pg-buttons'>
                <Button keyCode='E' title='ENLARGE' func={null} />
                <Button keyCode='R' title='DELETE' func={null} />
                <Button keyCode='TAB' title='EXIT' func={goBack} />
            </div>
        </div>
    )
}
export default Gallery;