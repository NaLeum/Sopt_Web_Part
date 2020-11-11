import './MainHeader.scss'
import Button from '../button/Button';
import MemuIcon from '../../assets/icons/icon.svg'
const MainHeader = ({match,history,location}) => {


    return(
        <header className="main-header">
            <img className='main-header__icon' alt='icon' src={MemuIcon}/>
            <nav className='main-header__nav'>
                <Button text="[ON SOPT] Web Part" onClickFunc={()=> history.push('/')}/>
                <span> / </span>
                <Button text="파트원소개" onClickFunc={()=>history.push('/members')}/>
            </nav>
            <div className='empty'></div>
            <div className='main-header__nav'>
                <Button text="Share" />
                 <Button text="Favorite" />
                 <Button text="..." />

            </div>
        </header>
    )
}
export default MainHeader;