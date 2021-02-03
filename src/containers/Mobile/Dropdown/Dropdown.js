import React, { useState } from 'react'
import styles from './Dropdown.module.css'

const Dropdown = (props) => {
    let [dropdownOpen, SetdropdownOpen] = useState(false)

    return (
        <div className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownOpen : null}`}>
            <div onClick={() => {props.isDropdown ? SetdropdownOpen(prev => !prev) : window.location.assign(props.link)}} className={styles.dropdownHeader}>
                <div className={styles.dropdownHeaderContainer}>
                    <div className={styles.dropdownTitle}>{props.title}</div>
                    {props.isDropdown ? <div className={`${styles.dropdownArrow} ${dropdownOpen ? styles.dropdownArrowRotate : null}`} /> : null}
                </div>
            </div>
            {props.isDropdown ?
                <div className={styles.expandable}>
                    {props.options.map((el, i) => (
                        <div key={i} onClick={() => window.location.assign(el.link)} className={styles.dropdownSection}>{el.name}</div>
                    ))}
                </div>
            : null}
        </div>
    )
}

export default Dropdown