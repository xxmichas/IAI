import React from 'react'
import styles from './TopLinks.module.css'
import telephone from '../../assets/telephone.png'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook-logo.png'

const TopLinks = () => {
    return (
        <div className={styles.TopBar}>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={telephone} alt="Telefon" />
                    Tel: +48 517 989 511
                </div>
                <div className={styles.item}>
                    <img src={email} alt="Email" />
                    E-mail: sklep@assassins-arms.com
                </div>
                <div className={styles.item}>
                    <img src={facebook} alt="FaceBook" />
                    assasinarms
                </div>
            </div>
        </div>
    )
}

export default TopLinks
