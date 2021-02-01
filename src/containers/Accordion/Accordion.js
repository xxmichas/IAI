import React from 'react'
import styles from './Accordion.module.css'
import AccordionItem from './AccordionItem/AccordionItem'

const Accordion = (props) => {
    return (
        <div>
            <ul className={styles.accordion}>
                {props.items.map((item, i) => {
                    return (
                        <li className={styles.accordionItem} key={i}>
                            <AccordionItem {...item} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Accordion