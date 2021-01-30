import React, { Fragment, useEffect, useState } from 'react'
import styles from './Product.module.css'
import Carousel from './Carousel/Carousel';
import Tblack from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/black.png'
import Tgreen from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/green.png'
import Tpurple from '../../assets/products/MARKER TIPPMANN FT- 50 LITE 50 CAL RENTAL (BLACK)/colors/purple.png'
import Color from './Color/Color';

const Product = () => {
    let [selected, SetSelected] = useState(0)

    let colors = [
        <Color id={0} select={SetSelected} selected={selected} img={Tblack} alt="Czarny" />,
        <Color id={1} select={SetSelected} selected={selected} img={Tgreen} alt="Zielony" />,
        <Color id={2} select={SetSelected} selected={selected} img={Tpurple} alt="Fioletowy" />,
        <Color id={3} select={SetSelected} selected={selected} img={Tblack} alt="Czarny" />,
        <Color id={4} select={SetSelected} selected={selected} img={Tgreen} alt="Zielony" />,
        <Color id={5} select={SetSelected} selected={selected} img={Tpurple} alt="Fioletowy" />
    ]

    useEffect(() => {}, [selected])

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
                </div>
            </div>
        </Fragment>
    )
}

export default Product
