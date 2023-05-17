import {useContext} from "react";
import {Context} from "../../context/context";
import MODAL_TYPES from "../../enums/modal-types";
import styles from './styles.module.scss'
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";

const ButtonAdd = () => {
    const {setModalType} = useContext(Context)

    return (
        <div className={styles.row}>
            <button
                onClick={() => setModalType(MODAL_TYPES.addContact)}
                className={styles.button}
            >
                <ComponentsSVG type={SVG_TYPES.add} className={styles.icon}/>

                <span>
                    Добавить клиента
                </span>
            </button>
        </div>
    )
}

export default ButtonAdd