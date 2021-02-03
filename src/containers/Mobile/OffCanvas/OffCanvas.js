import React from 'react'
import styles from './OffCanvas.module.css'

const OffCanvas = (props) => {


    return (
        <div onClick={() => props.SetOffCanvasOpened(false)} className={`${styles.backDrop} ${props.opened ? styles.visible : null}`}>
            <div className={`${styles.offCanvas} ${props.opened ? styles.opened : null}`}>
                d
            </div>
        </div>
    )
}

export default OffCanvas
