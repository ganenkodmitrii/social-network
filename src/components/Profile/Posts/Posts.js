import React, { createRef } from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
const Posts = ({ posts }) => {
    // console.log(posts);

    const newPostElem = createRef();

    const addPost = () => {
        let text = newPostElem.current.value;
        alert(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <textarea ref={newPostElem}></textarea>
                <button onClick={addPost}>add post</button>
                {/* <button>remove post</button> */}
            </div>
            <Post posts={posts} />
        </div>
    );
};
export default Posts;
