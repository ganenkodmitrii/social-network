import Overlay from './Overlay/Overlay';
import User from './User/User';
import Posts from './Posts/Posts';
// import s from './Profile.module.css';
const Profile = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <Overlay />
            <User />
            <Posts posts={posts} />
        </>
    );
};
export default Profile;
