import React from 'react'
import styles from './SectionLabel.module.css'
import icon from '../../assets/icon.png'

const SectionLabel = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.title}>{props.title}</div>
        </div>
    )
}

export default SectionLabel
