import s from './NavBar.module.css';
import Navigation from '../Navigation/Navigation';
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <Navigation />
        </nav>
    );
};
export default NavBar;
