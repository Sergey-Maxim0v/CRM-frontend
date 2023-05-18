import styles from './styles.module.scss'
import ComponentsSVG from "../components-svg";
import SVG_TYPES from "../../enums/svg-types";
import {FC} from "react";
import {IButtonAdd} from "./types";

const ButtonAdd: FC<IButtonAdd> = ({openModal}) => {
    return (
        <div className={styles.row}>
            <button
                onClick={() => openModal()}
                className={styles.button}
            >
                <ComponentsSVG type={SVG_TYPES.addClient} className={styles.icon}/>

                <span>
                    Добавить клиента
                </span>
            </button>
        </div>
    )
}

export default ButtonAdd