import React from 'react'
import styles from './Description.module.css'
import SectionLabel from '../SectionLabel/SectionLabel'
import Accordion from '../Accordion/Accordion'

const Description = () => {
    const items = [
        {
          title: 'Czy ten pistolet jest idealny do gry w paintballa?',
          paragraph: `Zwane popularnie "długimi wiatrówkami" świetnie nadają się do precyzyjnego strzelania na dłuższe dystanse (powyżej 15-20 metrów). Mają większą moc niż wiatrówki pistolety, dłuższą lufę i z tego też względu są zdecydowanie bardziej celne.\nWystrzeliwany z nich śrut ma również większe możliwości przebijania celu`
        },
        {
          title: 'Czy ten model posiada mechanizm spustowy ?',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          title: 'Jakie dobrać naboje do tego sprzętu?',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
          title: 'Nie moge znależć instrukcji, czy mi ją doślecie?',
          paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ]

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
                    <div className={styles.FAQ}>
                        <div className={styles.FAQTitle}>
                            Nasi klienci pytali o:
                        </div>
                        <div className={styles.accordion}>
                            <Accordion items={items} />
                        </div>
                        <div className={styles.help}>
                            <div className={styles.helpText}>
                                Nie znalazłeś odpowiedzi?
                            </div>
                            <div className={styles.helpButton}>
                                Zadaj swoje pytanie
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.serviceBanner}>
                        <div className={styles.serviceBannerContainer}>
                            <div className={styles.serviceBannerTexts}>
                                <div className={styles.serviceBannerBold}>
                                    USŁUGI SERWISOWE
                                </div>
                                <div className={styles.serviceBannerRegular}>
                                    Na sprzęt zakupiony w sklepie
                                </div>
                                <div className={styles.serviceBannerSemiBold}>
                                    STAŁY  RABAT -25%
                                </div>
                            </div>
                            <div className={styles.serviceBannerButton}>
                                SPRAWDŹ
                            </div>
                        </div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <div className={styles.detailsText}>
                            <div className={styles.detailsProp}>
                                Numer seryjny:
                            </div>
                            <div className={styles.detailsValue}>
                                111000
                            </div>
                            <div className={styles.detailsProp}>
                                Model:
                            </div>
                            <div className={styles.detailsValue}>
                                TIPPMANN FT- 50 LITE 50
                            </div>
                            <div className={styles.detailsProp}>
                                Kaliber:
                            </div>
                            <div className={styles.detailsValue}>
                                66 LR HV
                            </div>
                            <div className={styles.detailsProp}>
                                Pojemność magazynka:
                            </div>
                            <div className={styles.detailsValue}>
                                10 nabojów
                            </div>
                            <div className={styles.detailsProp}>
                                Mechanizm spustowy:
                            </div>
                            <div className={styles.detailsValue}>
                                SA (Single Action)
                            </div>
                            <div className={styles.detailsProp}>
                                Siła nacisku spustu:
                            </div>
                            <div className={styles.detailsValue}>
                                1.8 kg / 4 lb
                            </div>
                            <div className={styles.detailsProp}>
                                Wymiary:
                            </div>
                            <div className={styles.detailsValue}>
                                1200x123mm
                            </div>
                            <div className={styles.detailsPaint} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
