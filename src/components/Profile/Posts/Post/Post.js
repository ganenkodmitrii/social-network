import s from './Post.module.css';
import ava from '../../../../images/logo-social.svg';
const Post = ({ posts }) => {
    // console.log(posts);
    return (
        <div>
            <ul>
                {posts.map(el => (
                    <li key={el.id} className={s.item}>
                        <img
                            className={s.ava}
                            src={ava}
                            width="15"
                            alt="img social network"
                        />
                        <p>{el.message}</p>
                        <div>
                            <button>like</button>
                            <span>{el.likesCount}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Post;
