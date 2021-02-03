import React, { useState } from 'react'
import styles from './OffCanvas.module.css'
import LanguageSelect from '../../LanguageSelect/LanguageSelect'

const OffCanvas = (props) => {

    let [AccountOpen, SetAccountOpen] = useState(false)

    return (
        <div onClick={() => props.SetOffCanvasOpened(false)} className={`${styles.backDrop} ${props.opened ? styles.visible : null}`}>
            <div className={`${styles.offCanvas} ${props.opened ? styles.opened : null}`}>
                <div onClick={(e) => e.stopPropagation()} className={styles.container}>
                    <div className={styles.search}>
                        <input type="text" placeholder="Wpisz czego szukasz..." />
                    </div>
                    <div className={styles.language}>
                        <LanguageSelect />
                    </div>
                    <div className={`${styles.account} ${AccountOpen ? styles.accountOpen : null}`}>
                        <div onClick={() => SetAccountOpen(prev => !prev)} className={styles.accountHeader}>
                            <div className={styles.accountHeaderContainer}>
                                <div className={styles.accountTitle}>
                                    MOJE KONTO
                                </div>
                                <div className={`${styles.accountArrow} ${AccountOpen ? styles.accountArrowRotate : null}`} />
                            </div>
                        </div>
                        <div className={styles.expandable}>
                            <div className={styles.accountSection}>
                                Zarejestruj się
                            </div>
                            <div className={styles.accountSection}>
                                Moje zamówienia
                            </div>
                            <div className={styles.accountSection}>
                                Koszyk
                            </div>
                            <div className={styles.accountSection}>
                                Ulubione
                            </div>
                            <div className={styles.accountSection}>
                                Historia transakcji
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.account} ${AccountOpen ? styles.accountOpen : null}`}>
                        <div onClick={() => SetAccountOpen(prev => !prev)} className={styles.accountHeader}>
                            <div className={styles.accountHeaderContainer}>
                                <div className={styles.accountTitle}>
                                    MOJE KONTO
                                </div>
                                <div className={`${styles.accountArrow} ${AccountOpen ? styles.accountArrowRotate : null}`} />
                            </div>
                        </div>
                        <div className={styles.expandable}>
                            <div className={styles.accountSection}>
                                Zarejestruj się
                            </div>
                            <div className={styles.accountSection}>
                                Moje zamówienia
                            </div>
                            <div className={styles.accountSection}>
                                Koszyk
                            </div>
                            <div className={styles.accountSection}>
                                Ulubione
                            </div>
                            <div className={styles.accountSection}>
                                Historia transakcji
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffCanvas
