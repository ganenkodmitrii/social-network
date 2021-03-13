import s from './Messages.module.css';

const Messages = ({ messages }) => {
    return (
        <div className={s.messages}>
            {messages.map(el => (
                <div key={el.id} className={s.message}>
                    {el.message}
                </div>
            ))}
        </div>
    );
};
export default Messages;
