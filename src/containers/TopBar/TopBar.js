import React, { Fragment, useEffect, useState } from 'react'
import TopLinks from '../TopLinks/TopLinks'
import styles from './TopBar.module.css'
import logo from '../../assets/logo.png'
import magnifyingGlass from '../../assets/magnifying-glass.png'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import Basket from './Basket/Basket'
import TopMenu from '../Mobile/TopMenu/TopMenu'

const TopBar = (props) => {
    const mediaQuery = window.matchMedia('(max-width: 800px)')

    let [IsMobile, SetIsMobile] = useState(false)

    let handleResize = (e) => {
        if (e.matches) {
            console.log('Media Query Matched!')
            SetIsMobile(true)
        }
        else {
            SetIsMobile(false)
        }
    }

    useEffect(() => {
        mediaQuery.addEventListener("change", handleResize)
        handleResize(mediaQuery)

        return () => {
            mediaQuery.removeEventListener("change", handleResize)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <div className={styles.TopBar} />
            {IsMobile ? <TopMenu /> : <TopLinks />}
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
                <Basket cart={props.cart} />
            </div>
        </Fragment>
    )
}

export default TopBar
