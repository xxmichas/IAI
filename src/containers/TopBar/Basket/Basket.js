import React, { useState } from 'react'
import styles from './Basket.module.css'
import badge from '../../../assets/badge.png'

const Basket = () => {
    const [Hovering, SetHovering] = useState(false)

    return (
        <div className={styles.Basket}>
            <div className={`${styles.background} ${Hovering ? styles.hover : null}`}>
                <img src={badge} alt="Koszyk" useMap="#Basket" />
                <map name="Basket">
                    <area onMouseOut={() => {SetHovering(false)}} onMouseOver={() => {SetHovering(true)}} className={styles.BasketMap} alt="Koszyk" coords="0,0 0,131 92,155 185,131 185,0 " shape="polygon" />
                </map>
            </div>
            <div className={styles.content}>
                <div className={styles.rank}>
                    <div className={styles.BasketItems}>
                        0
                    </div>
                </div>
                <div className={styles.BasketText}>
                    <div className={styles.BasketTitle}>
                        TWÓJ KOSZYK
                    </div>
                    <div className={styles.BasketPrice}>
                        0,00zł
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
