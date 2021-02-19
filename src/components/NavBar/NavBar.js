import s from './NavBar.module.css';
import Navigation from '../Navigation/Navigation';
const NavBar = () => {
    return (
        <section className={s.nav}>
            <Navigation />
        </section>
    );
};
export default NavBar;
