import logo from './../../img/icons/logo.svg';
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="header__menu">
                        <a href="#!">catalogue</a>
                        <a href="#!">fashion</a>
                        <a href="#!">favourite</a>
                        <a href="#!">lifestyle</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header