import React, { useState, useEffect } from 'react'
import styles from './Basket.module.css'
import badge from '../../../assets/badge.png'

const Basket = (props) => {
    const [Hovering, SetHovering] = useState(false)
    const [Price, SetPrice] = useState("0,00zł")
    const [Amount, SetAmount] = useState(0)

    useEffect(() => {
        let amount = 0
        let price = 0
        for (const item in props.cart) {
            amount = amount + props.cart[item].amount
            price = price + (props.cart[item].amount * props.cart[item].price)
        }

        SetAmount(amount)
        SetPrice(`${price.toFixed(2).toString()} zł`)
    }, [props.cart])

    return (
        <div className={styles.Basket}>
            <div className={`${styles.background} ${Hovering ? styles.hover : null}`}>
                <img src={badge} alt="Koszyk" useMap="#Basket" />
                <map name="Basket">
                    <area onClick={() => console.log("checkout")} onMouseOut={() => {SetHovering(false)}} onMouseOver={() => {SetHovering(true)}} className={styles.BasketMap} alt="Koszyk" coords="0,0 0,131 92,155 185,131 185,0 " shape="polygon" />
                </map>
            </div>
            <div className={styles.content}>
                <div className={styles.rank}>
                    <div className={styles.BasketItems}>
                        {Amount}
                    </div>
                </div>
                <div className={styles.BasketText}>
                    <div className={styles.BasketTitle}>
                        TWÓJ KOSZYK
                    </div>
                    <div className={styles.BasketPrice}>
                        {Price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
