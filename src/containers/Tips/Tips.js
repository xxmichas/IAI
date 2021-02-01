import React from 'react'
import SectionLabel from '../SectionLabel/SectionLabel'
import Tip from './Tip/Tip'
import styles from './Tips.module.css'
import tip1 from '../../assets/tips/tip1.png'
import tip2 from '../../assets/tips/tip2.png'

const Tips = () => {
    return (
        <div className={styles.Tips}>
            <SectionLabel title="Porady Naszego eksperta" />
            <div className={styles.container}>
                <Tip img={tip1} title="Jak stworzyć samemu farby do gery?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et eros non nisl iaculis ultricies eget nec odio. Fusce nec efficitur elit, non ullamcorper libero. Quisque consequat sapien in lacus condimentum posuere." />
                <Tip img={tip2} title="Jak dobrać naboje z farbą do mojego sprzętu?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut justo eleifend, tempus lorem et, facilisis nisi. Praesent et eros non nisl iaculis ultricies eget nec odio. Fusce nec efficitur elit, non ullamcorper libero. Quisque consequat sapien in lacus condimentum posuere." />
            </div>
        </div>
    )
}

export default Tips