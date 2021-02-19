import logo from '../../images/logo-social.svg';
import s from './Header.module.css';
const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img src={logo} width="50" alt="img social network" />
            </div>
        </header>
    );
};
export default Header;
