import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <nav className={s.navBox}>
        <NavLink
            to="/profile"
            exact
            className={s.link}
            activeClassName={s.activeLink}
        >
            Profile
        </NavLink>

        <NavLink
            to="/messages"
            exact
            className={s.link}
            activeClassName={s.activeLink}
        >
            Messages
        </NavLink>

        <NavLink to="/news" className={s.link} activeClassName={s.activeLink}>
            News
        </NavLink>

        <NavLink to="/music" className={s.link} activeClassName={s.activeLink}>
            Music
        </NavLink>

        <NavLink
            to="/settings"
            className={s.link}
            activeClassName={s.activeLink}
        >
            Settings
        </NavLink>
    </nav>
);
export default Navigation;
