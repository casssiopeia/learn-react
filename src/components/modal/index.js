import React, { useMemo, memo } from "react";
import { createPortal } from 'react-dom';
import styles from "./index.module.css";
import { ErrorOutline, CheckCircleOutline, HelpOutline } from "@mui/icons-material";
import { ModalContext } from "./context";
import { ModalHeader } from "./header";

// 1. state
// 2. parent
// 3. context
// 4. props
// 5. force

export const icons = {
    'alarm': <ErrorOutline htmlColor="#ef9f9f" />,
    'success': <CheckCircleOutline htmlColor="#9fe18b" />,
    'info': <HelpOutline />
};

export const Modal = memo(({ children, isOpen, onClose }) => {

    const value = useMemo(() => ({onClose}), {onClose});
    
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <ModalContext.Provider value={value}>
            <div className={styles.modal}>{children}</div>
        </ModalContext.Provider>, 
        document.body
    );
});

Modal.Header = ModalHeader;