import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ dialogs }) => {
    // console.log(dialogs);
    return (
        <div className={s.dialogItem}>
            {dialogs.map(el => (
                <NavLink
                    key={el.id}
                    to={`/messages/${el.id}`}
                    className={s.link}
                    activeClassName={s.activeLink}
                >
                    {el.name}
                </NavLink>
            ))}
        </div>
    );
};
export default DialogItem;
