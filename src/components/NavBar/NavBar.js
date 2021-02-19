import s from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
    );
};
export default NavBar;
