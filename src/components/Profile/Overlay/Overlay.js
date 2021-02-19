import backImage from '../../../images/backImage.jpg';
import s from './Overlay.module.css';
const Overlay = () => {
    return (
        <>
            <div className={s.boxBackroundImage}>
                <img className={s.overlay} src={backImage} width="400" />
            </div>
        </>
    );
};
export default Overlay;
