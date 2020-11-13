import './Button.scss';
const Button = ({text, textColor='#444',onClickFunc}) => {
    return(
    <div className='button' style={{color:textColor}} onClick={onClickFunc}>
        {text}
    </div>
    )
}

export default Button;