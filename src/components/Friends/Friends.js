// import s from './Friends.module.css';
const Friends = ({ data }) => {
    const { friends } = data;
    return (
        <>
            <ul>
                {friends.map(el => (
                    <li key={el.id}>{el.surname}</li>
                ))}
            </ul>
        </>
    );
};
export default Friends;
