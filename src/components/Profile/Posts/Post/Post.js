import s from './Post.module.css';
import ava from '../../../../images/logo-social.svg';

const Post = ({ posts }) => {
    // console.log(posts.posts);
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id} className={s.item}>
                    <img src={ava} width="15" alt="img social network" />
                    <p>{post.message}</p>
                    <div>
                        <button>like</button>
                        <span>{post.likesCount}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};
export default Post;
