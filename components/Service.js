import React from "react";
import styles from "../styles/Home.module.css"

export const Service = ({name, desc}) => {
    return(
        <div className={styles.service}>
            <h1>{name}</h1>
            <div>
                {desc}
            </div>
        </div>
    )
}