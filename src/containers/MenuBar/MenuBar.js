import React from 'react'
import styles from './MenuBar.module.css'
import arrowDown from '../../assets/arrow.svg'

const MenuBar = () => {
    return (
        <div className={styles.Menu}>
            <div className={styles.MenuContents}>
                <div className={styles.bar}>
                    <div className={styles.cat}>
                        <div className={styles.title}>
                            GOTOWE ZESTAWY DO GRY
                            <img className={styles.arrow} src={arrowDown} alt="strzałka" />
                        </div>
                    </div>
                    <div className={styles.cat}>
                        <div className={styles.title}>
                            SPRZĘT
                            <img className={styles.arrow} src={arrowDown} alt="strzałka" />
                        </div>
                    </div>
                    <div className={styles.cat}>
                        <div className={styles.title}>
                            ODZIEŻ
                            <img className={styles.arrow} src={arrowDown} alt="strzałka" />
                        </div>
                    </div>
                    <div className={styles.cat}>
                        <div className={styles.title}>
                            KULKI
                        </div>
                    </div>
                    <div className={styles.cat}>
                        <div className={styles.title}>
                            WYPRZEDAŻE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar
