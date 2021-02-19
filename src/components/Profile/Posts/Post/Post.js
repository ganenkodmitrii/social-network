import s from './Post.module.css';
import ava from '../../../../images/logo-social.svg';
const Post = () => {
    return (
        <li className={s.item}>
            <img
                className={s.ava}
                src={ava}
                width="15"
                alt="img social network"
            />
            <p>text</p>
            <div>
                <span>like</span>
            </div>
        </li>
    );
};
export default Post;
