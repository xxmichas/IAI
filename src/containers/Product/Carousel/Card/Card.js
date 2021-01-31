import React, { useState, useEffect } from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    let SetSelected = () => {
        props.select(props.id)
    }

    let [isSelected, SetisSelected] = useState(false)

    useEffect(() => {
        if (props.selectedCard === props.id) {
            SetisSelected(true)
        }
        else {
            SetisSelected(false)
        }
    }, [props.id, props.selectedCard]);

    return (
        <div onClick={() => SetSelected()} className={`${styles.card} ${isSelected ? styles.borderless : null}`}>
            <div className={`${styles.notSelected} ${isSelected ? styles.Selected : null}`} />
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default Card
