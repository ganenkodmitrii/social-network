import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

import s from './Dialogs.module.css';

const Dialogs = ({ data }) => {
    // console.log(data);

    return (
        <div className={s.dialogs}>
            <DialogItem dialogs={data.dialogs} />
            <Messages messages={data.messages} />
        </div>
    );
};
export default Dialogs;
