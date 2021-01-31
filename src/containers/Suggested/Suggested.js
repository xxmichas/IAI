import React from 'react'
import styles from './Suggested.module.css'
import item from '../../assets/MASKA EMPIRE E-FLEX GOGGLE (BLACK).png'
import SectionLabel from '../SectionLabel/SectionLabel'

const Suggested = () => {
    return (
        <div className={styles.Suggested}>
            <SectionLabel title="DOBIERZ DO KOMPLETU" />
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className={styles.itemImg}>
                        <img src={item} alt="MASKA EMPIRE E-FLEX GOGGLE (BLACK)" />
                    </div>
                    <div className={styles.texts}>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                MASKA EMPIRE E-FLEX GOGGLE (BLACK)
                            </div>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.price}>
                                139,00 zł
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemImg}>
                        <img src={item} alt="MASKA EMPIRE E-FLEX GOGGLE (BLACK)" />
                    </div>
                    <div className={styles.texts}>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                MASKA EMPIRE E-FLEX GOGGLE (BLACK)
                            </div>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.price}>
                                139,00 zł
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemImg}>
                        <img src={item} alt="MASKA EMPIRE E-FLEX GOGGLE (BLACK)" />
                    </div>
                    <div className={styles.texts}>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                MASKA EMPIRE E-FLEX GOGGLE (BLACK)
                            </div>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.price}>
                                139,00 zł
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggested
