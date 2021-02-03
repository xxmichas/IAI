import React from 'react'
import styles from './OffCanvas.module.css'

const OffCanvas = (props) => {


    return (
        <div className={`${styles.offCanvas} ${props.opened ? styles.opened : null}`}>
            <div onClick={() => props.SetOffCanvasOpened(false)} className={styles.close}>

            </div>
        </div>
    )
}

export default OffCanvas
