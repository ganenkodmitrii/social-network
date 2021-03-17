import { createRef } from 'react';
import s from './Messages.module.css';

const Messages = ({ messages }) => {
    const newMessageElem = createRef();

    const sendNewMessages = () => {
        const message = newMessageElem.current.value;
        alert(message);
    };
    return (
        <div className={s.messages}>
            <div>
                <textarea ref={newMessageElem}></textarea>
                <button onClick={sendNewMessages}>send</button>
            </div>
            {messages.map(el => (
                <div key={el.id} className={s.message}>
                    {el.message}
                </div>
            ))}
        </div>
    );
};
export default Messages;
