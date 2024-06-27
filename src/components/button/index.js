import React from "react";
import styles from './index.module.css';
import cn from 'classnames'

/** 
 * @param {string} size s | m | xl
 * @param {string} view primary | secondary | secondaryAlt
 * */ 

export const Button = ({ size = 'm', view = 'primary', text, onClick }) => {

    return <button 
            onClick={onClick} 
            className={cn(styles.button, styles[size], styles[view])}
            >
        {text}
    </button>;
};