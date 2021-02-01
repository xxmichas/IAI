import React, { useState } from 'react'
import styles from './AccordionItem.module.css'

const AccordionItem = (props) => {
    let [Opened, SetOpened] = useState(false)

    return (
        <div className={Opened ? styles.opened : null}>
            <div className={styles.line} onClick={() => SetOpened(!Opened)}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.icon} />
            </div>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        {props.paragraph}
                    </div>
                </div>
            </div>
        </div>
      )
}

export default AccordionItem