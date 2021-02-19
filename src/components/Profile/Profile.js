import Overlay from './Overlay/Overlay';
import User from './User/User';
import Posts from './Posts/Posts';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <>
            <Overlay />
            <User />
            <Posts />
        </>
    );
};
export default Profile;
