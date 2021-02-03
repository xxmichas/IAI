import React from 'react'
import styles from './OffCanvas.module.css'
import LanguageSelect from '../../LanguageSelect/LanguageSelect'
import Dropdown from '../Dropdown/Dropdown'
import telephone from '../../../assets/telephone.png'
import email from '../../../assets/email.png'
import fb from '../../../assets/facebook-footer.png'
import ig from '../../../assets/instagram-footer.png'

const OffCanvas = (props) => {

    let accountOptions = [
        {name: "Zarejestruj się", link: "https://google.com"},
        {name: "Moje zamówienia", link: "https://google.com"},
        {name: "Koszyk", link: "https://google.com"},
        {name: "Ulubione", link: "https://google.com"},
        {name: "Historia transakcji", link: "https://google.com"}
    ]

    let bundleOptions = [
        {name: "zestaw", link: "https://google.com"},
        {name: "lorem", link: "https://google.com"},
        {name: "ipsum", link: "https://google.com"},
    ]

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
                    <Dropdown isDropdown={true} title="MOJE KONTO" options={accountOptions} />
                    <Dropdown isDropdown={true} title="GOTOWE ZESTAWY DO GRY" options={bundleOptions} />
                    <Dropdown isDropdown={true} title="SPRZĘT" options={[{name: "sprzęt", link: "https://google.com"}, ...bundleOptions]} />
                    <Dropdown isDropdown={true} title="ODZIEŻ" options={[{name: "odzież", link: "https://google.com"}, {name: "ubrania", link: "https://google.com"}]} />
                    <Dropdown isDropdown={false} title="KULKI" link="https://allegro.pl" />
                    <Dropdown isDropdown={false} title="WYPRZEDAŻE" link="https://allegro.pl" />
                    <div className={styles.footer}>
                        <div className={styles.contact}>
                            <img src={telephone} alt="Telefon" />Tel: +48 517 989 511
                        </div>
                        <div className={styles.contact}>
                            <img src={telephone} alt="Telefon" />Tel: +48 574 046 421
                        </div>
                        <div className={styles.contact}>
                            <img src={email} alt="Email" />E-mail: sklep@assassins-arms.com
                        </div>
                        <div className={styles.contact}>
                            <img src={email} alt="Email" />E-mail: kontakt@assasinarmy.pl
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
        </div>
    )
}

export default OffCanvas
