import s from './Posts.module.css';
import Post from './Post/Post';
const Posts = () => {
    return (
        <div className={s.posts}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove post</button>
            </div>
            <div>
                {/*  list new post  */}
                <ul>
                    <Post />
                    <Post />
                    <Post />
                </ul>
            </div>
        </div>
    );
};
export default Posts;
