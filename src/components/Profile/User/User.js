import s from './User.module.css';
const User = () => {
    return (
        <>
            <div className={s.userInfo}>
                <h1 className={s.ava}>ava </h1>
                <p>description</p>
            </div>
        </>
    );
};
export default User;
