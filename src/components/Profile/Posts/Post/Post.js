import s from './Post.module.css';
import ava from '../../../../images/logo-social.svg';
const Post = ({ message, likesCount }) => {
    return (
        <li className={s.item}>
            <img
                className={s.ava}
                src={ava}
                width="15"
                alt="img social network"
            />
            <p>{message}</p>
            <div>
                <button>like</button>
                <span>{likesCount}</span>
            </div>
        </li>
    );
};
export default Post;
