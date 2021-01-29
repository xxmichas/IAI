import React from 'react'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = () => {
    return (
        <div className={styles.BC}>
            <div className={styles.BCContents}>
                <a href="https://google.com">Strona główna</a>
                &nbsp; &gt;&gt; &nbsp;
                <a href="https://google.com">Sprzęt</a>
                &nbsp; &gt;&gt; &nbsp;
                <a href="https://google.com"><b>Marker Tippman FT-50</b></a>
            </div>
        </div>
    )
}

export default Breadcrumbs
