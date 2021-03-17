import Overlay from './Overlay/Overlay';
import User from './User/User';
import Posts from './Posts/Posts';
// import s from './Profile.module.css';
const Profile = ({ data }) => {
    // console.log(data);
    return (
        <>
            <Overlay />
            <User />
            <Posts posts={data.posts} />
        </>
    );
};
export default Profile;
