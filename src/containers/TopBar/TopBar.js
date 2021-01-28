import React, { Fragment } from 'react'
import TopLinks from '../TopLinks/TopLinks'
import styles from './TopBar.module.css'
import logo from '../../assets/logo.png'
import magnifyingGlass from '../../assets/magnifying-glass.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'

const TopBar = () => {
    return (
        <Fragment>
            <div className={styles.TopBar}>
                <TopLinks />
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.Search}>
                        <input type="text" placeholder="Wpisz czego szukasz..." />
                    </div>
                    <div className={styles.MagnifyingGlass}>
                        <img src={magnifyingGlass} alt="Szukaj" />
                    </div>
                    <LanguageSelect />
                </div>
            </div>
        </Fragment>
    )
}

export default TopBar
