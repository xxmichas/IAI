import React from 'react'
import styles from './Description.module.css'
import SectionLabel from '../SectionLabel/SectionLabel'

const Description = () => {
    return (
        <div className={styles.Description}>
            <SectionLabel title="Marker Firmy Tippmann" />
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.desc}>
                    stworzony z myślą o młodszych graczach, poprzez zmiejszenie kalubru do 50Cal.
                    <br />
                    FT-50 Lite wygladem przypomina marker FT-12 , jednak rózni się on trochę od swojego pierwowzoru.
                    <br />
                    Marker jest trochę krótszy, korpus ma bardziej agresywny charakter, średnica zewnętrzna oraz wewnętrzna  lufy jest mniejsza oraz średnica otworu podającego kulki w magazynku grawitacyjnym jest dostosowana do kalubru 50Cal.
                    <br /><br />
                    kompaktowy militarny wygląd<br />
                    szybkie serwisowanie bez użycia narzędzi<br />
                    aluminiowy chwyt i body<br />
                    wewnętrzny system gazowy "inline bolt system"<br />
                    modułowa konstrukcja<br />
                    stałe przyrządy celownicze<br />
                    Zestaw zawiera magazynek grawitacyjny oraz barrel bag (osłona lufy)<br />
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.serviceBanner}>
                        xd
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsText}>
                            <div className={styles.detailsProp}>

                            </div>
                            <div className={styles.detailsValue}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
