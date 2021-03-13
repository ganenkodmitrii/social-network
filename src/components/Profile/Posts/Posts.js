import s from './Posts.module.css';
import Post from './Post/Post';
const Posts = ({ posts }) => {
    // console.log(posts);
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea></textarea>
                <button>add post</button>
                <button>remove post</button>
            </div>
            <Post posts={posts} />
        </div>
    );
};
export default Posts;
