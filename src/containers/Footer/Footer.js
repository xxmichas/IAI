import React from 'react'
import styles from './Footer.module.css'
import fb from '../../assets/facebook-footer.png'
import ig from '../../assets/instagram-footer.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.informations}>
                        <div className={styles.informationsTitle}>
                            INFORMACJE
                        </div>
                        <div className={styles.informationsLinks}>
                            <div className={styles.informationsText}>
                                <div className={styles.informationsLink}>
                                    Informacje o sklepie
                                </div>
                            </div>
                            <div className={styles.informationsText}>
                                <div className={styles.informationsLink}>
                                    Wysyłka
                                </div>
                            </div>
                            <div className={styles.informationsText}>
                                <div className={styles.informationsLink}>
                                    Regulamin
                                </div>
                            </div>
                            <div className={styles.informationsText}>
                                <div className={styles.informationsLink}>
                                    Polityka prywatności
                                </div>
                            </div>
                            <div className={styles.informationsText}>
                                <div className={styles.informationsLink}>
                                    Odstąpienie od umowy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.myAccount}>
                        <div className={styles.myAccountTitle}>
                            MOJE KONTO
                        </div>
                        <div className={styles.myAccountLinks}>
                            <div className={styles.myAccountText}>
                                <div className={styles.myAccountLink}>
                                    Zarejestruj się 
                                </div>
                            </div>
                            <div className={styles.myAccountText}>
                                <div className={styles.myAccountLink}>
                                    Moje zamówienia 
                                </div>
                            </div>
                            <div className={styles.myAccountText}>
                                <div className={styles.myAccountLink}>
                                    Koszyk 
                                </div>
                            </div>
                            <div className={styles.myAccountText}>
                                <div className={styles.myAccountLink}>
                                    Ulubione 
                                </div>
                            </div>
                            <div className={styles.myAccountText}>
                                <div className={styles.myAccountLink}>
                                    Historia transakcji
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.contact}>
                        <div className={styles.contactTitle}>
                            KONTAKT
                        </div>
                        <div className={styles.contactNumber}>
                            +48 574 046 421
                        </div>
                        <div className={styles.contactEmail}>
                            kontakt@assasinarmy.pl
                        </div>
                        <div className={styles.socials}>
                            <div className={styles.social}>
                                <img src={fb} alt="Facebook" />
                            </div>
                            <div className={styles.social}>
                                <img src={ig} alt="Instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.idoSell} />
        </div>
    )
}

export default Footer
