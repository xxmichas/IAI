import React, { Fragment } from 'react'
import TopLinks from '../TopLinks/TopLinks'
import styles from './TopBar.module.css'
import logo from '../../assets/logo.png'
import magnifyingGlass from '../../assets/magnifying-glass.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import Basket from './Basket/Basket'

const TopBar = () => {
    return (
        <Fragment>
            <div className={styles.TopBar} />
            <TopLinks />
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img onClick={() => window.location.assign(window.location.origin)} src={logo} alt="logo" />
                </div>
                <div className={styles.Search}>
                    <input type="text" placeholder="Wpisz czego szukasz..." />
                </div>
                <div className={styles.MagnifyingGlass}>
                    <img src={magnifyingGlass} alt="Szukaj" />
                </div>
                <LanguageSelect />
                <div className={styles.Account}>
                    <div className={styles.AccountLink}>
                        TWOJE KONTO
                    </div>
                </div>
                <Basket />
            </div>
        </Fragment>
    )
}

export default TopBar
