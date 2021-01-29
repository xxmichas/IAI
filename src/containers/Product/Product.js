import React, { Fragment } from 'react'
import styles from './Product.module.css'
import Carousel from './Carousel/Carousel';

const Product = () => {
    return (
        <Fragment>
            <div className={styles.Product}>
                <Carousel />
            </div>
        </Fragment>
    )
}

export default Product
