import React, { Fragment, useState } from 'react'
import styles from './Product.module.css'
import Carousel from './Carousel/Carousel';
import Tblack from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/black.png'
import Tgreen from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/green.png'
import Tpurple from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/purple.png'
import Color from './Color/Color';
import IconOK from '../../assets/ok.png'
import cheaperIcon from '../../assets/cash.png'

const Product = (props) => {
    let [selected, SetSelected] = useState(0)
    let [Amount, SetAmount] = useState(1)
    let price = 1278

    let UpdateAmount = (bonusAmount) => {
        if (Amount + bonusAmount < 0) {
            SetAmount(0)
        }
        else {
            SetAmount(Amount + bonusAmount)
        }
    }

    let UpdateCart = () => {
        props.UpdateCart("TippMann", price, Amount)
    }

    let colors = [
        <Color id={0} select={SetSelected} selected={selected} img={Tblack} alt="Czarny" />,
        <Color id={1} select={SetSelected} selected={selected} img={Tgreen} alt="Zielony" />,
        <Color id={2} select={SetSelected} selected={selected} img={Tpurple} alt="Fioletowy" />,
        <Color id={3} select={SetSelected} selected={selected} img={Tblack} alt="Czarny" />,
        <Color id={4} select={SetSelected} selected={selected} img={Tgreen} alt="Zielony" />,
        <Color id={5} select={SetSelected} selected={selected} img={Tpurple} alt="Fioletowy" />
    ]

    let barrelLength = ['120 cm', '100 cm', '80 cm']
    let calibers = ['55NU', '7,62 mm', '6 mm']

    return (
        <Fragment>
            <div className={styles.Product}>
                <div className={styles.Carousel}>
                    <Carousel />
                </div>
                <div className={styles.leftSide}>
                    <div className={styles.tags}>
                        <div className={styles.tag}>
                            <div className={styles.tagArrow} />
                            <div className={styles.tagBody}>
                                PROMOCJA
                            </div>
                        </div>
                    </div>
                    <div className={styles.preview}>
                        dsa
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.title}>
                        MARKER TIPPMANN FT- 50  LITE 50 CAL RENTAL (BLACK)
                    </div>
                    <div className={styles.desc}>
                        PRODUCENT: <a href="https://google.com">Dye</a>&nbsp;
                        KOD PRODUKTU: 6578758769878
                    </div>
                    <div className={styles.color}>
                        <div className={styles.colorText}>
                            KOLOR:
                        </div>
                        <div className={styles.colorImgs}>
                            {colors.map((el, i) => (
                                <Fragment key={i}>{el}</Fragment>
                            ))}
                        </div>
                    </div>
                    <div className={styles.specs}>
                        <div className={`${styles.spec} ${styles.spec1}`}>
                            <div className={styles.specText}>
                                DŁUGOŚĆ LUFY:
                            </div>
                            <div className={styles.drop}>
                                <select className={styles.dropdown}>
                                    {barrelLength.map((el, i) => (
                                        <option key={i}>{el}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.spec} ${styles.spec2}`}>
                            <div className={styles.specText}>
                                KALIBER:
                            </div>
                            <div className={styles.drop}>
                                <select className={styles.dropdown}>
                                    {calibers.map((el, i) => (
                                        <option key={i}>{el}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shipping}>
                        <div className={styles.availability}>
                            <div className={styles.availabilityIcon}>
                                <img src={IconOK} alt="Dostępny na magazynie" />
                            </div>
                            <div className={styles.availabilityTexts}>
                                <div className={styles.availabilityStatus}>
                                    Dostępny na magazynie (14 szt.)
                                </div>
                                <div className={styles.availabilityDate}>
                                    Wysyłka dzisiaj
                                </div>
                            </div>
                        </div>
                        <div className={styles.shippingDetails}>
                            <div className={styles.shippingDetailsText}>
                                SPRAWDŹ CZASY I KOSZTY WYSYŁKI
                            </div>
                        </div>
                    </div>
                    <div className={styles.purchase}>
                        <div className={styles.price}>
                            <div className={styles.priceOld}>
                                1499,00 zł
                            </div>
                            <div className={styles.priceCurrent}>
                                1278,00 zł
                            </div>
                        </div>
                        <div className={styles.purchaseOptions}>
                            <div className={styles.purchaseAmount}>
                                <div onClick={() => UpdateAmount(-1)} className={styles.addSubtract}>
                                    -
                                </div>
                                <div className={styles.purchaseAmountText}>{Amount}</div>
                                <div onClick={() => UpdateAmount(1)} className={styles.addSubtract}>
                                    +
                                </div>
                            </div>
                            <div onClick={() => UpdateCart()} className={styles.addToBasket}>
                                DODAJ DO KOSZYKA
                            </div>
                        </div>
                    </div>
                    <div className={styles.comparison}>
                        <div className={styles.cheaper}>
                            <div className={styles.cheaperIcon}>
                                <img src={cheaperIcon} alt="Znalazłeś ten produkt taniej?" />
                            </div>
                            <div className={styles.cheaperTexts}>
                                <div className={styles.cheaperTitle}>
                                    Znalazłeś ten produkt taniej? 
                                </div>
                                <div className={styles.cheaperPrice}>
                                    WYNEGOCJUJ DOBRĄ CENĘ
                                </div>
                            </div>
                        </div>
                        <div className={styles.compare}>
                            <div className={styles.compareText}>
                                DODAJ DO PORÓWNANIA
                            </div>
                        </div>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.featuresArrow} />
                        <div className={`${styles.featuresArrow} ${styles.featuresArrowCover}`} />
                        <div className={styles.featuresContent}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Product
