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
                <div className={styles.tags}>
                    <div className={styles.tag}>
                        dsadsa
                    </div>
                </div>
                <div className={styles.title}>
                    dsadsadas
                </div>
            </div>
        </Fragment>
    )
}

export default Product
