import React, { useEffect, useState } from 'react'
import styles from './Color.module.css'

const Color = (props) => {
    let SetSelected = () => {
        props.select(props.id)
    }

    let [isSelected, SetisSelected] = useState(false)

    useEffect(() => {
        if (props.selected === props.id) {
            SetisSelected(true)
        }
        else {
            SetisSelected(false)
        }
    }, [props.id, props.selected]);

    return (
        <div onClick={() => SetSelected()} className={styles.colorImg}>
            <div className={`${styles.notSelected} ${isSelected ? styles.Selected : null}`} />
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default Color
