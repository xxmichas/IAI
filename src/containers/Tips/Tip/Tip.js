import React from 'react'
import styles from './Tip.module.css'

const Tip = (props) => {
    return (
        <div className={styles.tip}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div className={styles.desc}>{props.desc}</div>
            </div>
        </div>
    )
}

export default Tip
