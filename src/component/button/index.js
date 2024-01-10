import './style/style.css';

const Button = ({ keyCode, title, func }) => {
    return (
        <div 
            className='button'
            onClick={()=> func(true)}
        >
            <span>{title}</span>
            <div className='keyBox'>
                <div className='button-bg'></div>
                <span>{keyCode}</span>
            </div>
        </div>
    )
}
export default Button;