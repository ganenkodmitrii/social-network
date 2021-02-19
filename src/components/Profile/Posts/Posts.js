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
                    <Post message="It is my first post" likesCount="5" />
                    <Post message="Hi. Your post is good" likesCount="2" />
                    <Post message="Yep, I add like" likesCount="1" />
                </ul>
            </div>
        </div>
    );
};
export default Posts;
