import React from 'react'
import Basket from '../../TopBar/Basket/Basket'
import styles from './TopMenu.module.css'

const TopMenu = (props) => {
    return (
        <div className={styles.TopMenu}>
            <div onClick={() => props.SetOffCanvasOpened(true)} className={styles.bars} />
            <div className={styles.logo} />
            <Basket cart={props.cart} />
        </div>
    )
}

export default TopMenu