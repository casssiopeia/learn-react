import React, { useContext } from "react";
import { Close } from "@mui/icons-material";
import styles from "./index.module.css";
import { ModalContext } from "./context";
import { icons } from ".";

export const ModalHeader = ({text, iconName}) => {

    const {onClose} = useContext(ModalContext);

    let icon = Object.keys(icons).includes(iconName) ? icons[iconName] : icons['info'];

    return(
        <div className={styles.header}>
            <span>{icon}</span>
            <span className={styles.headerText}>{text}</span>
            <Close className={styles.closeBtn} onClick={onClose} />
        </div>
    );
}