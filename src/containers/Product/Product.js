import React, { Fragment } from 'react'
import styles from './Product.module.css'
import Carousel from './Carousel/Carousel';

const Product = () => {
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
                </div>
            </div>
        </Fragment>
    )
}

export default Product
