import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

import s from './Dialogs.module.css';

const Dialogs = ({ dialogs, messages }) => {
    return (
        <div className={s.dialogs}>
            <DialogItem dialogs={dialogs} />
            <Messages messages={messages} />
        </div>
    );
};
export default Dialogs;
