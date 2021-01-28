import React from 'react'
import styles from './LanguageSelect.module.css'
import PL from '../../assets/pl.png'
import arrowDown from '../../assets/arrow.svg'

const LanguageSelect = () => {
    return (
        <div className={styles.language}>
            <div className={styles.text}>PL</div>
            <img className={styles.flag} src={PL} alt="Polski" />
            <img className={styles.arrow} src={arrowDown} alt="strzałka" />
        </div>
    )
}

export default LanguageSelect
