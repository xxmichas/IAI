import React, { useState } from 'react'
import styles from './AccordionItem.module.css'

const AccordionItem = (props) => {
    let [Opened, SetOpened] = useState(false)

    return (
        <div className={Opened ? styles.opened : null} onClick={() => SetOpened(!Opened)}>
            <div className={styles.line}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.icon} />
            </div>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <p className={styles.text}>
                        {props.paragraph}
                    </p>
                </div>
            </div>
        </div>
      )
}

export default AccordionItem