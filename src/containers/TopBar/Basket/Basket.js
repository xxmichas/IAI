import React from 'react'
import styles from './Basket.module.css'
import badge from '../../../assets/badge.png'

const Basket = () => {
    return (
        <div className={styles.Basket}>
            <img src={badge} alt="Koszyk" useMap="#Basket" />
            <map name="Basket">
                <area className={styles.BasketMap} alt="Koszyk" coords="0,0 0,131 92,155 185,131 185,0 " shape="polygon" />
            </map>
        </div>
    )
}

export default Basket
